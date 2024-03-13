/* This stack is used for basic infrascture to host a static s3 website

Resources:
- S3 Bucket

*/

import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3Deploy from "aws-cdk-lib/aws-s3-deployment";
import * as iam from "aws-cdk-lib/aws-iam";
// import * as route53 from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";
import { getAppRootDir } from "../utils/get-root-dir";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";

interface S3StaticWebsiteProps extends cdk.NestedStackProps {
  bucketName: string;
  certificateArn: string;
}

export default class S3StaticWebsiteStack extends cdk.NestedStack {
  public readonly bucket: s3.Bucket;
  public readonly cdn: cloudfront.CloudFrontWebDistribution;
  public readonly certificateArn: string;

  constructor(scope: Construct, id: string, props: S3StaticWebsiteProps) {
    super(scope, id, props);
    this.certificateArn = props.certificateArn;

    const s3Bucket = new s3.Bucket(scope, "MainWebsiteBucket", {
      bucketName: props.bucketName,
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
    });

    new s3Deploy.BucketDeployment(this, "DeployWebsite", {
      sources: [s3Deploy.Source.asset(`${getAppRootDir()}/../frontend/out`)],
      destinationBucket: s3Bucket,
    });

    // we must declare bucket before the cloudfront distribution

    this.bucket = s3Bucket;

    const s3BucketPolicy = new PolicyStatement({
      actions: ["s3:GetObject"],
      resources: [`${this.bucket.bucketArn}/*`],
      principals: [new iam.AnyPrincipal()],
      effect: iam.Effect.ALLOW,
    });

    this.bucket.addToResourcePolicy(s3BucketPolicy);

    const cloudfrontDistribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "portfolio-cloudfront-distribution",
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: this.bucket,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        viewerCertificate: {
          aliases: [`${props.bucketName}`, `www.${props.bucketName}`],
          props: {
            acmCertificateArn: this.certificateArn, // optional
            sslSupportMethod: "sni-only",
            minimumProtocolVersion: "TLSv1.2_2021",
            // All `props` options here: https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-cloudfront.CfnDistribution.ViewerCertificateProperty.html
          },
        },
      }
    );

    this.cdn = cloudfrontDistribution;

    // const myZone = route53.HostedZone.fromLookup(this, "MyZone", {
    //   domainName: props.bucketName,
    // });
  }
}

/* This stack is used for basic infrascture to host a static s3 website

Resources: 
- ACM Certificates
- S3 Bucket
- Cloudfront
- Route53

*/
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

interface StackProps extends cdk.StackProps {
  projectName: string;
  bucketName: string;
}

export class StaticWebsite extends cdk.NestedStack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    this.createBucket();
  }

  createBucket() {
    const bucket = new s3.Bucket(this, "Bucket", {
      bucketName: this.props.bucketName,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html",
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const certificate = new acm.Certificate(this, "Certificate", {
      domainName: this.props.bucketName,
      validation: acm.CertificateValidation.fromDns(),
    });

    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "Distribution",
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
              originAccessIdentity: new cloudfront.OriginAccessIdentity(
                this,
                "OAI",
                {
                  comment: `OAI for ${this.props.bucketName}`,
                }
              ),
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
          certificate,
          {
            aliases: [this.props.bucketName],
          }
        ),
      }
    );

    new route53.ARecord(this, "AliasRecord", {
      recordName: this.props.bucketName,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
      zone: hostedZone,
    });

    new cdk.CfnOutput(this, "DistributionId", {
      value: distribution.distributionId,
    });

    new cdk.CfnOutput(this, "DistributionDomainName", {
      value: distribution.distributionDomainName,
    });

    new cdk.CfnOutput(this, "BucketName", {
      value: bucket.bucketName,
    });

    new cdk.CfnOutput(this, "BucketWebsiteURL", {
      value: bucket.bucketWebsiteUrl,
    });
  }
}

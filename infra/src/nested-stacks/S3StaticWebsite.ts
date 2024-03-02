/* This stack is used for basic infrascture to host a static s3 website

Resources:
- S3 Bucket

*/

import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import { Construct } from 'constructs';

interface S3StaticWebsiteProps extends cdk.NestedStackProps {
  bucketName: string;
}

export default class S3StaticWebsiteStack extends cdk.NestedStack {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props: S3StaticWebsiteProps) {
    super(scope, id, props);

    const s3Bucket = new s3.Bucket(scope, "MainWebsiteBucket", {
      bucketName: props.bucketName,
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
    });

    this.bucket = s3Bucket;
  }
}



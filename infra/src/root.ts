import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import S3StaticWebsiteStack from "./nested-stacks/S3StaticWebsite";

export class RootStack extends cdk.Stack {
  public projectName: string;
  public bucketName: string;
  public certificateArn: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.projectName = "PortfolioWebsite";
    this.bucketName = "samuelarant.com";
    this.certificateArn =
      "arn:aws:acm:us-east-1:975050373052:certificate/c4a82c54-2e49-4ad8-a94e-bf5e514906d4";

    this.createStaticWebsite(`${this.projectName}-Static-Website`);
  }

  createStaticWebsite(name: string) {
    return new S3StaticWebsiteStack(this, name, {
      bucketName: this.bucketName,
      certificateArn: this.certificateArn,
    });
  }
}

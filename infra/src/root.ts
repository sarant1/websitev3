import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import S3StaticWebsiteStack from "./nested-stacks/S3StaticWebsite";

export class RootStack extends cdk.Stack {
  public projectName: string;
  public bucketName: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.projectName = "PortfolioWebsite";
    this.bucketName = "samuelarant.com";

    this.createStaticWebsite(`${this.projectName}-Static-Website`)
  }


  createStaticWebsite(name: string) {
    return new S3StaticWebsiteStack(this, name, {
      bucketName: this.bucketName
    })
  }
}

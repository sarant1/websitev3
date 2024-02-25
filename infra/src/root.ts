import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class RootStack extends cdk.Stack {
  public projectName: string;
  public bucketName: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.projectName = "PortfolioWebsite";
    this.bucketName = "samuelarant.com";
  }
}

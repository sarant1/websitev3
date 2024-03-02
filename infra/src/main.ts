import { App } from 'aws-cdk-lib';
import { RootStack } from './root';

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new RootStack(app, 'samuelarant-infra-dev', { env: devEnv });
// new MyStack(app, 'infra-prod', { env: prodEnv });

app.synth();

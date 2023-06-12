"use server";

import { Amplify } from "aws-amplify";

import React from "react";

export default function Home() {
  console.log(process.env.REACT_APP_REGION);
  Amplify.configure({
    Auth: {
      region: process.env.REACT_APP_REGION,
      userPoolId: process.env.REACT_APP_USER_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID,
    },
  });

  return (
    <div>
      <h1>Hello World !</h1>
    </div>
  );
}

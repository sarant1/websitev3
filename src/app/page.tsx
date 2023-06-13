"use client";

import { Amplify, Auth } from "aws-amplify";
import React from "react";
import awsExports from "@/aws-exports";

Amplify.configure(awsExports);

Auth.configure(awsExports);

export default function Home() {
  console.log(process.env.REACT_APP_REGION);

  return (
    <div>
      <h1>Hello World !</h1>
    </div>
  );
}

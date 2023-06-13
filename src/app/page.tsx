"use client";

import { Amplify, Auth } from "aws-amplify";
import React from "react";
import awsExports from "@/aws-exports";

try {
  Amplify.configure(awsExports);
  Auth.configure(awsExports);
  console.log("Amplify configured");
} catch (error) {
  console.log(error);
}

export default function Home() {
  console.log(process.env.REACT_APP_REGION);

  return (
    <div>
      <h1>Hello World !</h1>
    </div>
  );
}

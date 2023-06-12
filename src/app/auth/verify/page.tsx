"use client";

import React from "react";
import { Button } from "@/components/Button";
import { useState, FormEvent } from "react";

const Verify = () => {
  const [email, setEmail] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");

  const submitData = (e: FormEvent<HTMLFormElement>) => {
    console.log("data");
  };
  return (
    <div className="bg-zinc-900">
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-center flex-col items-center bg-zinc-700 rounded-lg p-12">
          <h1 className="justify-center flex bold text-3xl">
            Login to your account !
          </h1>

          <form
            onSubmit={submitData}
            className="form-control w-full max-w-xs mt-8"
          >
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Verification Code"
              className="input input-bordered input-primary w-full max-w-xs mb-3"
              onChange={(e) => setVerificationCode(e.target.value)}
            />

            <Button buttonLabel="Verify" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;

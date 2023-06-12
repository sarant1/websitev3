"use client";

import React, { FormEvent } from "react";
import { Button } from "@/components/Button";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitData = async (e: FormEvent<HTMLFormElement>) => {
    console.log(username, password);
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
              placeholder="Username"
              className="input input-bordered input-primary w-full max-w-xs mb-3"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="text"
              placeholder="Password"
              className="input input-bordered input-primary w-full max-w-xs mb-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button buttonLabel="Sign In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

"use client";

import React, { FormEvent, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/Button";
import { registerNewUser } from "@/lib/auth";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<string>("");

  const registerSchema = z.object({
    email: z.string().email(),
    username: z.string().min(3).max(20),
    password: z.string().min(8).max(100),
    confirmPassword: z.string().refine((data) => data === password, {
      message: "Passwords do not match",
    }),
  });

  const submitData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      registerSchema.parse({ email, username, password, confirmPassword });
      await registerNewUser({ email, username, password });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.issues[0].message);
      } else {
        setErrors("Something went wrong");
      }
    }
  };

  return (
    <div className="bg-zinc-900">
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-center flex-col items-center bg-zinc-700 rounded-lg p-12">
          <h1 className="justify-center flex bold text-3xl">
            Create Your Account !
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
              placeholder="Username"
              className="input input-bordered input-primary w-full max-w-xs mb-3"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-primary w-full max-w-xs mb-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered input-primary w-full max-w-xs mb-3"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button buttonLabel="Sign Up !" />
          </form>
          {errors ? (
            <div className="alert alert-error max-w-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{errors}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

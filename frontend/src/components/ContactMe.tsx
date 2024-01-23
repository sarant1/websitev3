import React from "react";
import { useState } from "react";

const ContactMe: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className="m-2 flex h-[75vh] items-center justify-center">
      <div className="w-[1000px] rounded-lg border-2 border-[rgba(255,255,255,0.2)] bg-[rgba(159,90,253,0.2)]">
        <div className="rounded-t-md bg-[rgba(255,255,255,0.2)]">
          <h1 className="p-4 text-center text-5xl font-bold">Contact Me</h1>
        </div>
        <div className="m-4">
          <input
            id="name"
            type="text"
            className="order m-auto flex w-full rounded-lg border-2 border-[rgba(255,255,255,0.2)] bg-transparent px-3 py-2 text-white focus:outline-none"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="m-4">
          <input
            id="email"
            type="email"
            className="order m-auto flex w-full rounded-lg border-2 border-[rgba(255,255,255,0.2)] bg-transparent px-3 py-2 text-white focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="m-4">
          <textarea
            id="message"
            className="order flex h-[250px] w-full resize-none rounded-lg border-2 border-[rgba(255,255,255,0.2)] bg-transparent px-3 py-2 text-white focus:outline-none"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

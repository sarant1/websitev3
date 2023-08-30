import React from "react";
import { useState } from "react";

const SendMessage: React.FC = () => {
  const [isNameFocused, setIsNameFocused] = useState<boolean>(false);
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isMessageFocused, setIsMessageFocused] = useState<boolean>(false);
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col mx-auto w-2/3">
        <h1 className="text-center text-yellow font-bold text-4xl lg:text-7xl mb-4 ">
          Send Me a Message
        </h1>
        <p className="lg:mx-auto lg:w-1/3 mx-4 text-center text-wrap text-yellow lg:text-2xl">
          Want to say something nice ? or not. Message me here or on&nbsp;
          <a
            href="https://www.linkedin.com/in/samuel-arant-1999sl/"
            className="underline"
          >
            LinkedIn
          </a>
        </p>
        <div>
          <form className="flex flex-col text-yellow text-2xl justify-center my-20 mx-36">
            <div className="flex flex-row mb-12">
              <div>
                <h3
                  className={`text-sm mb-1.5 ${
                    isNameFocused ? "text-blue" : "text-yellow"
                  }`}
                >
                  Your Name
                </h3>
                <input
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                  type="text"
                  className="focus:outline-none focus:border-blue focus:text-blue border-b border-yellow bg-black"
                  placeholder="Enter Your Name"
                ></input>
              </div>
              <div className="ml-auto">
                <h3
                  className={`text-sm mb-1.5 ${
                    isEmailFocused ? "text-blue" : "text-yellow"
                  }`}
                >
                  Your Email
                </h3>
                <input
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  placeholder="Enter Your Email"
                  className="focus:outline-none focus:border-blue border-b focus:text-blue border-yellow bg-black"
                ></input>
              </div>
            </div>
            <div className="">
              <h3
                className={`text-sm mb-1.5 ${
                  isMessageFocused ? "text-blue" : "text-yellow"
                }`}
              >
                Your Message
              </h3>
              <input
                onFocus={() => setIsMessageFocused(true)}
                onBlur={() => setIsMessageFocused(false)}
                className="focus:outline-none focus:border-blue focus:text-blue w-full border-b border-yellow bg-black"
                placeholder="Enter Your Message"
              ></input>
            </div>
            <button className="mx-auto mt-10 py-1 px-10 border-yellow border-solid border-2">
              Send Message&nbsp; &#8594;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;

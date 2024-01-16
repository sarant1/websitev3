import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="border-t-blue text-yellow bg-black">
      <div className="border-blue flex flex-col justify-between border-b-[1px] border-solid md:flex-row">
        <div className="flex flex-col items-center gap-2 p-4 text-xl">
          <div className="text-white">Samuel Arant</div>
          <div>123456 Tampa, FL</div>
          <div>813-123-4567</div>
          <div></div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex flex-col gap-4 text-3xl md:pr-40">
            <button className="underline-offset-4 hover:underline">Work</button>
            <button className="underline-offset-4 hover:underline">
              About
            </button>
            <button className="underline-offset-4 hover:underline">Blog</button>
            <button className="underline-offset-4 hover:underline">
              Contact
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button className="text-lg underline-offset-4 hover:underline">
              LinkedIn
            </button>
            <button className="text-lg underline-offset-4 hover:underline">
              GitHub
            </button>
            <button className="text-lg underline-offset-4 hover:underline">
              Twitter
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 text-center text-lg">
        @2024 SamuelArant. No Rights Reserved
      </div>
    </div>
  );
};

export default Footer;

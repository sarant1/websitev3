import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="border-t-blue text-yellow bg-black">
      <div className="border-blue flex flex-col justify-between border-b-[1px] border-solid pl-4 pt-4">
        <div className="flex flex-col gap-2 text-xl">
          <div className="text-white">Samuel Arant</div>
          <div>123456 Tampa, FL</div>
          <div>813-123-4567</div>
          <div></div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-4 pr-40 text-3xl">
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
      <div className="pb-6 text-center text-lg">
        @2024 SamuelArant. No Rights Reserved
      </div>
    </div>
  );
};

export default Footer;

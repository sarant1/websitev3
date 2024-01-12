import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="border-t-blue text-yellow h-[41vh] border-t-[1px] border-solid bg-black px-56 py-24 pt-12">
      <div className="border-blue flex justify-between border-b-[1px] border-solid pb-8">
        <div className="flex flex-col gap-2 text-xl">
          <div className="text-white">Samuel Arant</div>
          <div>123456 Tampa, FL</div>
          <div>813-123-4567</div>
          <div></div>
        </div>
        <div className="flex pr-10">
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
      <div className="mt-4 text-center text-lg">
        @2024 SamuelArant. No Rights Reserved
      </div>
    </div>
  );
};

export default Footer;

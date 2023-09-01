import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="border-t-blue border-solid border-t-[1px] h-[41vh] bg-black text-yellow pt-12 px-56 py-24">
      <div className="flex justify-between border-b-[1px] border-solid border-blue pb-8">
        <div className="flex flex-col gap-2 text-xl">
          <div className="text-black">Samuel Arant</div>
          <div>123456 Tampa, FL</div>
          <div>813-123-4567</div>
          <div></div>
        </div>
        <div className="flex pr-10">
          <div className="flex flex-col gap-4 pr-40 text-3xl">
            <button className="hover:underline underline-offset-4">Work</button>
            <button className="hover:underline underline-offset-4">
              About
            </button>
            <button className="hover:underline underline-offset-4">Blog</button>
            <button className="hover:underline underline-offset-4">
              Contact
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button className="hover:underline underline-offset-4 text-lg">
              LinkedIn
            </button>
            <button className="hover:underline underline-offset-4 text-lg">
              GitHub
            </button>
            <button className="hover:underline underline-offset-4 text-lg">
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

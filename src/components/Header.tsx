import React from "react";
import { Divider } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <Divider />
      <div className="flex h-[70px] flex-row items-center justify-center gap-12 bg-black text-3xl font-bold">
        <button className="hover-underline-animation text-white">
          {"About"}
        </button>
        <button className="hover-underline-animation text-white">
          {"Projects"}
        </button>
        <button className="hover-underline-animation text-white">
          {"Resume"}
        </button>
        <button className="hover-underline-animation text-white">
          {"Contact"}
        </button>
      </div>
      <Divider />
    </div>
  );
};

export default Header;

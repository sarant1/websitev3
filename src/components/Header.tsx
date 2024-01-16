import React from "react";
import { Divider } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <Divider />
      <div className="flex h-[70px] flex-row items-center justify-center gap-12 bg-black text-3xl font-bold">
        <h1>{"<About>"}</h1>
        <h1>{"<Projects>"}</h1>
        <h1>{"<Resume>"}</h1>
        <h1>{"<Contact>"}</h1>
      </div>
      <Divider />
    </div>
  );
};

export default Header;

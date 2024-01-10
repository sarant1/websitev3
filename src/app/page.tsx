"use client";
import React from "react";
import HamburgerMenu from "~/components/HamburgerMenu";
import LinkIcons from "~/components/LinkIcons";

export default function HomePage(): React.ReactNode {
  return (
    <main>
      <HamburgerMenu />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1 className="font-extrabold text-[hsl(280,100%,70%)] sm:text-[5rem]">
          Hello I'm
        </h1>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Samuel Arant
        </h1>
        <LinkIcons />
      </div>
    </main>
  );
}

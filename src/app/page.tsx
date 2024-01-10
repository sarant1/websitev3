"use client";
import React from "react";
import Landing from "~/components/Landing";
import About from "~/components/About";
import { Divider } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Landing />
      <Divider padding="10" />
      <About />
      <Divider padding="10" />
    </main>
  );
}

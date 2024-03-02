"use client";
import React from "react";
import { useState, useEffect } from "react";
import { HamburgerMenu } from "~/components/HamburgerMenu";
import LinkIcons from "~/components/LinkIcons";
import Header from "~/components/Header";

const Landing = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  return (
    <div>
      <div>
        <div className="block md:hidden">
          <HamburgerMenu isVisible={isVisible} toggleVisibility={toggleMenu} />
        </div>
        <div className="hidden md:block">
          <Header />
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="font-extrabold text-[hsl(280,100%,70%)] sm:text-[5rem]">
          Hello I'm
        </h1>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Samuel Arant
        </h1>
        <LinkIcons />
      </div>
    </div>
  );
};

export default Landing;

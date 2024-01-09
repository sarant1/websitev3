"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";

export default function HomePage(): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => setIsOpen(false);
  const handleStateChange = (state: any) => setIsOpen(state.isOpen);
  return (
    <main>
      <Menu
        right
        isOpen={isOpen}
        width={"280px"}
        styles={styles}
        onStateChange={handleStateChange}
      >
        <ul className="space-y-4">
          <li>
            <Link href="/about" className="text-4xl font-bold hover:text-white">
              about
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-4xl font-bold hover:text-white"
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-4xl font-bold hover:text-white"
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-4xl font-bold hover:text-white"
            >
              resume
            </Link>
          </li>
        </ul>
      </Menu>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1 className="tracking-tgiht font-extrabold text-[hsl(280,100%,70%)] sm:text-[5rem]">
          Hello World, I'm
        </h1>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Samuel Arant
        </h1>
      </div>
    </main>
  );
}

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
};

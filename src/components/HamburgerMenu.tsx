import React from "react";
import { stack as Menu } from "react-burger-menu";
import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Menu right isOpen={isOpen} width={"300px"} styles={styles}>
        <ul className="space-y-4">
          <li>
            <Link
              href="/about"
              className="text-4xl font-bold text-white hover:text-gray-300"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-4xl font-bold text-white hover:text-gray-300"
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-4xl font-bold text-white hover:text-gray-300"
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-4xl font-bold text-white hover:text-gray-300"
            >
              resume
            </Link>
          </li>
        </ul>
      </Menu>
    </div>
  );
};
const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "gray",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "gray",
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

export default HamburgerMenu;

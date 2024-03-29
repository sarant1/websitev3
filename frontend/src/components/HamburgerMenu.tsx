"use client";
import React from "react";
import "./HamburgerMenu.css";

interface HamburgerMenuProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({isVisible, toggleVisibility}) => {


  return (
    <div>
      <div className={`slide-menu ${isVisible ? "active" : ""}`}>
        <ul className="text-xl space-y-4 pt-32 pl-4">
          <li><button><span className="font-bold">00</span> About</button></li>   
          <li><button><span className="font-bold">01</span> Projects</button></li>
          <li><button><span className="font-bold">02</span> Resume</button></li>  
          <li><button><span className="font-bold">03</span> Contact</button></li> 
        </ul>
      </div>
      <div className="hamburger-body">
        <button
          onClick={() => toggleVisibility()}
          className={isVisible ? "opened menu" : "menu"}
          aria-label="Main Menu"
        >
          <svg width="90" height="90" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

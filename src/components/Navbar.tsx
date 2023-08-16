import React from "react";

interface NavBarProps {}

const Navbar: React.FC<NavBarProps> = () => {
  return (
    <div className="flex justify-center items-end gap-8 h-[8vh] text-white text-3xl font-bold font-spartan">
      <button>About</button>
      <button>Contact Me</button>
      <button>
        <img
          id="logo"
          src="/src/assets/cloudsharkicon.png"
          alt="S"
          className="h-12 w-12"
        />
      </button>
      <button>Resume</button>
      <button>Projects</button>
    </div>
  );
};
export default Navbar;

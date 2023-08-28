import React from "react";
import { motion } from "framer-motion";

interface NavBarProps {}

const Navbar: React.FC<NavBarProps> = () => {
  return (
    <motion.div
      className="flex justify-center items-end gap-10 h-[8vh] text-white text-4xl font-bold font-spartan"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
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
    </motion.div>
  );
};
export default Navbar;

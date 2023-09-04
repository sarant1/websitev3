import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

interface NavBarProps {}

const Navbar: React.FC<NavBarProps> = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.div
      className="flex items-end gap-10 h-[10vh] text-white text-4xl font-bold font-spartan"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <div className="ml-auto mr-24">
        <Hamburger
          size={40}
          toggled={isOpen}
          toggle={setOpen}
          direction="left"
        />
      </div>
    </motion.div>
  );
};
export default Navbar;

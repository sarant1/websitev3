import React from "react";
import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Landing: React.FC = () => {
  return (
    <div className="h-[91vh] flex justify-center flex-col items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-white text-2xl mb-4">HELLO, I AM</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-blue font-bold text-8xl mb-8">SAMUEL ARANT</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1.1 }}
        viewport={{ once: true }}
      >
        <p className="text-white text-2xl mb-8">WELCOME TO MY PORTFOLIO</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1.1 }}
        viewport={{ once: true }}
        className="flex gap-4 mb-32"
      >
        <Link to="https://github.com/sarant1" target="_blank">
          <button className="transform transition duration-300 hover:scale-110">
            <SiGithub size={32} className="text-white" />
          </button>
        </Link>
        <Link
          to="https://www.linkedin.com/in/samuel-arant-1999sl/"
          target="_blank"
        >
          <button className="transform transition duration-300 hover:scale-110">
            <SiLinkedin size={32} className="text-[#1260CC]" />
          </button>
        </Link>
        <Link to="https://leetcode.com/sarant1/" target="_blank">
          <button className="transform transition duration-300 hover:scale-110">
            <SiLeetcode size={32} className="text-orange" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Landing;

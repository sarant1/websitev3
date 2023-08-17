import React from "react";
import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Landing: React.FC = () => {
  return (
    <div className="h-[92vh] flex justify-center flex-col items-center">
      <p className="text-white mb-4">HELLO, I AM</p>
      <h1 className="text-blue font-bold text-6xl mb-8">SAMUEL ARANT</h1>
      <p className="text-white mb-8">WELCOME TO MY PORTFOLIO</p>
      <div className="flex gap-4 mb-32">
        <Link to="https://github.com/sarant1" target="_blank">
          <button>
            <SiGithub size={32} className="text-white" />
          </button>
        </Link>
        <Link
          to="https://www.linkedin.com/in/samuel-arant-1999sl/"
          target="_blank"
        >
          <button>
            <SiLinkedin size={32} className="text-white" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;

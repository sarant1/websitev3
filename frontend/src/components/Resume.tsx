import React from "react";
import AwsDeveloperBadge from "~/assets/awsdeveloper.png";
import AwsPractionerBadge from "~/assets/awspractioner.png";
import SecurityPlusBadge from "~/assets/securityplus.png";
import { useState } from "react";

const Resume: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className="">
      <h1 className="my-10 text-center text-4xl font-extrabold text-[hsl(240,100%,70%)] lg:text-6xl">
        ~ <span className="text-white">Resume</span> ~
      </h1>
      <div
        className="my-10 text-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href="/resume"
          rel="noopner noreferrer"
          target="_blank"
          className="text-bold rounded-lg bg-[rgba(255,255,255,0.8)] p-2  px-3 text-slate-800 hover:bg-[hsl(240,30%,70%)] hover:shadow"
        >
          Download {isHovered ? "->" : ">"}
        </a>
      </div>
      <div className="my-10 flex justify-center">
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <img
            src={AwsDeveloperBadge.src}
            alt="AWS Developer Badge"
            className="h-[120px] w-[120px] lg:h-[200px] lg:w-[200px]"
          />
        </a>
        <a href="https://google.com" target="_blank" rel="noopner noreferrer">
          <img
            src={SecurityPlusBadge.src}
            alt="Security Plus Badge"
            className="h-[120px] w-[120px] rounded-full lg:h-[200px] lg:w-[200px]"
          />
        </a>
        <a href="https://google.com" target="_blank" rel="noopner noreferrer">
          <img
            src={AwsPractionerBadge.src}
            alt="AWS Practioner Badge"
            className="h-[120px] w-[120px] lg:h-[200px] lg:w-[200px]"
          />
        </a>
      </div>
    </div>
  );
};

export default Resume;

import React from "react";
import AwsDeveloperBadge from "~/assets/awsdeveloper.png";
import AwsPractionerBadge from "~/assets/awspractioner.png";
import SecurityPlusBadge from "~/assets/securityplus.png";
import { useState } from "react";

const Resume: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className="">
      <h1 className="my-10 text-center text-4xl font-extrabold lg:text-6xl">
        View my <span className="text-[hsl(240,100%,70%)]">Resume</span>
      </h1>
      <div
        className="my-10 text-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="rounded-lg bg-[rgba(255,255,255,0.8)] p-2  px-3 text-slate-800 hover:bg-[hsl(240,30%,70%)] hover:shadow">
          Download {isHovered ? "->" : ">"}
        </button>
      </div>
      <div className="my-10 flex justify-center">
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <img
            src={AwsDeveloperBadge.src}
            alt="AWS Developer Badge"
            className="h-[200px] w-[200px]"
          />
        </a>
        <a href="https://google.com" target="_blank" rel="noopner noreferrer">
          <img
            src={SecurityPlusBadge.src}
            alt="Security Plus Badge"
            className="h-[200px] w-[200px] rounded-full"
          />
        </a>
        <a href="https://google.com" target="_blank" rel="noopner noreferrer">
          <img
            src={AwsPractionerBadge.src}
            alt="AWS Practioner Badge"
            className="h-[200px] w-[200px]"
          />
        </a>
      </div>
    </div>
  );
};

export default Resume;

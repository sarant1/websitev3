import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const LinkIcons = () => {
  return (
    <div>
      <ul className="flex gap-4 p-4">
        <li>
          <a
            href="https://www.linkedin.com/in/samuel-arant-1999sl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl"
          >
            <FaLinkedin
              style={{
                color: "#0A66C2",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              className="hover:scale-110"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/sarant1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl"
          >
            <FaGithubSquare
              style={{
                color: "#7B68EE",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              className="hover:scale-110"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/samuel-arant-1999sl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl"
          >
            <FaSquareXTwitter
              style={{
                color: "#1DA1F2",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              className="hover:scale-110"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinkIcons;

import React from "react";

interface ProjectItemProps {
  title: string;
  description: string;
  techStack: string[];
  github: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (project) => {
  return (
    <div className="container relative mx-2 h-[300px] rounded-lg border-2 border-[rgba(255,255,255,0.2)] bg-[rgba(159,90,253,0.2)] hover:cursor-pointer hover:cursor-pointer hover:border-[rgba(255,255,255,0.7)] md:w-[400px]">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/sarant1/${project.github}`}
      >
        <div className="rounded-t-md bg-[rgba(255,255,255,0.2)] p-3">
          <h1
            className="text-center text-xl font-extrabold
        "
          >
            {project.title}
          </h1>
        </div>
        <div className="">
          <h3 className="px-3 pt-2 font-bold">
            Tech Stack:{" "}
            <span className="font-normal">{project.techStack.join(", ")}</span>{" "}
          </h3>
          <div className="p-3">
            <h3 className="font-bold">
              Description:{" "}
              <span className="font-normal">{project.description}</span>
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectItem;

import React from "react";
import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Phony Hawk ZeroG",
      color: "gray",
      desc: "Hello There",
      key: 1,
    },
    {
      title: "Project Name",
      color: "purple",
      desc: "Hello World",
      key: 2,
    },
    {
      title: "Cruddur",
      color: "blue",
      desc: "Hello World",
      key: 2,
    },
  ];
  return (
    <div className="">
      {projects.map((project) => (
        <ProjectItem project={project} key={project.key} />
      ))}
    </div>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  const projects = [
    { title: "Phony Hawk ZeroG", color: "gray" },
    { title: "Project Name", color: "green" },
  ];
  return (
    <div className="h-[100vh]">
      {projects.map((project) => (
        <ProjectItem title={project.title} color={project.color} />
      ))}
    </div>
  );
};

export default Projects;

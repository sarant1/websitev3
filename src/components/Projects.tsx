import React from "react";
import ProjectItem from "~/components/ProjectItem";

const Projects: React.FC = () => {
  return (
    <div className="py-10 md:p-10">
      <h1 className="pb-10 text-center text-5xl font-bold">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Projects;

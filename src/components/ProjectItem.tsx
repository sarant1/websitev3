import React from "react";
import { Divider } from "@chakra-ui/react";

const ProjectItem: React.FC = () => {
  return (
    <div className="container relative mx-2 h-[300px] rounded-lg border-2 border-[rgba(255,255,255,0.2)] bg-[rgba(159,90,253,0.2)] hover:cursor-pointer hover:border-[rgba(255,255,255,0.7)] md:w-[400px]">
      <div className="rounded-t-md bg-[rgba(255,255,255,0.2)] p-3">
        <h1 className="text-center">Project Item</h1>
      </div>
      <div className="">
        <h3 className="px-3 pt-2">Tech Stack: </h3>
        <p className="p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, voluptatum, voluptatibus, voluptas quae quos nesciunt
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;

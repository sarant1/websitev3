import React from "react";
import { motion } from "framer-motion";

interface Project {
  color: string;
  title: string;
  desc: string;
}

interface ProjectItemProps {
  project: Project;
  key: number;
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  const { color, title, desc } = props.project;

  const colorMap: Record<string, string> = {
    gray: "bg-gray",
    purple: "bg-purple",
    blue: "bg-blue",
  };

  const bgColorClass = colorMap[color] || "bg-purple";

  if (!title) {
    return <></>;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.0, delay: 0.5 }}
      viewport={{ once: true }}
      className={``}
    >
      <div
        className={`flex mt-10 justify-between items-center p-12 ${bgColorClass} rounded-lg h-[250px] mx-24`}
      >
        <div className="w-2/3">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="">{desc}</p>
        </div>
        <div className="h-full bg-blue w-72 rounded-lg">Hello World</div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;

import React from "react";
import { motion } from "framer-motion";

interface ProjectItemProps {
  color: string;
  title: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  if (!props.title) {
    return <></>;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.0, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        className={`flex mt-10 justify-between items-center p-12 rounded-lg bg-${props.color} h-[250px] mx-24`}
      >
        <div className="w-2/3">
          <h1 className="text-4xl font-bold">{props.title}</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            rerum non laboriosam laborum, repellendus eveniet odio quia
            consectetur ducimus porro exercitationem doloribus enim! Officiis,
            optio placeat dicta ducimus odio nostrum velit alias quia dolore
            maiores facilis magnam cupiditate in dolorum ut maxime. Eius ab
            explicabo incidunt! Voluptates dignissimos eius omnis, id numquam
            eaque perferendis, recusandae eos, rem consequuntur sed aliquam
            unde! Dolorum consequuntur facilis quam, natus quis quod ab ipsum
            quae nisi accusantium pariatur sit similique minima qui voluptate
            autem exercitationem doloremque consectetur! Explicabo, magni.
            Molestias dicta cum a dolor quaerat sapiente illum rem, animi sequi
            harum quasi, ex commodi?
          </p>
        </div>
        <div className="h-full bg-blue w-72 rounded-lg">Hello World</div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;

import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <div className="h-[100vh]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.0, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-yellow text-4xl text-center mb-24">
          Projects
        </h1>
      </motion.div>
    </div>
  );
};

export default Projects;

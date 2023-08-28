import React from "react";
import securityBadge from "../assets/certs/securityplus.png";
import developerBadge from "../assets/certs/awsdeveloper.png";
import practionerBadge from "../assets/certs/awspractioner.png";
import { motion } from "framer-motion";

const Certifications: React.FC = () => {
  return (
    <div className="h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h1 className="font-bold text-yellow text-4xl text-center mb-24">
          Certifications
        </h1>
      </motion.div>
      <div className="flex justify-center gap-24 items-end">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img
            src={developerBadge}
            alt="Developer Badge"
            className="h-92 w-92 mx-auto mb-8"
          />
          <h1 className="font-bold text-center text-yellow text-2xl">
            AWS Certified Developer Associate
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img
            src={securityBadge}
            alt="Security+ Badge"
            className="rounded-lg h-80 w-80 mx-auto mb-16"
          />
          <h1 className="font-bold text-center text-yellow text-2xl">
            CompTIA Security+
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img
            src={practionerBadge}
            alt="Practioner Badge"
            className="h-92 w-92 mx-auto mb-8"
          />
          <h1 className="font-bold text-center text-yellow text-2xl">
            AWS Certified Cloud Practitioner
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;

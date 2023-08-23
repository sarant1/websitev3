import React from "react";
import securityBadge from "../assets/certs/securityplus.png";
import developerBadge from "../assets/certs/awsdeveloper.png";
import practionerBadge from "../assets/certs/awspractioner.png";

const Certifications: React.FC = () => {
  return (
    <div className="h-screen">
      <h1 className="font-bold text-yellow text-4xl text-center mb-24">
        Certifications
      </h1>
      <div className="flex justify-center gap-24 items-end">
        <div className="">
          <img
            src={developerBadge}
            alt="Developer Badge"
            className="h-92 w-92 mx-auto mb-8"
          />
          <h1 className="text-center text-yellow text-2xl">
            AWS Certified Developer Associate
          </h1>
        </div>
        <div className="">
          <img
            src={securityBadge}
            alt="Security+ Badge"
            className="rounded-lg h-80 w-80 mx-auto mb-16"
          />
          <h1 className="text-center text-yellow text-2xl">
            CompTIA Security+
          </h1>
        </div>
        <div className="">
          <img
            src={practionerBadge}
            alt="Practioner Badge"
            className="h-92 w-92 mx-auto mb-8"
          />
          <h1 className="text-center text-yellow text-2xl">
            AWS Certified Cloud Practitioner
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

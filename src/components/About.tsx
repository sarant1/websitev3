import React from "react";
import profilePic from "~/assets/teton.jpeg"; // replace with your image path

const About = () => {
  return (
    <div className="my-10 flex flex-col items-center gap-8 p-3 md:mx-20 md:flex-row md:p-8">
      <div className="flex justify-center md:w-1/2 md:justify-end">
        <img
          src={profilePic.src}
          alt="Profile"
          className="max-h-xs md:max-h-sm max-w-xs rounded-full md:max-w-sm"
        />
      </div>
      <div className="md:flex-grow">
        <h1 className="mb-4 text-4xl font-bold">About Me</h1>
        <p className="text-lg leading-relaxed">
          After previously pursuing a career in the medical field, I am
          switching to tech, specifically the fast-growing field of cloud
          computing. My dream job would be working with cloud, Linux, and/or
          full-stack development.
          <br />
          <br />
          I have a strong understanding of computer science despite having a
          biomedical degree. I focus mainly on the AWS platform, but am
          interested in working with Azure and GCP as well. I enjoy learning
          about serverless services like Lambda, API gateway, SQS, SNS, etc.
          <br />
          <br />
          Currently, I utilize Python and JavaScript for all my projects. I am
          always open to learning new things and my main goal is to learn and
          improve my skills every day. I'm completely self-taught and I will
          never give up!
        </p>
      </div>
    </div>
  );
};

export default About;

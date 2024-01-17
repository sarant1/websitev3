import React from "react";
import ProjectItem from "~/components/ProjectItem";

const projects = [
  {
    id: 1,
    title: "Twitter/X Clone",
    description:
      "This a full stack application that has similar functionality to twitter.  It uses many different AWS services and terraform. Also includes a chat feature that utilizes dynamodb",
    techStack: [
      "React",
      "Javascript",
      "HTML/CSS",
      "DynamoDb",
      "PostgresSQL",
      "Terraform",
      "Docker",
    ],
    github: "aws-bootcamp-cruddur-202",
  },
  {
    id: 2,
    title: "Chatwave",
    description:
      "A real time web chat applications that allows chatting using web sockets through the AWS Appsync GraphQl API.",
    techStack: ["NextJs", "TypeScript", "Serverless", "AWS CDK", "DynamoDB"],
    github: "chatwave",
  },
  {
    id: 3,
    title: "PDF Converter",
    description:
      "This can take any pdf and add a watermark to it.  It is completely serverless as it uses AWS Lambda and API Gateway.",
    techStack: ["React", "python", "AWS Lambda", "HTML/CSS"],
    github: "pdfconverter",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "This is my personal portfolio website.  It is built using NextJs and TailwindCSS.",
    techStack: ["NextJs", "React", "TypeScript", "TailwindCSS"],
    github: "websitev3",
  },
  {
    id: 4,
    title: "Phony Hawk Zero G",
    description:
      "A simple 2d game where you dodge asteroids and try and survive as long as possible",
    techStack: ["Python", "Pygame"],
    github: "Phony_Hawk_ZeroG",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="py-10 md:p-10">
      <h1 className="pb-10 text-center text-5xl font-bold">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

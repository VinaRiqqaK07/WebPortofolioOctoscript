import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => {
  return (
    <div className="flex flex-col ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
  );
};

import React from "react";
import ProjectCard from "./ProjectCard";
import { IPCProps } from "../../type";

const Projects: React.FC<{ projects: IPCProps[] }> = ({ projects }) => {
  return (
    <>
      {projects.map((_) => (
        <ProjectCard {..._} key={_.id} />
      ))}
    </>
  );
};

export default Projects;

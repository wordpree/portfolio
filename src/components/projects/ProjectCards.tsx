import React from "react";
import ProjectCard from "./ProjectCard";
import { IPCSProps } from "../../type";

const ProjectCards: React.FC<IPCSProps> = ({ projects }) => {
  return (
    <>
      {projects.map((_) => (
        <ProjectCard {..._} key={_.id} />
      ))}
    </>
  );
};

export default ProjectCards;

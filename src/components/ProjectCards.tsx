import React from "react";
import Projects from "./Projects";
import MoreButton from "./MoreButton";
import { projects } from "../data";

const ProjectCards: React.FC = () => {
  const sliceData = projects.slice(0, 4);
  return (
    <>
      <Projects projects={sliceData} />
      <MoreButton />
    </>
  );
};

export default ProjectCards;

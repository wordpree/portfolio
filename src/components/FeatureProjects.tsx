import React from "react";
import { projects } from "../data";
import Projects from "./projects/Projects";

const FeatureProjects = () => {
  return <Projects projects={projects} />;
};

export default FeatureProjects;

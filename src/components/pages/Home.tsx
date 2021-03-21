import React from "react";
import { Container } from "@material-ui/core";
import { Hero, Skill, Portfolio, MoreButton } from "../index";
import Project from "./Project";
import { default as NewSkills } from "../Skills";
import { projects } from "../../data";

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <Project projects={projects.slice(0, 4)} />
        <MoreButton />
        <Portfolio />
        <Container>
          <NewSkills />
        </Container>
        <Skill />
      </main>
    </>
  );
};

export default Home;

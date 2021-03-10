import React from "react";
import Toast from "./Toast";
import { Container } from "@material-ui/core";
import {
  Footer,
  ScrollBar,
  Hero,
  Contact,
  Projects,
  Skill,
  Portfolio,
} from "./index";
import { default as NewSkills } from "./Skills";

const Layout = () => {
  return (
    <>
      <Toast />
      <ScrollBar />
      <Contact />
      <Hero />
      <main>
        <Projects />
        <Portfolio />
        <Container>
          <NewSkills />
        </Container>
        <Skill />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import Toast from "./Toast";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import {
  Footer,
  ScrollBar,
  Hero,
  Header,
  Contact,
  Projects,
  Skill,
  Portfolio,
  ScrollTop,
  MoreButton,
} from "./index";
import { default as NewSkills } from "./Skills";
import { projects } from "../data";

const Layout = () => {
  return (
    <>
      <Toast />
      <ScrollBar />
      <Contact />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <main>
            <Projects projects={projects.slice(0, 4)} />
            <MoreButton />
            <Portfolio />
            <Container>
              <NewSkills />
            </Container>
            <Skill />
          </main>
        </Route>
        <Route path={`/projects`} exact>
          <ScrollTop />
          <Projects projects={projects} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import Toast from "./Toast";
import { Route, Switch } from "react-router-dom";
import { Footer, ScrollBar, Header, Contact, ScrollTop } from "./index";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Project from "./pages/Project";

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
          <Home />
        </Route>
        <Route path={`/projects`}>
          <ScrollTop />
          <Project projects={projects} />
        </Route>
        <Route path={`/blog`}>
          <ScrollTop />
          <Blog />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default Layout;

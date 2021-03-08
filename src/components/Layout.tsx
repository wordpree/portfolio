import React from "react";
import Toast from "./Toast";
import {
  Footer,
  ScrollBar,
  Hero,
  Contact,
  Projects,
  Skill,
  Portfolio,
} from "./index";

const Layout = () => {
  return (
    <>
      <Toast />
      <ScrollBar />
      <Contact />
      <Hero />
      <main>
        <Projects />
        <Skill />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import { Banner, Bio, Footer, Skills } from "./index";
import { Container, CssBaseline } from "@material-ui/core";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Banner />
      <Container>
        <Bio />
        <Skills />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

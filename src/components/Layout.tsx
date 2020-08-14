import React from "react";
import { Banner, Bio, Footer, Skills, Portfolio } from "./index";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    background:
      "linear-gradient(180deg,#fafafa 0%,rgba(133, 80, 252, 0.2) 100%)",
  },
  container: {
    [theme.breakpoints.down(400)]: {
      padding: 0,
    },
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <>
      <Banner />
      <section className={classes.main}>
        <Container className={classes.container}>
          <Bio />
          <Skills />
          <Portfolio />
          <Footer />
        </Container>
      </section>
    </>
  );
};

export default Layout;

import React from "react";
import { Banner, Bio, Footer, Skills, Portfolio } from "./index";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
      <Container className={classes.container}>
        <Bio />
        <Skills />
        <Portfolio />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

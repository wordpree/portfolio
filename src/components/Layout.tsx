import React from "react";
import { Banner, Bio, Footer, Skills } from "./index";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";

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
      <CssBaseline />
      <Banner />
      <Container className={classes.container}>
        <Bio />
        <Skills />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

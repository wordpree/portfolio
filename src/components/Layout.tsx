import React from "react";
import { Banner, Bio, Header, Footer } from "./index";
import { Container, makeStyles, CssBaseline } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem",
    },
  },
}));

const Layout = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <Banner />
      <Container className={classes.container}>
        <Header />
        <Bio />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

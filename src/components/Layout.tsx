import React from "react";
import { Banner, Bio, Footer } from "./index";
import { Container, makeStyles, CssBaseline } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    background:
      "linear-gradient(180deg,#fafafa 0%,#fafafa 15%,rgba(133, 80, 252, 0.4) 100%)",
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
        <Bio />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

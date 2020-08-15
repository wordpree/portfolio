import React from "react";
import { useViewportScroll, useTransform } from "framer-motion";
import { Container, makeStyles } from "@material-ui/core";
import { Banner, Bio, Footer, Skills, Portfolio, ScrollBar } from "./index";

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
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const yOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 1]);
  return (
    <>
      <ScrollBar height={y} yOpacity={yOpacity} scale={scale} />
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

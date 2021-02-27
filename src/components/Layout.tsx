import React from "react";
import { useViewportScroll, useTransform } from "framer-motion";
import { makeStyles, Container } from "@material-ui/core";
import {
  Banner,
  Bio,
  Footer,
  Skills,
  Portfolio,
  ScrollBar,
  Header,
  Contact,
  Social,
} from "./index";
import SideBar from "./SideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  main: {
    // background: "linear-gradient(180deg,#fafafa 0%,#EEE9FA 100%)",
    background: "#fff",
  },
  hero: {
    background: "#FAFAFF",
    paddingBottom: "3em",
    [theme.breakpoints.up("lg")]: {
      borderBottomRightRadius: 50,
      flexGrow: 1,
      paddingBottom: "6.375em",
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
      {/* <ScrollBar height={y} yOpacity={yOpacity} scale={scale} /> */}
      <Contact />
      <div className={classes.root}>
        <div className={classes.hero}>
          <Container>
            <Header />
            <Banner />
          </Container>
          <Social />
        </div>
        <SideBar />
      </div>
      <main>
        <section className={classes.main}>
          <Bio />
          <Skills />
          <Portfolio />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import Toast from "./Toast";
import { useViewportScroll, useTransform } from "framer-motion";
import { makeStyles, Container } from "@material-ui/core";
import {
  Banner,
  Footer,
  ScrollBar,
  Header,
  Contact,
  Social,
  Projects,
  Sidebar,
  Skill,
  Portfolio,
} from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  hero: {
    background: "#FAFAFF",
    paddingBottom: "3em",
    boxShadow: "1px 1px 12px rgba(0,0,0,0.1)",
    [theme.breakpoints.up("lg")]: {
      borderBottomRightRadius: 50,
      flexGrow: 1,
      paddingBottom: "6.375em",
      zIndex: 1,
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
      <Toast />
      <ScrollBar height={y} yOpacity={yOpacity} scale={scale} />
      <Contact />
      <div className={classes.root}>
        <div className={classes.hero}>
          <Container>
            <Header />
            <Banner />
          </Container>
          <Social />
        </div>
        <Sidebar />
      </div>
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

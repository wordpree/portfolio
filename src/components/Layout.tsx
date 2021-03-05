import React from "react";
import Toast from "./Toast";
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
  Article,
  ProjectCards,
  Sidebar,
} from "./index";
import { projectArticle } from "../data";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  main: {
    background: "#fff",
    marginTop: "8rem",
    [theme.breakpoints.up("sm")]: {
      padding: "1em 3em",
    },
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
        <Container>
          <section className={classes.main}>
            <Article {...projectArticle} />
            <ProjectCards />
            <Bio />
            <Skills />
            <Portfolio />
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

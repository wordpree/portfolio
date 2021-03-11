import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Tech from "./Tech";
import Skill from "./Skill";
import Sidebar from "../Sidebar";
import Article from "../Article";
import { skillArticle } from "../../data";

const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  main: {
    background: "#F9F9F9",
    padding: "6em 1em",
    boxShadow: "0px -8px 8px -8px rgba(0,0,0,0.1)",
    [theme.breakpoints.up("lg")]: {
      borderTopLeftRadius: 50,
      flex: 1,
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Sidebar />
      <div className={classes.main}>
        <Container>
          <Article {...skillArticle} />
          <Tech />
          <Skill />
        </Container>
      </div>
    </section>
  );
};

export default Index;

import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import Article from "../Article";
import ProjectCards from "./ProjectCards";
import { projectArticle } from "../../data";

const useStyles = makeStyles((theme) => ({
  projects: {
    background: "#fff",
    margin: "7rem auto",
    [theme.breakpoints.up("sm")]: {
      padding: "1em 3em",
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <Container>
      <section className={classes.projects}>
        <Article {...projectArticle} />
        <ProjectCards />
      </section>
    </Container>
  );
};

export default Index;
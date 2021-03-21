import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import Article from "../Article";
import ProjectCards from "../projects/ProjectCards";
import { projectArticle } from "../../data";
import { IPCSProps } from "../../type";

const useStyles = makeStyles((theme) => ({
  projects: {
    background: "#fff",
    margin: "7rem auto 5rem",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      padding: "1em 3em",
    },
  },
}));

const Project: React.FC<IPCSProps> = ({ projects }) => {
  const classes = useStyles();
  return (
    <Container>
      <section className={classes.projects}>
        <Article {...projectArticle} />
        <ProjectCards projects={projects} />
      </section>
    </Container>
  );
};

export default Project;

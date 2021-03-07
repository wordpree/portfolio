import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Tech from "./Tech";
import Skill from "./Skill";
import Article from "../Article";
import { skillArticle } from "../../data";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F9F9F9",
    padding: "5em 1em",
    boxShadow: "-1px -1px 12px rgba(0,0,0,0.1)",
    [theme.breakpoints.up("lg")]: {
      borderTopLeftRadius: 50,
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Article {...skillArticle} />
        <Tech />
        <Skill />
      </Container>
    </div>
  );
};

export default Index;

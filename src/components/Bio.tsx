import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Entry from "./Entry";
import who from "../assets/who.svg";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    [theme.breakpoints.up(960)]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  figure: {
    margin: "0 auto",
    width: "100%",
    [theme.breakpoints.up(960)]: {
      width: "none",
      padding: "1.5rem",
    },
  },
  who: {
    width: "97%",
    display: "block",
    margin: "0 auto",
    maxWidth: 388,
    maxHeight: 328,
    [theme.breakpoints.up(960)]: {
      maxWidth: "none",
      width: 348,
      maxHeight: 368,
    },
  },
  article: {
    padding: "1rem",
    [theme.breakpoints.up(960)]: {
      paddingLeft: "4%  ",
    },
  },
  name: {
    color: "#FC8E53",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    color: "#8550FC",
  },
  content: {
    padding: "2rem 0.5rem",
  },
}));

const Bio = () => {
  const classes = useStyle();
  return (
    <Entry>
      <div className={classes.root}>
        <figure className={classes.figure}>
          <img src={who} className={classes.who} alt="introduction" />
        </figure>
        <article className={classes.article}>
          <Typography variant="body2" className={classes.name}>
            Hai Jun Wang
          </Typography>
          <Typography variant="h5" className={classes.title}>
            Brief Introduction About Myself
          </Typography>
          <Typography className={classes.content}>
            Technical professional with over five years of experience in
            developing creative react frames, delivering successful router
            development project, creating functionalities. Throughout my career,
            I have made it my priority to utilize current technologies and new
            techniques to develop elegant, creative technical solutions across
            all project phases. Comfortable in collaborative and
            independently-driven roles, I can adapt and revise my strategies to
            meet evolving priorities, shifting needs, and emergent issues.
          </Typography>
        </article>
      </div>
    </Entry>
  );
};

export default Bio;

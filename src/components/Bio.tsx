import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import who from "../assets/who.svg";

const useStyle = makeStyles((theme) => ({
  section: {
    margin: "5rem auto 0",
    padding: "0.25rem",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    background: "rgba(133, 80, 252, 0.1)",
    borderRadius: 6,
    [theme.breakpoints.up(768)]: {
      padding: "2rem",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    [theme.breakpoints.up(768)]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  figure: {
    margin: "0 auto",
    width: "100%",
    [theme.breakpoints.up(768)]: {
      width: "none",
      padding: "1.5rem",
    },
  },
  who: {
    width: "97%",
    display: "block",
    margin: "0 auto",
    maxWidth: 388,
    [theme.breakpoints.up(768)]: {
      maxWidth: "none",
      width: 348,
    },
  },
  article: {
    padding: "1rem",
    [theme.breakpoints.up(768)]: {
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
    <section className={classes.section}>
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
    </section>
  );
};

export default Bio;

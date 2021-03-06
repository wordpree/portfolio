import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import profile from "../assets/profile.png";
import { ButtonWithIcon } from "./CusButton";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "3em 0 0",
    [theme.breakpoints.up("md")]: {
      padding: "7em 0 0",
    },
  },
  hero: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginBottom: "1em",
    [theme.breakpoints.up("md")]: {
      padding: "2em 1.75em 0",
      flexDirection: "row-reverse",
      marginBottom: "4.375em",
      alignItems: "center",
    },
  },
  photo: {
    background: `center / cover no-repeat url(${profile})`,
    height: 276,
    width: 276,
    margin: "0 auto 5em",
    [theme.breakpoints.up("md")]: {
      margin: 0,
      height: 308,
      width: 308,
    },
    [theme.breakpoints.up("lg")]: {
      height: 368,
      width: 368,
    },
  },
  article: {
    [theme.breakpoints.up("md")]: {
      marginRight: "auto",
      maxWidth: "57.825%",
    },
    "&>*": {
      textAlign: "center",
      marginBottom: "2rem",
      [theme.breakpoints.up("md")]: {
        marginBottom: "2.5rem",
        textAlign: "left",
      },
    },
    "&>h2": {
      fontFamily: "Lobster",
      letterSpacing: 5,
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "#444",
      [theme.breakpoints.up(360)]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("md")]: {
        marginRight: "auto",
        fontSize: "3rem",
        lineHeight: 1.2,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.5rem",
      },
    },
    "&>p": {
      fontSize: "1rem",
      color: "#444",
      letterSpacing: 1.2,
      maxWidth: 475,
      margin: "0 auto",
      [theme.breakpoints.up("md")]: {
        fontWeight: 400,
        maxWidth: "none",
        fontSize: "1.125rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.125rem",
      },
    },
    "&>div": {
      marginBottom: 0,
      marginTop: "3.5rem",
    },
  },
}));

const Banner = () => {
  const classes = useStyle();
  return (
    <section className={classes.root}>
      <div className={classes.hero}>
        <div className={classes.photo} />
        <article className={classes.article}>
          <Typography variant="h2">
            Think the Design,
            <br /> Develop the Thinking.
          </Typography>
          <Typography>
            A well-established software engineer with educational background and
            passion for designing and developing website and application
          </Typography>
          <div>
            <ButtonWithIcon />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Banner;

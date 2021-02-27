import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import profile from "../assets/profile.png";
import { ButtonWithIcon } from "./CusButton";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    padding: "2em 0 0",
    textAlign: "center",
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
    },
  },
  photo: {
    background: `center / cover no-repeat url(${profile})`,
    height: 276,
    width: 276,
    margin: "0 auto 5em",
    [theme.breakpoints.up("md")]: {
      margin: "0 auto",
    },
    [theme.breakpoints.up("lg")]: {
      height: 378,
      width: 378,
    },
  },
  article: {
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      flex: "0 1 55%",
    },
    "&>*": {
      textAlign: "center",
      marginBottom: "2rem",
      [theme.breakpoints.up("md")]: { marginBottom: "2.5rem" },
    },
    "&>h2": {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "#444",
      letterSpacing: 1,
      [theme.breakpoints.up(360)]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.5rem",
        lineHeight: 1.1,
        marginRight: "auto",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.5rem",
        lineHeight: "70px",
      },
    },
    "&>p": {
      fontSize: "1rem",
      color: "#444",
      letterSpacing: 1.2,
      maxWidth: 475,
      [theme.breakpoints.up("md")]: {
        fontWeight: 400,
        maxWidth: "none",
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

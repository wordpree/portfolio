import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import profile from "../assets/profile.svg";
import Social from "./Social";
import { ButtonWithIcon } from "./CusButton";

const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    padding: "2em 1.75em 0",
    background: "#FAFAFF",
  },
  photo: {
    background: `center / cover no-repeat url(${profile})`,
    height: 242,
    width: 242,
    margin: "0 auto",
  },
  article: {
    margin: "3em auto",
    "&>*": {
      textAlign: "center",
      marginBottom: "2rem",
      [theme.breakpoints.up(768)]: { marginBottom: "2.5rem" },
    },
    "&>h2": {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#444",
      [theme.breakpoints.up(768)]: {
        fontSize: "2.75rem",
        lineHeight: 1.1,
      },
    },
    "&>p": {
      fontSize: "1rem",
      color: "#7a7a7a",
    },
    "&>div": {
      marginBottom: 0,
    },
  },
}));

const Banner = () => {
  const classes = useStyle();
  return (
    <section className={classes.root}>
      <div className={classes.photo} />
      <article className={classes.article}>
        <Typography variant="h2">
          Think the Design,
          <br /> Develop the Thinking.
        </Typography>
        <Typography>
          A well-established software engineer with educational background and
          passion <br /> for developing react website & application
        </Typography>
        <div>
          <ButtonWithIcon />
        </div>
      </article>
      <Social />
    </section>
  );
};

export default Banner;

import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import bgSm from "../assets/bgSm.svg";
import bgLg from "../assets/bgLg.svg";
import developer from "../assets/developer.svg";
import Social from "./Social";
import Header from "./Header";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgSm})`,
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${bgLg})`,
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem 1rem",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  content: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: "50%",
    },
    textAlign: "center",
    "&>p:first-child": {
      fontWeight: "bold",
      color: "#FC8E53",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem",
      },
    },
    "&>h2": {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#434343",
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.75rem",
      },
    },
  },
  description: {
    padding: "1rem",
    fontSize: "0.9rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
  btnWrapper: {
    margin: "2rem auto 0",
    [theme.breakpoints.up("lg")]: {
      margin: "4rem auto 0",
    },

    "&>button": {
      fontWeight: "bold",
      borderRadius: 25,
    },
  },
  smIcon: {
    display: "block",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    "&>img": {
      width: "99%",
      maxWidth: 448,
      display: "block",
      textAlign: "right",
      margin: "0 auto",
    },
  },
}));

const Banner = () => {
  const classes = useStyle();
  return (
    <section className={classes.root}>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Typography>Front-end React Developer</Typography>
          <Typography variant="h2">Welcome To My Portfolio</Typography>
          <Typography color="textSecondary" className={classes.description}>
            A well-established software engineer with educational background and
            passion <br /> for developing react website & application
          </Typography>
          <div className={classes.btnWrapper}>
            <Button variant="contained" color="primary">
              Look at the portfolio
            </Button>
          </div>
          <Social />
        </div>
        <div className={classes.smIcon}>
          <img src={developer} alt="developer" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

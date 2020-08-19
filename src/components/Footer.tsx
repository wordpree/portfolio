import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import logo from "../assets/logo.svg";

const useStyles = makeStyles({
  root: {
    marginTop: "4em",
    padding: "2em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#59399F",
  },
  logo: {
    marginRight: "2em",
  },
  img: {
    width: 24,
  },
  credit: {
    color: "#fff",
    "&>a": {
      color: "inherit",
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" className={classes.img} />
      </div>
      <div>
        <Typography className={classes.credit} variant="caption">
          Design & develop by Jun | cartoons' from{"  "}
          <a
            href="https://www.vecteezy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            vecteezy
          </a>
        </Typography>
      </div>
    </section>
  );
};

export default Footer;

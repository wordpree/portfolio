import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import logo from "../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    minWidth: 42,
    [theme.breakpoints.up("lg")]: {
      minWidth: 62,
    },
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;

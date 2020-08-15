import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import logo from "../assets/logo.svg";
import resume from "../assets/cv/resume.pdf";

const useStyles = makeStyles((theme) => ({
  header: {
    zIndex: 99,
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    maxHeight: 118,
    padding: "1rem 3%",
    [theme.breakpoints.up("sm")]: {
      padding: "1.5rem 5%",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "3rem 7%",
    },
    alignItems: "center",
    "&>div": {
      padding: "0.75rem",
    },
  },
  logo: {
    minWidth: 42,
    [theme.breakpoints.up("lg")]: {
      minWidth: 62,
    },
  },
  btn: {
    color: "#52319B",
    fontSize: "0.75rem",
    fontWeight: "bold",
    border: "1px solid #8550FC",
    borderRadius: 25,
    minWidth: 108,
    [theme.breakpoints.up("lg")]: {
      fontSize: "inherit",
      borderWidth: 3,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>
      <div>
        <Button className={classes.btn} href={resume} target="_blank">
          Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import MediaQuery from "../useMedia";
import resume from "../../assets/cv/resume.pdf";
import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    minHeight: 90,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.875rem",
    [theme.breakpoints.up("md")]: {
      padding: "3rem 1.875rem",
    },
  },

  btn: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      color: "#52319B",
      fontSize: "0.75rem",
      fontWeight: "bold",
      border: "1px solid #8550FC",
      borderRadius: 25,
      minWidth: 108,
      borderWidth: 3,
      display: "inherit",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Logo img={logo} />
      <MediaQuery query={960}>
        <HeaderNav />
      </MediaQuery>
      <MobileNav />
      <Button
        className={classes.btn}
        href={resume}
        target="_blank"
        aria-label="pdf file"
      >
        Resume
      </Button>
    </header>
  );
};

export default Header;

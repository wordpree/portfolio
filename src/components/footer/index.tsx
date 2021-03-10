import React from "react";
import { Divider, makeStyles } from "@material-ui/core";
import Logo from "../hero/Logo";
import Site from "./Site";
import Address from "./Address";
import Form from "./Form";
import Copyright from "./Copyright";
import logo from "../../assets/_logo.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#0672A6",
    padding: "2em 1em 1em",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    "&>div:first-child": { textAlign: "center" },
    "& img": {
      maxWidth: 55,
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  divider: {
    background: "rgba(255,255,255,0.15)",
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Logo img={logo} />
        <Site />
        <Divider className={classes.divider} />
        <Form />
        <Address />
        <Divider className={classes.divider} />
        <Copyright />
      </div>
    </footer>
  );
};

export default Index;

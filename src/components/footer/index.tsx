import React from "react";
import { Divider, makeStyles, Container } from "@material-ui/core";
import Logo from "../hero/Logo";
import Site from "./Site";
import Address from "./Address";
import Form from "./Form";
import Copyright from "./Copyright";
import logo from "../../assets/_logo.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#0672A6",
    padding: "3em 1em 1em",
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
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      "&::after": {
        content: "''",
        display: "flex",
        width: "100%",
        height: 1,
        background: "rgba(255,255,255,0.14)",
        position: "absolute",
        bottom: 0,
      },
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
      <Container className={classes.container}>
        <Logo img={logo} />
        <Site />
        <Divider className={classes.divider} />
        <Form />
        <Address />
        <Divider className={classes.divider} />
      </Container>
      <Copyright />
    </footer>
  );
};

export default Index;

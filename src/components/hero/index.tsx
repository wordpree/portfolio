import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import Banner from "./Banner";
import Social from "../Social";
import Sidebar from "../Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  hero: {
    background: "#F5F5FF",
    paddingBottom: "3em",
    boxShadow: "0 8px 8px -8px rgba(0,0,0,0.1)",
    [theme.breakpoints.up("lg")]: {
      borderBottomRightRadius: 50,
      flexGrow: 1,
      paddingBottom: "6.375em",
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <Container>
          <Banner />
        </Container>
        <Social />
      </div>
      <Sidebar />
    </div>
  );
};

export default Index;

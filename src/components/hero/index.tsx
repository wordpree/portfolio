import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import Header from "./Header";
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
    background: "#FAFAFF",
    paddingBottom: "3em",
    boxShadow: "1px 1px 12px rgba(0,0,0,0.1)",
    [theme.breakpoints.up("lg")]: {
      borderBottomRightRadius: 50,
      flexGrow: 1,
      paddingBottom: "6.375em",
      zIndex: 1,
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.hero}>
        <Container>
          <Header />
          <Banner />
        </Container>
        <Social />
      </div>
      <Sidebar />
    </div>
  );
};

export default Index;

import React from "react";
import { makeStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import NavLists from "../header/NavLists";
import Social from "../Social";

const useStyles = makeStyles((theme) => ({
  site: {
    display: "flex",
    margin: "1rem auto 0",
    flexDirection: "column",
    "& >div >a": {
      color: "#fefefe",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      margin: 0,
      marginLeft: "2rem",
      alignItems: "center",
      "&>div": {
        flexDirection: "column",
      },
    },
  },
}));

const styles = (theme: Theme) =>
  createStyles({
    lists: {
      display: "flex",
      padding: 0,
      flexWrap: "wrap",
      [theme.breakpoints.up("md")]: {
        flexDirection: "column",
        textAlign: "left",
      },
    },
    list: {
      [theme.breakpoints.up("md")]: {
        marginBottom: "1em",
      },
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      padding: "0.25em 0.75em",
      "&::hover,&::focus": {
        textDecoration: "underline",
      },
    },
  });

const FooterNav = withStyles(styles)(NavLists);

const Site = () => {
  const classes = useStyles();
  return (
    <div className={classes.site}>
      <FooterNav />
      <Social />
    </div>
  );
};

export default Site;

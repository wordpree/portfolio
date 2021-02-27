import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      width: 60,
      background: "#fff",
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default SideBar;

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

const Sidebar = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};

export default Sidebar;

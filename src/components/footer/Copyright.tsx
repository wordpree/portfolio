import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cpr: {
    fontSize: "0.75rem",
    color: "#f0f0f0",
    padding: "1rem",
    paddingBottom: 0,
    display: "block",
  },
}));

const Copyright = () => {
  const classes = useStyles();
  return (
    <span className={classes.cpr}>
      &copy;{new Date().getFullYear()} Designed and developed BY Hai.
    </span>
  );
};

export default Copyright;

import React from "react";
import { makeStyles } from "@material-ui/core";
import Label from "../Label";
import { skillLable } from "../../data";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem auto 0",
    [theme.breakpoints.up("md")]: {
      marginTop: "5rem",
    },
  },
}));

const Skill = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Label color="#333" label={skillLable} flexPos="center" />
    </div>
  );
};

export default Skill;

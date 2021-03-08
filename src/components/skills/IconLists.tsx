import React from "react";
import { makeStyles } from "@material-ui/core";
import Icon from "./Icon";
import { mapToComponent } from "../../utils";
import { TSkillIcons } from "../../type";

const useStyles = makeStyles((theme) => ({
  ul: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,
    "&:first-child": { marginBottom: "3em" },
    [theme.breakpoints.up("md")]: {
      "&:last-child": { marginTop: "3em" },
    },
  },
}));

const IconLists: React.FC<{ skillLists: TSkillIcons }> = ({ skillLists }) => {
  const classes = useStyles();
  return <ul className={classes.ul}>{mapToComponent(skillLists)(Icon)}</ul>;
};

export default IconLists;

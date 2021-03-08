import React from "react";
import { Divider, makeStyles } from "@material-ui/core";
import IconLists from "./IconLists";
import { skillLists } from "../../data";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: "auto",
    padding: "3.5em 0",
    borderTop: "1px solid #d0d0d0",
    [theme.breakpoints.up("md")]: {
      marginTop: "6.25rem",
      borderTop: 0,
    },
  },
  line: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      background: "#DBDBDB",
      display: "block",
    },
  },
}));

const Tech = () => {
  const classes = useStyles();
  const list1 = skillLists.slice(0, 5);
  const list2 = skillLists.slice(5);
  return (
    <div className={classes.wrapper}>
      <IconLists skillLists={list1} />
      <Divider className={classes.line} />
      <IconLists skillLists={list2} />
    </div>
  );
};

export default Tech;

import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { ArrowRight } from "mdi-material-ui";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    maxWidth: 188,
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #d0d0d0",
    margin: "0 auto",
    boxShadow: "2px 4px 10px rgba(0,0,0,0.16)",
    "&>*": {
      color: "#444",
    },
    "&>button": {
      flex: 1,
      borderRadius: 0,
      borderRight: "1px solid #d0d0d0",
    },
    "&>svg": { width: 36 },
  },
}));

const MoreButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Button>View All</Button>
      <ArrowRight color="inherit" />
    </div>
  );
};

export default MoreButton;

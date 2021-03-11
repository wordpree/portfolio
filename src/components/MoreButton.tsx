import React from "react";
import { Button, makeStyles, LinkProps } from "@material-ui/core";
import { Link } from "react-router-dom";

import { ArrowRight } from "mdi-material-ui";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    maxWidth: 188,
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #f0f0f0",
    margin: "0 auto",
    boxShadow: "2px 4px 10px rgba(0,0,0,0.16)",
    "&>*": {
      color: "#444",
    },
    "&>a": {
      flex: 1,
      borderRadius: 0,
      borderRight: "1px solid #f0f0f0",
    },
    "&>svg": { width: 36 },
  },
}));

const MoreButton = () => {
  const classes = useStyles();
  const link = React.forwardRef<any, Omit<LinkProps, "to">>((props, ref) => (
    <Link to="/projects" ref={ref} {...props} />
  ));
  return (
    <div className={classes.wrapper}>
      <Button component={link} size="large">
        View All
      </Button>
      <ArrowRight color="inherit" />
    </div>
  );
};

export default MoreButton;

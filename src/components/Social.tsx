import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { socials } from "../data";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    display: "inline-flex",
    alignItems: "center",
    maxWidth: 328,
    marginTop: "1rem",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      marginTop: "2rem",
      padding: "2rem",
    },
  },
}));

const Social = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {socials.map((s) => (
        <Button key={s.id} color="primary" href={s.link} target="_blank">
          <s.Icon fontSize="small" />
        </Button>
      ))}
    </div>
  );
};

export default Social;

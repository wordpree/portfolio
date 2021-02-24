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
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Social = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {socials.map((s) => (
        <Button key={s.id} color="secondary" href={s.link} target="_blank">
          <s.Icon fontSize="small" />
        </Button>
      ))}
    </div>
  );
};

export default Social;

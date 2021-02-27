import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { socials } from "../data";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
    maxWidth: 328,
    padding: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
      maxWidth: "none",
      position: "relative",
      "&::before": {
        content: "''",
        display: "block",
        height: 1,
        width: "100%",
        background: "rgba(112,112,112,0.24)",
      },
    },
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

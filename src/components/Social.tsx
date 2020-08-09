import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { Linkedin, Github, Youtube, Reddit } from "mdi-material-ui";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    display: "inline-flex",
    alignItems: "center",
    width: "68%",
    maxWidth: 310,
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
  const socialIcons = [Linkedin, Github, Youtube, Reddit];
  return (
    <div className={classes.root}>
      {socialIcons.map((S, i) => (
        <Typography component="span" key={i}>
          <S fontSize="small" className="linkedin" color="primary" />
        </Typography>
      ))}
    </div>
  );
};

export default Social;

import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Email } from "mdi-material-ui";

const useStyles = makeStyles((theme) => ({
  btn: {
    position: "fixed",
    right: 24,
    top: "70%",
    background: "rgba(105,55,255,0.65)",
    minWidth: 98,
    fontWeight: 600,
    color: "#fff",
    textTransform: "capitalize",
    zIndex: 999,
    transform: "rotate(-90deg)",
    transformOrigin: "100% 50%",
    "&:hover,&:focus": {
      background: "rgba(105,55,255,0.92)",
    },
  },
  email: {
    color: "#fff",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Button
      arial-hidden="true"
      className={classes.btn}
      size="small"
      startIcon={<Email className={classes.email} fontSize="inherit" />}
    >
      Contact
    </Button>
  );
};

export default Contact;

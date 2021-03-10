import React from "react";
import { InputBase, makeStyles, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: "1rem",
    "&>p": {
      fontSize: "1rem",
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
    },
  },
  paper: {
    maxWidth: 360,
    display: "flex",
    margin: "0 auto",
  },
  input: {
    paddingLeft: "1em",
    flex: 1,
    background: "#0672A6",
    color: "#fff",
    fontSize: 14,
  },
  btn: {
    background: "#fff",
    color: "#2699FB",
  },
}));

const Form = () => {
  const classes = useStyles();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleClick = () => {};
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>Subscribe to our newsletter</p>
      <Paper className={classes.paper} variant="outlined">
        <InputBase
          className={classes.input}
          placeholder="Email Address"
          inputProps={{ "aria-label": "email" }}
        />
        <Button className={classes.btn} onClick={handleClick}>
          OK
        </Button>
      </Paper>
    </form>
  );
};

export default Form;

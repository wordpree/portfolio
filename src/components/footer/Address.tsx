import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  address: {
    display: "flex",
    flexDirection: "column",
    color: "#fafafa",
    padding: "1rem",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
}));

const Address = () => {
  const classes = useStyles();
  return (
    <div className={classes.address}>
      <span>+61 xxx xxx 000</span>
      <span>my.email@gmail.com</span>
      <span>49 Ereen Rd. Carina Heights, QLD 4152</span>
    </div>
  );
};

export default Address;

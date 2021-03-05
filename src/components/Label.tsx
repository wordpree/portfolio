import React from "react";
import { ILProps } from "../type";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  lists: {
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    background: "rgba(255,255,255,0.14)",
    listStyle: "none",
    minWidth: 116,
    padding: "0.25em 0.75em",
    color: "#fff",
    fontSize: "0.9rem",
    textAlign: "center",
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const Label: React.FC<ILProps> = ({ label, color }) => {
  const classes = useStyles();
  return (
    <ul className={classes.lists}>
      {label.map((_, i) => (
        <li
          key={i}
          className={classes.list}
          style={{ border: `1px solid ${color}` }}
        >
          <span>{_}</span>
        </li>
      ))}
    </ul>
  );
};

export default Label;

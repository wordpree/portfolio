import React from "react";
import { ILProps } from "../type";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  lists: {
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
  },
  list: {
    background: "rgba(255,255,255,0.14)",
    listStyle: "none",
    minWidth: 169,
    padding: "0.5em 1.5em",
    color: "#fff",
    fontSize: "0.9rem",
    textAlign: "center",
    fontWeight: 700,
    textTransform: "uppercase",
    boxShadow: "2px 4px 6px rgba(0,0,0,0.14)",
    borderRadius: 5,
    marginRight: "0.5em",
    marginBottom: "1em",
  },
}));

const Label: React.FC<ILProps> = ({
  label,
  borderColor,
  color = "#fff",
  flexPos = "flex-start",
}) => {
  const classes = useStyles();
  return (
    <ul className={classes.lists} style={{ justifyContent: flexPos }}>
      {label.map((_, i) => (
        <li
          key={i}
          className={classes.list}
          style={{ border: borderColor ? `1px solid ${borderColor}` : 0 }}
        >
          <span style={{ color }}>{_}</span>
        </li>
      ))}
    </ul>
  );
};

export default Label;

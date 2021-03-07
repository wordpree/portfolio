import React from "react";
import { IIProps } from "../../type";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  li: {
    margin: "0 2em 0 0",
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    minWidth: "7.5rem",
    "&>span": {
      fontWeight: "bold",
      textTransform: "uppercase",
      marginLeft: 6,
      fontSize: "1rem",
      color: "#444",
    },
    [theme.breakpoints.up("md")]: {
      "&>span": { fontSize: "1.25rem" },
    },
  },
}));
const Icon: React.FC<IIProps> = ({ Icon, name }) => {
  const classes = useStyles();
  return (
    <li className={classes.li}>
      <Icon height={30} />
      <span>{name}</span>
    </li>
  );
};

export default Icon;

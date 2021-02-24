import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { navMenu } from "../utils";

const useStyles = makeStyles((theme) => ({
  nav: {
    [theme.breakpoints.up("laptopSm")]: {
      marginRight: "auto",
      marginLeft: "2em",
    },
  },
  lists: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    textAlign: "center",
    [theme.breakpoints.up("laptopSm")]: {
      flexDirection: "row",
    },
  },
  list: {
    padding: "1.5em",
    fontWeight: "bold",
    letterSpacing: 1.8,
    "&:hover,&:focus": {
      background: "#f0f0f0",
    },
    [theme.breakpoints.up("laptopSm")]: {
      padding: "1.5em 3em",
    },
  },
}));

const HeaderNav: React.FC = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <ul className={classes.lists}>
        {Object.keys(navMenu).map((m) => (
          <li key={m} style={{ listStyle: "none" }} className={classes.list}>
            <Link
              to={navMenu[m]}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {m}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;

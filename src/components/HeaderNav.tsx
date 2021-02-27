import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { navMenu } from "../utils";

const useStyles = makeStyles((theme) => ({
  nav: {
    [theme.breakpoints.up("md")]: {
      marginRight: "auto",
      marginLeft: "3em",
    },
  },
  lists: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      padding: 0,
    },
  },
  list: {
    padding: "1.5em",
    fontWeight: "bold",
    letterSpacing: 1.8,
    "&:hover,&:focus": {
      background: "#f2f2f2",
      color: "#6937FF",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0.75em",
      marginRight: "3em",
      borderRadius: 4,
      minWidth: 90,
    },
  },
}));

const HeaderNav: React.FC = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav} role="navigation">
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

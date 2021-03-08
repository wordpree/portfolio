import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { navMenu } from "../../utils";

const useStyles = makeStyles((theme) => ({
  nav: {
    [theme.breakpoints.up("md")]: {
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
    fontWeight: "bold",
    letterSpacing: 1.8,
    position: "relative",
    zIndex: 1,
    "&:hover,&:focus": {
      color: "#fff",
    },
    "&::after": {
      display: "flex",
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      transform: "scaleX(0)",
      height: "100%",
      background: "#6937FF",
      transformOrigin: "right",
      zIndex: -1,
      borderRadius: 4,
      transition: "transform 0.25s ease-in",
    },
    "&:hover::after": {
      transform: "scaleX(1)",
      transformOrigin: "left",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0.25em 1.25em",
      marginRight: "1.5rem",
      borderRadius: 4,
      minWidth: 90,
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    width: "100%",
    padding: "1.25rem",
    display: "inline-block",
    [theme.breakpoints.up("md")]: {
      padding: "0.25rem 1.25rem",
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
            <Link to={navMenu[m]} className={classes.link}>
              {m}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;

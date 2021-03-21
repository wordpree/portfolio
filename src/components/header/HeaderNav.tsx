import React from "react";
import { makeStyles, withStyles, Theme, createStyles } from "@material-ui/core";
import { useDialogContext } from "../Modal";
import NavLists from "./NavLists";

const useStyles = makeStyles((theme) => ({
  nav: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "3em",
    },
  },
}));

const styles = (theme: Theme) =>
  createStyles({
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
      padding: "0.5rem",
      [theme.breakpoints.up("md")]: {
        marginRight: "2.5rem",
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
        padding: "0.5rem 1.5rem",
      },
    },
  });

const HeaderNavLists = withStyles(styles)(NavLists);

const HeaderNav: React.FC = () => {
  const classes = useStyles();
  const { setOpen } = useDialogContext();
  return (
    <nav className={classes.nav} role="navigation">
      <HeaderNavLists handleModal={(status) => setOpen(status)} />
    </nav>
  );
};

export default HeaderNav;

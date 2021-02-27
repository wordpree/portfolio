import React from "react";
import { makeStyles } from "@material-ui/core";
import { useDialogContext } from "./Modal";
import { IMProps } from "../type";

const useStyles = makeStyles((theme) => ({
  menu: {
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    "&> div": {
      background: "#757384",
      marginTop: 6,
      borderRadius: 15,
    },
    "& >div:first-child": {
      marginTop: 0,
    },
    "&>div:first-child.open": {
      transform: "translateY(8px) rotate(45deg)",
    },
    "&>div:last-child.open": {
      transform: "translateY(-8px) rotate(-45deg)",
    },
    "&>div:nth-child(2).open": {
      opacity: 0,
    },
  },
}));

const MobileMenu: React.FC<IMProps> = ({
  height = 2,
  width = 26,
  duration = 300,
}) => {
  const classes = useStyles();
  const { open, setOpen } = useDialogContext();
  return (
    <div className={classes.menu} onClick={() => setOpen((prev) => !prev)}>
      {[...Array(3)].map((_, key) => (
        <div
          key={key}
          className={open ? "open" : ""}
          style={{ height, width, transition: `all ${duration}ms ease-out` }}
        />
      ))}
    </div>
  );
};

export default MobileMenu;

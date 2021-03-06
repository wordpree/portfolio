import React from "react";
import { makeStyles } from "@material-ui/core";
import { motion, MotionValue } from "framer-motion";

interface ISProps {
  height: MotionValue<number>;
  yOpacity: MotionValue<number>;
  scale: MotionValue<number>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    [theme.breakpoints.up("xl")]: {
      display: "flex",
      zIndex: 999,
      position: "fixed",
      bottom: "2%",
      left: "2%",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  line: {
    height: 350,
    background: "rgba(252, 142, 83, 0.4)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 4,
    "&>span": {
      width: 4,
      background: "rgba(252, 142, 83, 1)",
      borderRadius: 8,
      display: "block",
    },
  },
  name: {
    display: "block",
    color: "#fff",
    background: "#8550FC",
    borderRadius: 3,
    padding: "0.5em",
    fontWeight: 500,
  },
}));

const ScrollBar = ({ height, yOpacity, scale }: ISProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.line}>
        <motion.span style={{ height }} />
      </div>
      <motion.span
        className={classes.name}
        style={{ opacity: yOpacity, scale }}
      >
        Jun
      </motion.span>
    </div>
  );
};

export default ScrollBar;

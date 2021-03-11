import React from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { useViewportScroll, useTransform } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      zIndex: 999,
      position: "fixed",
      bottom: "2%",
      left: "1%",
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

const ScrollBar = () => {
  const { scrollYProgress } = useViewportScroll();
  const height = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const yOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 1]);
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

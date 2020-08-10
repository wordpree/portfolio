import React from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { skillsBarVariants } from "../motion";

interface IPProps {
  percentage: number;
  label?: string;
}

const useStyles = makeStyles({
  entry: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "0.75rem",
  },
  root: {
    width: "100%",
    height: 8,
    background: "rgba(133, 80, 252, 0.1)",
    borderRadius: 6,
  },
  bar: {
    background: "rgba(133, 80, 252, 0.5)",
    height: 8,
    position: "relative",
    borderRadius: 6,
  },
  number: {
    position: "absolute",
    paddingBottom: "0.25rem",
    transform: "translateY(-100%)",
    fontWeight: "bold",
    color: "#FC8E53",
  },
  label: {
    padding: "0.5rem 1rem",
    color: "#434343",
    minWidth: "8rem",
  },
});

const ProcessBar = ({ percentage, label }: IPProps) => {
  const classes = useStyles();

  return (
    <motion.div className={classes.entry}>
      <div className={classes.root}>
        <motion.div
          variants={skillsBarVariants(`${percentage}%`)}
          className={classes.bar}
        >
          <span className={classes.number}>{percentage}%</span>
        </motion.div>
      </div>
      <span className={classes.label}>{label}</span>
    </motion.div>
  );
};

export default ProcessBar;

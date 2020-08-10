import React, { useRef } from "react";
import { motion } from "framer-motion";
import { makeStyles, Typography } from "@material-ui/core";
import skillsSvg from "../assets/skills.svg";
import Entry from "./Entry";
import ProcessBar from "./ProcessBar";
import useAnimation from "./useAnimation";
import { skillsImgVariants } from "../motion";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: "7rem",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up(960)]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  title: {
    color: "#8550FC",
    fontWeight: "bold",
    padding: "2rem",
    textAlign: "center",
  },
  skill: {
    padding: "0.75rem",
    [theme.breakpoints.up(960)]: {
      flex: "0 1 55%",
      padding: "2rem",
    },
  },
  imgWrapper: {
    [theme.breakpoints.up(960)]: {
      flex: "0 1 45%",
    },
  },
  figure: {
    margin: "1rem auto",
    maxWidth: 388,
  },
}));

const Skills = () => {
  const classes = useStyles();
  const skills = [
    { label: "HTML", percentage: 92 },
    { label: "CSS", percentage: 90 },
    { label: "ES6", percentage: 90 },
    { label: "Reactjs", percentage: 90 },
    { label: "Typescript", percentage: 75 },
    { label: "Redux", percentage: 70 },
    { label: "Redux-Saga", percentage: 70 },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const [animation] = useAnimation(ref);

  return (
    <Entry>
      <Typography variant="h5" className={classes.title}>
        Skills On Hands
      </Typography>
      <motion.div
        className={classes.root}
        initial="hidden"
        animate={animation ? "visible" : "hidden"}
      >
        <div className={classes.skill} ref={ref}>
          {skills.map((s) => (
            <ProcessBar {...s} key={s.label} />
          ))}
        </div>
        <motion.div className={classes.imgWrapper} variants={skillsImgVariants}>
          <figure className={classes.figure}>
            <img src={skillsSvg} alt="skill icon" />
          </figure>
        </motion.div>
      </motion.div>
    </Entry>
  );
};

export default Skills;

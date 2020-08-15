import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import Entry from "../Entry";
import NavButton from "../NavButton";
import { portfolio } from "../../data";
import ProjectCard from "./ProjectCard";
import MotionDrag from "../MotionDrag";
import { indexRang } from "../../utils";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "1.5%",
    overflow: "hidden",
  },
  header: {
    padding: "6% 1em",
    marginBottom: "1.25em",
    [theme.breakpoints.up(768)]: {
      display: "flex",
      alignItems: "center",
      padding: "1.5em",
    },
  },
  content: {
    textAlign: "center",
    [theme.breakpoints.up(768)]: {
      marginRight: "auto",
      textAlign: "inherit",
    },
  },
  title: { color: "#8550FC" },
  subtitle: { color: "#FC8E53" },
  sliderWrapper: {
    overflow: "hidden",
  },
  sliderMd: {
    padding: "0 8px",
  },
  slider: {
    padding: "1%",
    [theme.breakpoints.up(768)]: {
      flex: "1 1 50%",
      minWidth: "50%",
    },
    [theme.breakpoints.up(1024)]: {
      flex: "1 1 33.33%",
      minWidth: "33.33%",
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const count = portfolio.length;
  const lg = useMediaQuery("(min-width:1024px)");
  const md = useMediaQuery("(min-width:768px)");
  const sliderToShow = lg ? 3 : 2;
  const ref = useRef<HTMLDivElement>(null);
  const getWith = (ele: HTMLDivElement | null) => {
    if (!ele) return 0;
    return ele.getBoundingClientRect().width;
  };
  const slideWith = getWith(ref.current);
  const swipeThreshold = (1 / 3) * slideWith;
  const leftBtnState = Math.abs(step) === count - sliderToShow;
  const rightBtnState = step === 0;
  const handleSliderClick = (newIndex: number, slider: number) => {
    setStep((prev) => indexRang(0, count, prev + newIndex, slider));
  };

  return (
    <Entry>
      <section id="portfolio" className={classes.section}>
        <div className={classes.header}>
          <article className={classes.content}>
            <Typography className={classes.subtitle} variant="subtitle1">
              showcase
            </Typography>
            <Typography className={classes.title} variant="h4">
              Portfolio
            </Typography>
          </article>
          <NavButton
            leftBtn={leftBtnState}
            rightBtn={rightBtnState}
            sliderToShow={sliderToShow}
            handleClick={handleSliderClick}
          />
        </div>
        <div className={classes.sliderWrapper}>
          {!md ? (
            <div className={classes.sliderMd}>
              {portfolio.map((p) => (
                <ProjectCard {...p} key={p.title} />
              ))}
            </div>
          ) : (
            <MotionDrag
              divRef={ref}
              sliderToShow={sliderToShow}
              handleDragEnd={handleSliderClick}
              swipeThreshold={swipeThreshold}
            >
              {portfolio.map((p) => (
                <motion.div
                  key={p.title}
                  className={classes.slider}
                  animate={{ x: (step * slideWith) / sliderToShow }}
                  transition={{
                    x: { type: "spring", stiffness: 50, mass: 0.75 },
                  }}
                  initial={false}
                >
                  <ProjectCard {...p} />
                </motion.div>
              ))}
            </MotionDrag>
          )}
        </div>
      </section>
    </Entry>
  );
};
export default Portfolio;

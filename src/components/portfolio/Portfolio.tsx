import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import Entry from "../Entry";
import NavButton from "../NavButton";
import { portfolio } from "../../data";
import ProjectCard from "./ProjectCard";
import { indexRang } from "../../utils";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: "5rem",
    padding: "2rem",
    overflow: "hidden",
  },
  side: {
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
  sliders: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up(768)]: {
      flexDirection: "row",
      flex: "0 1 75%",
    },
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
  const swipThreshold = (1 / 2) * slideWith;
  const leftBtnState = Math.abs(step) === count - sliderToShow;
  const rightBtnState = step === 0;
  const handleSliderClick = (newIndex: number, slider: number) => {
    setStep((prev) => indexRang(0, count, prev + newIndex, slider));
  };

  return (
    <Entry>
      <aside className={classes.side}>
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
      </aside>
      <div className={classes.sliderWrapper}>
        <motion.div
          ref={ref}
          drag="x"
          className={classes.sliders}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x > swipThreshold) {
              handleSliderClick(1, sliderToShow);
            }
            if (info.offset.x < -swipThreshold) {
              handleSliderClick(-1, sliderToShow);
            }
          }}
        >
          {portfolio.map((p) =>
            md ? (
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
            ) : (
              <ProjectCard {...p} key={p.title} />
            )
          )}
        </motion.div>
      </div>
    </Entry>
  );
};
export default Portfolio;

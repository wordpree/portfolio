import React, { useRef } from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";
import { portfolio } from "../../data";
import ProjectCard from "./ProjectCard";
import MotionDrag from "../MotionDrag";

interface IPProps {
  step: number;
  sliderToShow: number;
  handleDetail(open: boolean, id: number): void;
  handleSliderClick(newIndex: number, slider: number): void;
}

interface IPSProps {
  handleDetail(open: boolean, id: number): void;
}

const useStyles = makeStyles((theme) => ({
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

export const ProjectCardsSm = ({ handleDetail }: IPSProps) => {
  const classes = useStyles();
  return (
    <div className={classes.sliderMd}>
      {portfolio.map((p) => (
        <ProjectCard {...p} key={p.id} handleDetail={handleDetail} />
      ))}
    </div>
  );
};

export const ProjectCardsLg = ({
  sliderToShow,
  handleSliderClick,
  step,
  handleDetail,
}: IPProps) => {
  const classes = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  const getWith = (ele: HTMLDivElement | null) => {
    if (!ele) return 0;
    return ele.getBoundingClientRect().width;
  };
  const slideWith = getWith(ref.current);
  const swipeThreshold = (1 / 3) * slideWith;
  return (
    <div ref={ref}>
      <MotionDrag
        sliderToShow={sliderToShow}
        handleDragEnd={handleSliderClick}
        swipeThreshold={swipeThreshold}
      >
        {portfolio.map((p) => (
          <motion.div
            key={p.id}
            className={classes.slider}
            animate={{ x: (step * slideWith) / sliderToShow }}
            transition={{
              x: { type: "spring", stiffness: 50, mass: 0.75 },
            }}
            initial={false}
          >
            <ProjectCard {...p} handleDetail={handleDetail} />
          </motion.div>
        ))}
      </MotionDrag>
    </div>
  );
};

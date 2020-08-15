import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";

interface IMProps {
  children: React.ReactNode;
  divRef: React.RefObject<HTMLDivElement>;
  swipeThreshold: number;
  sliderToShow: number;
  handleDragEnd(step: number, slide: number): void;
}

const useStyles = makeStyles((theme) => ({
  sliders: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up(768)]: {
      flexDirection: "row",
    },
  },
}));

const MotionDrag = ({
  divRef,
  handleDragEnd,
  children,
  sliderToShow,
  swipeThreshold,
}: IMProps) => {
  const classes = useStyles();
  return (
    <motion.div
      ref={divRef}
      drag="x"
      className={classes.sliders}
      dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.x > swipeThreshold) {
          handleDragEnd(1, sliderToShow);
        }
        if (info.offset.x < -swipeThreshold) {
          handleDragEnd(-1, sliderToShow);
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDrag;

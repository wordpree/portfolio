import React, { useRef } from "react";
import { motion } from "framer-motion";
import useAnimation from "./useAnimation";
import { IMWProps } from "../type";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  motionDiv: {
    "&:last-child >div": {
      marginBottom: 0,
    },
  },
});

const MotionWrapper: React.FC<IMWProps> = ({
  children,
  variants,
  initial = "initial",
  isAnimate,
  hover = "",
  tap = "",
}) => {
  const classes = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  const [animation] = useAnimation(ref);
  const animate = isAnimate(animation);
  return (
    <motion.div
      className={classes.motionDiv}
      ref={ref}
      initial={initial}
      animate={animate}
      whileHover={hover}
      whileTap={tap}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;

import React, { useRef } from "react";
import { motion } from "framer-motion";
import useAnimation from "./useAnimation";
import { IMWProps } from "../type";

const MotionWrapper: React.FC<IMWProps> = ({
  children,
  variants,
  initial = "initial",
  isAnimate,
  hover = "",
  tap = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [animation] = useAnimation(ref);
  const animate = isAnimate(animation);
  return (
    <motion.div
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

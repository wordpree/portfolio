import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "mdi-material-ui";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    fontWeight: "bold",
    borderRadius: 25,
  },
  cr: {
    display: "flex",
  },
}));

const ButtonWithIcon = () => {
  const classes = useStyles();
  const arrVariants = {
    visible: {
      x: [-2, 6],
      transition: {
        type: "spring",
        duration: 0.4,
        ease: "linear",
        yoyo: Infinity,
      },
    },
  };
  return (
    <Button
      className={classes.btn}
      variant="contained"
      color="primary"
      href="#portfolio"
      endIcon={
        <motion.div
          className={classes.cr}
          variants={arrVariants}
          animate="visible"
        >
          <ChevronRight />
        </motion.div>
      }
    >
      Enjoy My Projects
    </Button>
  );
};

export { ButtonWithIcon };

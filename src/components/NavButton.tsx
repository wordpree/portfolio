import React from "react";
import { ChevronRight, ChevronLeft } from "mdi-material-ui";
import { makeStyles, IconButton } from "@material-ui/core";

interface INProps {
  leftBtn: boolean;
  rightBtn: boolean;
  sliderToShow: number;
  handleClick(step: number, slide: number): void;
}

const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    display: "none",
    [theme.breakpoints.up(768)]: {
      display: "block",
    },
  },
}));

const NavButton = ({
  leftBtn,
  rightBtn,
  handleClick,
  sliderToShow,
}: INProps) => {
  const classes = useStyles();
  return (
    <div className={classes.btnWrapper}>
      <IconButton
        disabled={leftBtn}
        color="primary"
        onClick={() => handleClick(-1, sliderToShow)}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        disabled={rightBtn}
        color="primary"
        onClick={() => handleClick(1, sliderToShow)}
      >
        <ChevronRight />
      </IconButton>
    </div>
  );
};

export default NavButton;

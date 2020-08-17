import React, { useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import Entry from "../Entry";
import Detail from "./Detail";
import { TDetail } from "../../type";
import NavButton from "../NavButton";
import { indexRang } from "../../utils";
import { portfolio, details } from "../../data";
import { ProjectCardsSm, ProjectCardsLg } from "./ProjectCards";

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
}));

const Portfolio = () => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [detailOpen, setDetailOpen] = useState({ open: false, id: 1 });
  const count = portfolio.length;
  const lg = useMediaQuery("(min-width:1024px)");
  const md = useMediaQuery("(min-width:768px)");
  const sliderToShow = lg ? 3 : 2;
  const leftBtnState = Math.abs(step) === count - sliderToShow;
  const rightBtnState = step === 0;
  const handleSliderClick = (newIndex: number, slider: number) => {
    setStep((prev) => indexRang(0, count, prev + newIndex, slider));
  };
  const handleDetail = (open: boolean, id: number) =>
    setDetailOpen({ open, id });

  const getDetailByid = (id: number, source: TDetail[]) => {
    return source.find((s) => s.id === id);
  };
  const detail = getDetailByid(detailOpen.id, details);
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
        <AnimateSharedLayout type="crossfade">
          <div className={classes.sliderWrapper}>
            {md ? (
              <ProjectCardsLg
                sliderToShow={sliderToShow}
                handleSliderClick={handleSliderClick}
                step={step}
                handleDetail={handleDetail}
              />
            ) : (
              <ProjectCardsSm handleDetail={handleDetail} />
            )}
          </div>
          {detail && detailOpen.open && (
            <AnimatePresence>
              <Detail {...detail} handleDetail={handleDetail} />
            </AnimatePresence>
          )}
        </AnimateSharedLayout>
      </section>
    </Entry>
  );
};
export default Portfolio;

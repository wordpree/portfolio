import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  makeStyles,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { IPCProps } from "../type";
import { cardMediaVariants, cardGesture } from "../motion";
import CardArticle from "./CardArticle";
import MotionWrapper from "./MotionWrapper";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "2.75em",
    maxWidth: "61.25rem",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      marginBottom: "6em",
    },
  },
  action: {
    [theme.breakpoints.up("md")]: {
      padding: "3em 1em",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  article: {
    padding: "1em",
    marginBottom: "3em",
    [theme.breakpoints.up("md")]: {
      alignSelf: "center",
      padding: "3em",
      maxWidth: "40%",
    },
    "& > h4": {
      color: "#fff",
      fontWeight: 700,
      lineHeight: 1.1,
      fontSize: "2rem",
      marginBottom: "1em",
    },
    "& > h6": {
      color: "#fafafa",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
        marginBottom: "1.875em",
      },
    },
    "& > p": {
      color: "#e8e8e8",
    },
    "&>ul": {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        marginTop: "4.375em",
      },
    },
  },
  media: {
    paddingTop: "68%",
    backgroundSize: "contain",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "56.25%",
    },
    [theme.breakpoints.up("md")]: {
      flex: "0 0 60%",
      paddingTop: 0,
      backgroundSize: "cover",
      backgroundPosition: "0 0",
    },
  },
}));

const MotionMedia = (props: any) => {
  return <motion.div {...props} variants={cardMediaVariants} />;
};

const ProjectCard: React.FC<IPCProps> = (props) => {
  const classes = useStyles();
  const { img, bgColor, ...rest } = props;
  const isAnimate = (animate: boolean) => (animate ? "visible" : "hidden");
  return (
    <MotionWrapper
      variants={cardGesture}
      tap="tap"
      hover="hover"
      initial="inital"
      isAnimate={isAnimate}
    >
      <Card className={classes.card} raised style={{ background: bgColor }}>
        <CardActionArea className={classes.action}>
          <CardContent className={classes.content}>
            <CardArticle {...{ ...rest, bgColor }} />
            <CardMedia
              image={img}
              className={classes.media}
              component={MotionMedia}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </MotionWrapper>
  );
};

export default ProjectCard;

import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";
import Label from "../Label";

import { cardArticleChild, cardArticleParent } from "../../motion";
import { ICAProps } from "../../type";

const useStyles = makeStyles((theme) => ({
  article: {
    padding: "1em",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "3em",
    },
    [theme.breakpoints.up("md")]: {
      alignSelf: "center",
      padding: "3em",
      maxWidth: "40%",
      marginBottom: 0,
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
      fontSize: "0.875rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
        marginBottom: "1.875em",
      },
    },
    "& > p": {
      color: "#e8e8e8",
      fontSize: "1rem",
      lineHeight: 1.4,
      letterSpacing: "0.6px",
    },
    "&>ul": {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        marginTop: "4.375em",
      },
    },
  },
}));

const CardArticle: React.FC<ICAProps> = ({
  title,
  subtitle,
  content,
  bgColor,
  label,
}) => {
  const classes = useStyles();
  return (
    <motion.div className={classes.article} variants={cardArticleParent}>
      <motion.h6 variants={cardArticleChild}>{subtitle}</motion.h6>
      <motion.h4 variants={cardArticleChild}>{title}</motion.h4>
      <motion.p variants={cardArticleChild}>{content}</motion.p>
      <Label borderColor={bgColor} label={label} />
    </motion.div>
  );
};

export default CardArticle;

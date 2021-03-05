import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { IAProps } from "../type";

const useStyles = makeStyles((theme) => ({
  article: {
    marginBottom: "4.5em",
    "&>*": {
      textAlign: "center",
      color: "#444",
    },
    "&>h3": {
      fontSize: "2rem",
      fontWeight: "bold",
      lineHeight: "38px",
      paddingBottom: "1em",
    },
    "&>p": {
      fontSize: "0.875rem",
      letterSpacing: 1.1,
      fontWeight: 500,
      color: "#444",
    },
  },
}));

const Article: React.FC<IAProps> = ({ content, title, subtitle }) => {
  const classes = useStyles();
  return (
    <article className={classes.article}>
      <Typography variant="h3">{title && title}</Typography>
      <Typography variant="h4">{subtitle && subtitle}</Typography>
      <Typography>{content && content}</Typography>
    </article>
  );
};

export default Article;

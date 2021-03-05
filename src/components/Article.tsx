import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { IAProps } from "../type";

const useStyles = makeStyles((theme) => ({
  article: {
    maxWidth: "61.25rem",
    margin: "0 auto 3.5em",
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
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "&>h3": {
        fontSize: "2.25rem",
        paddingBottom: 0,
      },
      "&>p": {
        fontSize: "1.2rem",
        maxWidth: "40%",
        textAlign: "left",
        lineHeight: 1.8,
        position: "relative",
        "&::before": {
          content: "''",
          display: "block",
          height: "100%",
          width: 1,
          background: "#444",
          position: "absolute",
          left: -16,
        },
      },
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

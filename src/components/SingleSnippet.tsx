import React from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";
import { ISSProps } from "../type";

const useStyles = makeStyles((theme) => ({
  article: {
    marginTop: "1.75em",
    padding: "1em 0",
    maxWidth: 858,
    marginRight: "auto",
    marginLeft: "auto",
    "& >h6": {
      [theme.breakpoints.up("md")]: {},
    },
  },
  code: {
    textAlign: "left",
    overflow: "auto",

    background: "#444",
    color: "#fffffa",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 8,
  },
  btn: {
    textTransform: "initial",
    fontWeight: 700,
  },
  improve: {
    fontStyle: "italic",
    margin: "1em 0 2em",
    textAlign: "left",
    position: "relative",
    borderLeft: "5px solid #4D30A4",
    paddingLeft: "0.75em",
  },
}));
const SingleSnippet: React.FC<ISSProps> = ({
  snippet,
  brief,
  refer,
  improve,
}) => {
  const classes = useStyles();
  return (
    <article className={classes.article}>
      <Typography variant="h5">{brief}</Typography>
      <Typography className={classes.improve}>
        {improve ? improve : null}
      </Typography>
      <pre className={classes.code}>
        <code>{snippet}</code>
      </pre>
      <Button
        href={refer}
        className={classes.btn}
        color="secondary"
        target="_blank"
      >
        Click and go direct to the original source of the code
      </Button>
    </article>
  );
};

export default SingleSnippet;

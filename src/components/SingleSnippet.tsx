import React from "react";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import Highlight, { defaultProps } from "prism-react-renderer";
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
  pre: {
    textAlign: "left",
    margin: "1em 0",
    padding: "0.75em",
    overflow: "scroll",
    fontSize: "0.9375rem",
    "&>div": {
      display: "table-row",
    },
    "& .token-line": {
      lineHeight: "1.3em",
      height: "1.3em",
    },
    "&>div >span:nth-child(1)": {
      display: "table-cell",
      textAlign: "right",
      paddingRight: "1em",
      userSelect: "none",
      opacity: "0.5",
    },
    "&>div >span:nth-child(2)": {
      display: "table-cell",
    },
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
      <Highlight
        {...defaultProps}
        code={snippet.trim()}
        language="jsx"
        theme={nightOwl}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} ${classes.pre}`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span>{i + 1}</span>
                <span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      {refer ? (
        <Button
          href={refer}
          className={classes.btn}
          color="secondary"
          target="_blank"
        >
          Click and go direct to the original source of the code
        </Button>
      ) : null}
    </article>
  );
};

export default SingleSnippet;

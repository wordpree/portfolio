import React from "react";
import { makeStyles } from "@material-ui/core";

interface IEProps {
  children: React.ReactNode;
}

const useStyle = makeStyles((theme) => ({
  entry: {
    margin: "0 auto 2rem",
  },
}));
const Entry = ({ children }: IEProps) => {
  const classes = useStyle();
  return <div className={classes.entry}>{children}</div>;
};

export default Entry;

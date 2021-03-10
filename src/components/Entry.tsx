import React from "react";
import { makeStyles } from "@material-ui/core";

interface IEProps {
  children: React.ReactNode;
}

const useStyle = makeStyles((theme) => ({
  section: {
    margin: "0 auto 4rem",
    padding: "0.25rem",
    [theme.breakpoints.up(768)]: {
      padding: "1.25rem",
    },
  },
}));
const Entry = ({ children }: IEProps) => {
  const classes = useStyle();
  return <section className={classes.section}>{children}</section>;
};

export default Entry;

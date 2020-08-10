import React from "react";
import { makeStyles } from "@material-ui/core";

interface IEProps {
  children: React.ReactNode;
}

const useStyle = makeStyles((theme) => ({
  section: {
    margin: "5rem auto 0",
    padding: "0.25rem",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    background: "rgba(133, 80, 252, 0.1)",
    borderRadius: 6,
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

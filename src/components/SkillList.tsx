import React from "react";
import { Check } from "mdi-material-ui";
import { makeStyles, Grid, Button } from "@material-ui/core";

interface ISProps {
  technique: string[];
}

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "1.25em",
  },
  btn: {
    background: "rgba(133, 80, 252, 0.05)",
    pointerEvents: "none",
    textTransform: "capitalize",
    color: "#262626",
    fontSize: "0.8rem",
  },
}));

const SkillList = ({ technique }: ISProps) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.grid}>
      {technique.map((t) => (
        <Grid item xs={12} sm={6} md={4} key={t}>
          <Button
            size="small"
            startIcon={<Check fontSize="small" color="secondary" />}
            className={classes.btn}
          >
            {t}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillList;

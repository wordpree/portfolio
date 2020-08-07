import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import bg from "../assets/bg.svg";
import developer from "../assets/developer.svg";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    maxWidth: "100%",
    overflow: "hidden",
    display: "flex",
  },
  contWrapper: {
    flex: "0 1 49%",
  },
  content: {
    textAlign: "center",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    "&>p": {
      fontWeight: "bold",
      color: "#FC8E53",
    },
    "&>h2": { fontWeight: "bold", color: "#434343" },
    "&>h5": {},
  },
  imgWrapper: {
    flex: "0 1 49%",
  },
  img: {
    maxWidth: "75%",
    height: "100%",
    margin: "0 auto",
    display: "block",
    padding: "3rem 2rem",
  },
  btnWrapper: {
    margin: "2rem auto",
    "&>button": {
      textTransform: "capitalize",
      fontWeight: "bold",
    },
  },
}));

const Banner = () => {
  const classes = useStyle();
  return (
    <div
      className={classes.root}
      style={{ background: `center/cover no-repeat url(${bg})` }}
    >
      <div className={classes.contWrapper}>
        <div className={classes.content}>
          <Typography>Front-end React Developer</Typography>
          <Typography variant="h2">Welcome to my Portfolio</Typography>
          <Typography variant="h5">Hai Jun Wang</Typography>
          <div className={classes.btnWrapper}>
            <Button variant="contained" color="primary">
              Go & Look at the portfolio
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.imgWrapper}>
        <img src={developer} alt="developer" className={classes.img} />
      </div>
    </div>
  );
};

export default Banner;

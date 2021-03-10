import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

interface ILProps {
  img: string;
}

const useStyles = makeStyles((theme) => ({
  logo: {
    minWidth: 42,
    [theme.breakpoints.up("lg")]: {
      minWidth: 62,
    },
  },
}));

const Logo: React.FC<ILProps> = ({ img }) => {
  const classes = useStyles();
  return (
    <div>
      <Link to="/">
        <img src={img} className={classes.logo} alt="homepage logo" />
      </Link>
    </div>
  );
};

export default Logo;

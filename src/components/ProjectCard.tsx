import React from "react";
import {
  Card,
  makeStyles,
  CardActionArea,
  Typography,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import Label from "./Label";
import { IPCProps } from "../type";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "2.75em",
    maxWidth: "61.25rem",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      marginBottom: "6em",
      padding: "3em 1em",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  article: {
    padding: "1em",
    marginBottom: "3em",
    [theme.breakpoints.up("md")]: {
      alignSelf: "center",
      padding: "3em",
      maxWidth: "40%",
    },
    "& > h4": {
      color: "#fff",
      fontWeight: 700,
      lineHeight: 1.1,
      fontSize: "2rem",
      marginBottom: "1em",
    },
    "& > h6": {
      color: "#fafafa",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
        marginBottom: "1.875em",
      },
    },
    "& > p": {
      color: "#e8e8e8",
    },
    "&>ul": {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        marginTop: "4.375em",
      },
    },
  },
  media: {
    paddingTop: "68%",
    backgroundSize: "contain",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "56.25%",
    },
    [theme.breakpoints.up("md")]: {
      flex: "0 0 60%",
      paddingTop: 0,
      backgroundSize: "cover",
      backgroundPosition: "0 0",
    },
  },
}));

const ProjectCard: React.FC<IPCProps> = ({
  subtitle,
  title,
  img,
  label,
  content,
  bgColor,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised style={{ background: bgColor }}>
      <CardActionArea>
        <CardContent className={classes.content}>
          <article className={classes.article}>
            <Typography variant="subtitle2">{subtitle}</Typography>
            <Typography variant="h4">{title}</Typography>
            <Typography>{content}</Typography>
            <Label color={bgColor} label={label} />
          </article>
          <CardMedia image={img} className={classes.media} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;

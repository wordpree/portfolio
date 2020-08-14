import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";

interface IPProps {
  title: string;
  content: string;
  img: string;
  link: string;
}

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 375,
    margin: "0 auto 8%",
    [theme.breakpoints.up(768)]: {
      maxWidth: "100%",
      margin: "auto",
    },
  },
  media: {
    height: 0,
    paddingTop: "85%",
  },
  content: {
    minHeight: 138,
  },
  action: {
    "&>button:first-child": {
      marginRight: "auto",
    },
  },
}));

const ProjectCard = ({ title, content, img, link }: IPProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised>
      <CardActionArea href={link} target="_blank">
        <CardMedia image={img} className={classes.media} />
      </CardActionArea>
      <CardContent className={classes.content}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button size="small" color="primary">
          More Details
        </Button>
        <Button size="small" color="primary" href={link} target="_blank">
          View Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

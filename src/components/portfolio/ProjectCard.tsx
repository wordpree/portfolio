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
}

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 375,
    margin: "0 auto 5%",
    [theme.breakpoints.up(768)]: {
      maxWidth: "100%",
    },
  },
  media: {
    height: 0,
    paddingTop: "75.25%",
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

const ProjectCard = ({ title, content, img }: IPProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised>
      <CardActionArea>
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
        <Button size="small" color="primary">
          View Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

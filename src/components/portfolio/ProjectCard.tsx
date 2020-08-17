import React from "react";
import { motion } from "framer-motion";
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
  id: number;
  handleDetail(open: boolean, id: number): void;
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
    paddingTop: "56.25%",
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

const ProjectCard = ({
  title,
  content,
  img,
  link,
  id,
  handleDetail,
}: IPProps) => {
  const classes = useStyles();
  return (
    <motion.div layoutId={`${id}`}>
      <Card className={classes.card} raised>
        <CardActionArea href={link} target="_blank">
          <motion.div layoutId={`img-container-${id}`}>
            <CardMedia image={img} className={classes.media} />
          </motion.div>
        </CardActionArea>
        <motion.div layoutId={`content-container-${id}`}>
          <CardContent className={classes.content}>
            <Typography variant="h6" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              {content}
            </Typography>
          </CardContent>
          <CardActions className={classes.action}>
            <Button
              size="small"
              color="primary"
              onClick={() => handleDetail(true, id)}
            >
              More Details
            </Button>
            <Button size="small" color="primary" href={link} target="_blank">
              View Website
            </Button>
          </CardActions>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

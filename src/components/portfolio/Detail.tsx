import React from "react";
import { CloseBox } from "mdi-material-ui";
import { motion } from "framer-motion";
import {
  makeStyles,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import CustomBtn from "../CustomBtn";
import SkillList from "../SkillList";

interface IDProps {
  gitlink: string;
  weblink: string;
  description: string;
  technique: string[];
  title: string;
  id: number;
  img: string;
  handleDetail(open: boolean, id: number): void;
}

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "fixed",
    bottom: 0,
    top: 0,
    background: "rgba(0,0,0,0.85)",
    width: "100%",
    left: 0,
    zIndex: 999,
  },
  container: {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    overflow: "hidden",
    zIndex: 999,
    padding: "2em 0",
  },
  article: {
    padding: "1em",
    width: "98%",
    maxWidth: 760,
    margin: "0 auto",
    background: "#dedede",
    [theme.breakpoints.up(500)]: {
      width: "93%",
    },
  },
  divider: {
    marginBottom: "1.5em",
  },
  media: {
    height: 225,
    [theme.breakpoints.up(400)]: {
      height: 335,
    },
  },
  title: {
    color: "#8550FC",
    fontWeight: "bold",
  },
  actions: {
    justifyContent: "space-between",
    padding: "0 1em 1em",
  },
}));

const Detail = ({
  gitlink,
  title,
  description,
  technique,
  weblink,
  handleDetail,
  id,
  img,
}: IDProps) => {
  const classes = useStyles();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={classes.overlay} onClick={() => handleDetail(false, 0)} />
      <div className={classes.container}>
        <motion.div className={classes.article}>
          <Button onClick={() => handleDetail(false, 0)} color="primary">
            <CloseBox />
          </Button>
          <Divider className={classes.divider} />
          <Card elevation={0}>
            <motion.div layoutId={`img-container-${id}`}>
              <CardMedia image={img} className={classes.media} />
            </motion.div>
            <motion.div layoutId={`content-container-${id}`}>
              <CardContent>
                <Typography variant="h6" className={classes.title}>
                  {title}
                </Typography>
                <SkillList technique={technique} />
                <Typography variant="body2">{description}</Typography>
              </CardContent>
            </motion.div>
            <CardActions className={classes.actions}>
              <CustomBtn link={gitlink}>View Code</CustomBtn>
              <CustomBtn link={weblink}>View Website</CustomBtn>
            </CardActions>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Detail;

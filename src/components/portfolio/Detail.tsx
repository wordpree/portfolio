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
    cursor: "pointer",
  },
  container: {
    position: "fixed",
    left: "50%",
    top: 0,
    right: 0,
    overflowY: "scroll",
    zIndex: 999,
    padding: "2em 0",
    height: "100vh",
    transform: "translate(-50%)",
    maxWidth: 760,
    width: "95%",
  },
  article: {
    padding: "1em",
    margin: "0 auto",
    background: "#dedede",
    cursor: "initial",
    [theme.breakpoints.up(500)]: {},
  },
  header: {
    display: "flex",
    padding: "1em 0.5em",
  },
  title: {
    color: "#8550FC",
    fontWeight: "bold",
    marginRight: "auto",
  },
  divider: {
    marginBottom: "1.5em",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    [theme.breakpoints.up(768)]: {
      height: 335,
    },
  },
  cardContent: {
    background: "#f0f0f0",
    color: "#262626",
  },
  actions: {
    justifyContent: "space-between",
    padding: "0 1em 1em",
    background: "#f0f0f0",
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
          <motion.div className={classes.header} animate>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Button onClick={() => handleDetail(false, 0)} color="primary">
              <CloseBox />
            </Button>
          </motion.div>
          <Divider className={classes.divider} />
          <Card elevation={0}>
            <motion.div layoutId={`img-container-${id}`}>
              <CardMedia image={img} className={classes.media} />
            </motion.div>
            <motion.div layoutId={`content-container-${id}`}>
              <CardContent className={classes.cardContent}>
                <motion.div animate>
                  <SkillList technique={technique} />
                </motion.div>
                <motion.div layoutId={`content-body-${id}`}>
                  <Typography variant="body2">{description}</Typography>
                </motion.div>
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

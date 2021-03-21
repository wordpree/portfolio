import React from "react";
import { Typography, Container, makeStyles, Divider } from "@material-ui/core";
import SingleSnippet from "../SingleSnippet";
import { codeBlog } from "../../data";
import img from "../../assets/FullSizeRender.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    margin: "5rem auto 7rem",
    textAlign: "center",
    "& >h1": {
      fontSize: "2rem",
      color: "#444",
      marginBottom: "1.5em",
      fontWeight: "bold",
      [theme.breakpoints.up("md")]: {
        fontSize: "2.5rem",
      },
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1em 3em",
    },
  },
  img: {
    width: "95%",
    maxWidth: 720,
    height: "auto",
    maxHeight: 420,
  },
  divider: {
    marginTop: "2.4rem",
  },
}));

const Blog = () => {
  const classes = useStyles();
  return (
    <Container>
      <section className={classes.root}>
        <Typography variant="h3" component="h1">
          How to write best practice and quality code in my projects?
        </Typography>
        <img src={img} alt="studio" className={classes.img} />
        <Divider className={classes.divider} />
        {codeBlog.map((c) => (
          <SingleSnippet {...c} key={c.brief} />
        ))}
      </section>
    </Container>
  );
};
export default Blog;

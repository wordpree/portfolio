import React from "react";
import { makeStyles, Button, Container } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { ModalProvider } from "../Modal";
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import MediaQuery from "../useMedia";
import resume from "../../assets/cv/resume.pdf";
import logo from "../../assets/logo.svg";
import Sidebar from "../Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F5F5FF",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  header: {
    display: "flex",
    minHeight: 90,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.875rem",
  },

  btn: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      color: "#52319B",
      fontSize: "0.75rem",
      fontWeight: "bold",
      border: "1px solid #8550FC",
      borderRadius: 25,
      minWidth: 108,
      borderWidth: 3,
      display: "inherit",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const projectPath = useLocation().pathname === "/projects";
  return (
    <div
      className={classes.root}
      style={{
        background: projectPath ? "none" : "#F5F5FF",
        boxShadow: projectPath ? "0px 2px 4px rgba(0,0,0,0.14)" : "none",
      }}
    >
      <Container>
        <ModalProvider>
          <header className={classes.header}>
            <Logo img={logo} />
            <MediaQuery query={960}>
              <HeaderNav />
            </MediaQuery>
            <MobileNav />
            <Button
              className={classes.btn}
              href={resume}
              target="_blank"
              aria-label="pdf file"
            >
              Resume
            </Button>
          </header>
        </ModalProvider>
      </Container>
      {!projectPath && <Sidebar />}
    </div>
  );
};

export default Header;

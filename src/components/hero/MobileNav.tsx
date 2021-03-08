import React from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core";
import HeaderNav from "./HeaderNav";
import { ModalProvider, ModalBase } from "../Modal";
import MobileMenu from "./MobileMenu";

const modalStyles = (theme: Theme) =>
  createStyles({
    root: {
      top: "95.7px !important",
      overflow: "auto",
      "&>div:first-child": {
        top: 95.7,
      },
    },
    container: {
      height: "auto",
    },
    paper: {
      marginTop: "0.25em",
    },
  });

const Modal = withStyles(modalStyles)(ModalBase);

const MobileNav = () => {
  return (
    <ModalProvider>
      <MobileMenu width={26} height={2} duration={300} />
      <Modal>
        <HeaderNav />
      </Modal>
    </ModalProvider>
  );
};

export default MobileNav;

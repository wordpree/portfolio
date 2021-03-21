import React from "react";
import Header from "./Header";
import { ModalProvider } from "../Modal";

const HeaderIndex = () => {
  return (
    <ModalProvider>
      <Header />
    </ModalProvider>
  );
};

export default HeaderIndex;

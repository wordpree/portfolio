import React, { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return <div />;
};

export default ScrollTop;

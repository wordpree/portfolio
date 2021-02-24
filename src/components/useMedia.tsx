import React from "react";
import { useMediaQuery } from "@material-ui/core";

interface IMQProps {
  children: React.ReactNode;
  query: number;
}

const MediaQuery: React.FC<IMQProps> = ({ children, query }) => {
  const match = useMediaQuery(`(min-width:${query}px)`);
  return <>{match && children}</>;
};

export default MediaQuery;

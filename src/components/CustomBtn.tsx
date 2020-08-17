import React from "react";
import { Button } from "@material-ui/core";

interface ICProps {
  children: React.ReactNode;
  link: string;
}

const CustomBtn = ({ children, link }: ICProps) => {
  return (
    <Button
      href={link}
      target="_blank"
      variant="contained"
      color="primary"
      size="small"
    >
      {children}
    </Button>
  );
};

export default CustomBtn;

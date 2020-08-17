import React from "react";
import { Check } from "mdi-material-ui";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";

interface ISProps {
  technique: string[];
}
const SkillList = ({ technique }: ISProps) => {
  return (
    <List dense>
      {technique.map((t) => (
        <ListItem key={t}>
          <ListItemIcon>
            <Check fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText primary={t} />
        </ListItem>
      ))}
    </List>
  );
};

export default SkillList;

import React from "react";
import { Link } from "react-router-dom";
import { navMenu } from "../utils";

type TClasses = {
  lists: string;
  list: string;
  link: string;
};

const MenuNav: React.FC<{ classes: TClasses }> = ({ classes }) => {
  return (
    <ul className={classes.lists}>
      {Object.keys(navMenu).map((m) => (
        <li key={m} style={{ listStyle: "none" }} className={classes.list}>
          <Link to={navMenu[m]} className={classes.link}>
            {m}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuNav;

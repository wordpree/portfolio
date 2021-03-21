import React from "react";
import { NavLink } from "react-router-dom";
import { navMenu } from "../../utils";

interface INLProps {
  classes: {
    lists: string;
    list: string;
    link: string;
  };
  handleModal?: (status: boolean) => void;
}

const NavLists: React.FC<INLProps> = ({ classes, handleModal }) => {
  return (
    <ul className={classes.lists}>
      {Object.keys(navMenu).map((m) => (
        <li key={m} style={{ listStyle: "none" }} className={classes.list}>
          <NavLink
            onClick={() => handleModal && handleModal(false)}
            to={navMenu[m]}
            className={classes.link}
            activeStyle={{
              background: "#6937FF",
              color: "#fff",
            }}
          >
            {m}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLists;

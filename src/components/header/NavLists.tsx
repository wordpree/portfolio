import React from "react";
import { NavLink } from "react-router-dom";
// import { useDialogContext } from "../Modal";
import { navMenu } from "../../utils";

type TClasses = {
  lists: string;
  list: string;
  link: string;
};

const NavLists: React.FC<{ classes: TClasses }> = ({ classes }) => {
  // const { setOpen } = useDialogContext();
  return (
    <ul className={classes.lists}>
      {Object.keys(navMenu).map((m) => (
        <li key={m} style={{ listStyle: "none" }} className={classes.list}>
          <NavLink
            // onClick={() => setOpen(false)}
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

import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul className={classes["nav-links"]}>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? classes.pending : isActive ? classes.active : ""
          }
          to="/"
          exact
        >
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/u1/places"
          className={({ isActive, isPending }) =>
            isPending ? classes.pending : isActive ? classes.active : ""
          }
        >
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/places/new"
          className={({ isActive, isPending }) =>
            isPending ? classes.pending : isActive ? classes.active : ""
          }
        >
          ADD PLACE
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/auth"
          className={({ isActive, isPending }) =>
            isPending ? classes.pending : isActive ? classes.active : ""
          }
        >
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

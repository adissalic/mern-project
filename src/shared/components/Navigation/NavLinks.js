import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";
import { AuthContext } from "../../context/auth-context";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

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
      {auth.isLoggedIn && (
        <li>
          <NavLink
            to={`/${auth.userId}/places`}
            className={({ isActive, isPending }) =>
              isPending ? classes.pending : isActive ? classes.active : ""
            }
          >
            MY PLACES
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
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
      )}
      {!auth.isLoggedIn && (
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
      )}

      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;

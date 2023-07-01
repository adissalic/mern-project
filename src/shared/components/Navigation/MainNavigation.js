import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import classes from "./MainNavigation.module.css";

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav
          className={classes["main-navigation__drawer-nav"]}
          onClick={closeDrawer}
        >
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className={classes["main-navigation__menu-btn"]}
          onClick={openDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={classes["main-navigation__title"]}>
          <Link to="/">Your Places</Link>
        </h1>

        <nav className={classes["main-navigation__header-nav"]}>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

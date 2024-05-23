import { Fragment } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink, Outlet } from "react-router-dom";

function MainNavigation() {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive && classes.active}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) => isActive && classes.active}
              >
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default MainNavigation;

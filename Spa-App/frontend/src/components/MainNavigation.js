import { Fragment } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink, Outlet } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/newsletter"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Newsletter
              </NavLink>
            </li>
          </ul>
        </nav>
        <NewsletterSignup />
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default MainNavigation;

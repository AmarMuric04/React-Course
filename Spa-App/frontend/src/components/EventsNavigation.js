import { Fragment } from "react";
import classes from "./EventsNavigation.module.css";
import { NavLink, Outlet } from "react-router-dom";

function EventsNavigation() {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                className={({ isActive }) => isActive && classes.active}
                to="/events"
                end
              >
                All Events
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive && classes.active}
                to="/events/new-event"
              >
                New Event
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

export default EventsNavigation;

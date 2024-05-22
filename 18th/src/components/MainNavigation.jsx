import { NavLink } from "react-router-dom";

import classes from "./mainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => isActive && classes.active}
              end
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive && classes.active}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

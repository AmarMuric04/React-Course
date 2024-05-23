import { NavLink } from "react-router-dom";

import classes from "./mainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/root/products"
              className={({ isActive }) => isActive && classes.active}
              end
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/root"
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

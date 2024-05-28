import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header className="h-16 flex items-center justify-center px-8 bg-green-400">
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white underline" : "opacity-50"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-white underline" : "opacity-50"
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

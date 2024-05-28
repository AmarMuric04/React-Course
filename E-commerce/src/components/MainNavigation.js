import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Cart from "./Cart";

export default function MainNavigation() {
  return (
    <header className="h-16 flex items-center px-8">
      <nav className="flex items-center justify-between w-full h-full">
        <Cart />
        <ul className="flex gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-400 underline" : "opacity-50"
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
                isActive ? "text-green-400 underline" : "opacity-50"
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
        <div className="h-full flex items-center">
          <img className="h-12" src={Logo} alt="Logo" />
          <p></p>
        </div>
      </nav>
    </header>
  );
}

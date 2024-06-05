import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Cart from "./Cart";

export default function MainNavigation() {
  return (
    <header className="h-16 flex items-center px-8 justify-center">
      <nav className="flex items-center justify-between w-3/5 h-full">
        <div className="h-full flex items-center">
          <img className="h-1/2" src={Logo} alt="Logo" />
          <p className="m-0 text-green-400 uppercase tracking-[0.1rem]">
            Shopping
          </p>
        </div>
        <ul className="flex items-center gap-3 m-0 bg-green-400 rounded-full py-1 px-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold no-underline text-white"
                  : "font-thin no-underline text-white"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <span className="text-white">|</span>
          <li>
            <NavLink
              to="/store"
              className={({ isActive }) =>
                isActive
                  ? "font-bold no-underline text-white"
                  : "font-thin no-underline text-white"
              }
              end
            >
              Store
            </NavLink>
          </li>
        </ul>

        <section className="flex justify-between gap-3 items-center">
          <div
            className="flex gap-2 items-center border-1 border-green-400
             rounded-full py-1 px-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 256 256"
              className="hover:bg-zinc-200 rounded-full transition-all cursor-pointer h-full
             "
            >
              <path
                fill="currentColor"
                d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for items..."
              className="text-green-400 rounded-full outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 21 21"
              className="cursor-pointer"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15.5 15.5l-10-10zm0-10l-10 10"
              />
            </svg>
          </div>
          <Cart />
        </section>
      </nav>
    </header>
  );
}

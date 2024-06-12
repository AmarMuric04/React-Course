import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Cart from "./Cart";
import { CheckoutIcon } from "../assets/icons";
import Searchbar from "./Searchbar";

export default function MainNavigation() {
  return (
    <header className="h-16 flex items-center px-8 justify-center">
      <nav className="flex items-center justify-between w-[80rem] h-full">
        <div className="h-full flex items-center">
          <img className="h-1/2" src={Logo} alt="Logo" />
          <p className="m-0 text-green-400 uppercase tracking-[0.1rem]">
            Shopping
          </p>
        </div>
        <ul
          className="px-0 py-1 flex items-center m-0 border-[0.1rem] border-green-400
         bg-green-400 rounded-full"
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white px-4 py-1 rounded-l-full no-underline transition-all ${
                  isActive ? "font-bold bg-green-600" : "font-thin"
                }`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <span className="text-white">|</span>
          <li>
            <NavLink
              to="/store/page/1"
              className={({ isActive }) =>
                `text-white px-4 py-1 rounded-r-full no-underline transition-all ${
                  isActive ? "font-bold bg-green-600" : "font-thin"
                }`
              }
              end
            >
              Store
            </NavLink>
          </li>
        </ul>

        <section className="flex justify-end gap-4 items-center w-[30rem]">
          <Searchbar />
          <div className="flex items-center gap-1 px-2 py-1 shadow-md rounded-full bg-white">
            <Cart />
            <Link
              to="/checkout"
              className="flex items-center h-full relative
            p-1 rounded-full cursor-pointer z-50 border-1 border-green-400
           hover:bg-zinc-200 transition-all"
            >
              <CheckoutIcon />
            </Link>
          </div>
        </section>
      </nav>
    </header>
  );
}

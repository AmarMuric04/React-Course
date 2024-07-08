import Logo from "/Logo.png";

import { RightArrowIcon } from "@Icons/Icons";

import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import HeaderNavLists from "./HeaderNavList";
import HamburgerMenu from "./HamburgerMenu";
import HeaderCart from "./HeaderCart";

const navLinks = [
  "Home",
  "About Us",
  "Shop",
  "Services",
  "Blog",
  "Pages",
  "Contact Us",
];
const navLinkCSS = "hover:text-yellow-500 cursor-pointer whitespace-nowrap";

export default function Header() {
  return (
    <header className="w-full backdrop-blur-md absolute top-0 left-0  py-4 z-50 text-white use-poppins flex justify-center">
      <nav className="w-[95%] md:w-[640px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] flex justify-between">
        <div className="flex items-center mr-8">
          <img className="h-12 md:h-20" src={Logo} />
          <p className="use-playwrite text-2xl text-yellow-500">
            Dine<span className="text-green-400">Divine</span>
          </p>
        </div>
        <HeaderNavLists links={navLinks} linksCSS={navLinkCSS} />
        <div className="flex items-center justify-end gap-8 w-full xl:w-1/3">
          <HeaderCart />
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
}

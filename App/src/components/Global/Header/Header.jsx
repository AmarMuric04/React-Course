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
    <header className="absolute top-0 left-0 w-full px-20 py-4 z-50 text-white flex justify-between items-center use-poppins">
      <div className="flex gap-8 items-center mr-8">
        <img className="h-20" src={Logo} />
        <p className="use-playwrite text-3xl text-yellow-500">
          Dine<span className="text-green-400">Divine</span>
        </p>
      </div>
      <HeaderNavLists links={navLinks} linksCSS={navLinkCSS} />
      <div className="flex items-center justify-end gap-8 w-full xl:w-1/3">
        <HeaderCart />
        <YellowButton
          text="Order Now"
          icon={<RightArrowIcon width="2em" height="2em" />}
        />
        <HamburgerMenu />
      </div>
    </header>
  );
}

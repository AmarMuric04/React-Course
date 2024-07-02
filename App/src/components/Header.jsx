import { useState } from "react";
import Logo from "../../public/Logo.png";
import { RightArrowIcon } from "../icons/Icons";
import YellowButton from "./Global/Buttons/YellowButton";
import { motion } from "framer-motion";

const navLinkCSS = "hover:text-yellow-500 cursor-pointer";
const navLinkVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function Header() {
  const [isInView, setIsInView] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full px-20 py-4 z-50 text-white flex justify-between items-center use-poppins">
      <div className="flex gap-8 items-center">
        <img className="h-20" src={Logo} />
        <p className="use-playwrite text-3xl text-yellow-500">
          Dine<span className="text-green-400">Divine</span>
        </p>
      </div>
      <motion.ul
        initial="hidden"
        animate={isInView ? "visible" : ""}
        whileInView={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className="flex items-center gap-6 text-lg"
      >
        <motion.li variants={navLinkVariant} className={navLinkCSS}>
          Home
        </motion.li>
        <motion.li variants={navLinkVariant} className={navLinkCSS}>
          About Us
        </motion.li>
        <motion.li variants={navLinkVariant} className={navLinkCSS}>
          Shop
        </motion.li>
        <motion.li variants={navLinkVariant} className={navLinkCSS}>
          Services
        </motion.li>
        <motion.li variants={navLinkVariant} className={navLinkCSS}>
          Blog
        </motion.li>
        <motion.li variants={navLinkVariant} className={navLinkCSS}>
          Pages
        </motion.li>
        <motion.li variants={navLinkVariant} className={navLinkCSS}>
          Contact Us
        </motion.li>
      </motion.ul>
      <div className="flex items-center justify-end gap-8 w-1/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          className={navLinkCSS}
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 14 14"
          className={navLinkCSS}
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.28 6H1.72a1 1 0 0 0-1 1.2l1.1 5.5a1 1 0 0 0 1 .8h8.36a1 1 0 0 0 1-.8l1.1-5.5a1 1 0 0 0-1-1.2M9 2.5L11 6M3 6l2-3.5"
          />
        </svg>
        <YellowButton
          text="Order Now"
          icon={<RightArrowIcon width="2em" height="2em" />}
        />
      </div>
    </header>
  );
}

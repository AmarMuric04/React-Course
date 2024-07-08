import { useState, useEffect } from "react";

import YellowButton from "@GlobalComponents/Buttons/YellowButton";

import { RightArrowIcon } from "@Icons/Icons";

const navLinkCSS = "hover:text-yellow-500 cursor-pointer whitespace-nowrap";

export default function HeaderCart() {
  const [showIcons, setShowIcons] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setShowIcons(true);
      else setShowIcons(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", () => {});
  }, []);

  return (
    <>
      {showIcons && (
        <>
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
        </>
      )}
    </>
  );
}

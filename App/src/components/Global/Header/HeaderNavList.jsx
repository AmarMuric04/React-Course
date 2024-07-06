import { useState, useEffect } from "react";

import { LayoutGroup } from "framer-motion";

import NavItem from "@GlobalComponents/Items/NavItem";

import AnimatedList from "@Animations/AnimatedList";

export default function HeaderNavLists({ links, linksCSS }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) setShowNavbar(true);
      else setShowNavbar(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", () => {});
  }, []);

  return (
    <>
      {showNavbar && (
        <LayoutGroup>
          <AnimatedList className="flex items-center gap-6 text-lg">
            {links.map((navLink, index) => (
              <NavItem
                linksCSS={linksCSS}
                key={navLink}
                text={navLink}
                index={index}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </AnimatedList>
        </LayoutGroup>
      )}
    </>
  );
}

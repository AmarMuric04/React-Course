import { useState } from "react";

import { LayoutGroup } from "framer-motion";

import NavItem from "@GlobalComponents/Items/NavItem";

import AnimatedList from "@Animations/AnimatedList";

export default function HeaderNavLists({ links, linksCSS }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
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
  );
}

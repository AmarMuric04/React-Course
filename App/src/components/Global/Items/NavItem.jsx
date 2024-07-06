import { motion } from "framer-motion";
import { listItemVariant } from "../../../utils/animationVariants";

export default function NavItem({ text, isActive, onClick, linksCSS }) {
  return (
    <motion.li
      onClick={onClick}
      variants={listItemVariant}
      className={`relative ${linksCSS}`}
    >
      {text}

      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow-500"
        />
      )}
    </motion.li>
  );
}

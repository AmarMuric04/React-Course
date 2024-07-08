import { motion } from "framer-motion";

import { listItemVariant } from "@Utility/animationVariants";

export default function FooterItem({ children, extraClasses }) {
  return (
    <motion.li
      variants={listItemVariant}
      transition={{
        type: "spring",
      }}
      whileHover={{
        scale: 1.05,
      }}
      className={`h-full flex gap-2 w-full whitespace-nowrap ${
        extraClasses ? extraClasses : null
      }`}
    >
      {children}
    </motion.li>
  );
}

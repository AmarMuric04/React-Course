import { useState } from "react";

import { motion } from "framer-motion";

export default function AnimatedList({
  iterables,
  children,
  className,
  ...props
}) {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.ul
      {...props}
      whileInView={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        type: "spring",
      }}
      className={className}
    >
      {children}
    </motion.ul>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedList({ iterables, children, className }) {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.ul
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

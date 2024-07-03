import { motion } from "framer-motion";

import { useState } from "react";

export default function SlideAndFadeIn({ children, className, starting, end }) {
  const [isInView, setIsInView] = useState(false);

  const variants = {
    hidden: { opacity: 0, x: Number(starting) },
    visible: {
      opacity: 1,
      x: Number(end),
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    outOfView: { opacity: 0, x: Number(starting) },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "outOfView"}
      whileInView={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

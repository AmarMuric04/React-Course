import { motion } from "framer-motion";

import { useState } from "react";

export default function JumpAndFadeIn({
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    outOfView: { opacity: 0, y: 50 },
  },
  children,
  className,
}) {
  const [isInView, setIsInView] = useState(false);

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

import { useState } from "react";

import { motion } from "framer-motion";

export default function Increase({
  children,
  className,
  startingHeight,
  endingHeight,
  startingWidth,
  endingWidth,
}) {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      whileInView={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      variants={{
        hidden: {
          width: startingWidth,
          height: startingHeight,
        },
        visible: {
          width: endingWidth,
          height: endingHeight,
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
    </motion.div>
  );
}

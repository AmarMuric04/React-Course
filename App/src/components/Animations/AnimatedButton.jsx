import React, { useState } from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: { width: 0, opacity: 0 },
  expand: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  showContent: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const AnimatedButton = ({
  children,
  wrapperClasses,
  buttonClasses,
  textClasses,
  width,
}) => {
  const [contentVisible, setContentVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <div
      className={wrapperClasses && wrapperClasses}
      style={{
        width: `${width}px`,
      }}
    >
      <motion.button
        initial="hidden"
        animate={isInView ? "expand" : "hidden"}
        whileInView={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
        variants={buttonVariants}
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        onAnimationComplete={() => setContentVisible(true)}
        className={buttonClasses && buttonClasses}
      >
        <motion.span
          initial={{ opacity: 0 }}
          variants={buttonVariants}
          animate={contentVisible ? (isInView ? "showContent" : "hidden") : ""}
          whileInView={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)}
          className={textClasses && textClasses}
        >
          {children}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default AnimatedButton;

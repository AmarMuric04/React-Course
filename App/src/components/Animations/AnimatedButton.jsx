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
  ...props
}) => {
  const [contentVisible, setContentVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <div
      className={wrapperClasses && wrapperClasses}
      style={{
        width: `${width}`,
      }}
    >
      <motion.button
        {...props}
        initial="hidden"
        animate={isInView ? "expand" : "hidden"}
        whileInView={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
        variants={buttonVariants}
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        onAnimationComplete={() => setContentVisible(true)}
        className={buttonClasses}
      >
        <motion.span
          initial={{ opacity: 0 }}
          variants={buttonVariants}
          animate={contentVisible ? (isInView ? "showContent" : "hidden") : ""}
          whileInView={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)}
          className={textClasses}
        >
          {children}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default AnimatedButton;

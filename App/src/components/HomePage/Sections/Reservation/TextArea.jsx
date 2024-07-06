import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { listItemVariant } from "@Utility/animationVariants";

export default function TextArea({
  label,
  placeholder,
  extraClasses,
  isSubmitted,
  ...props
}) {
  const [inputValue, setInputValue] = useState();

  const handleChangeInputValue = (event) => setInputValue(event.target.value);

  useEffect(() => {
    if (isSubmitted) setInputValue("");
  }, [isSubmitted]);

  return (
    <div className={extraClasses}>
      <motion.label
        variants={listItemVariant}
        transition={{
          type: "spring",
        }}
      >
        {label}
      </motion.label>

      <motion.textarea
        variants={listItemVariant}
        transition={{
          type: "spring",
        }}
        whileHover={{
          scale: 1.05,
        }}
        {...props}
        value={inputValue}
        className={`bg-gray-100 px-4 py-3 outline-none focus:bg-gray-200 min-h-48 max-h-48 transition-all text-xs w-full ${extraClasses}`}
        id="text"
        name="text"
        rows="4"
        cols="50"
        required
        onChange={handleChangeInputValue}
        placeholder={placeholder ? placeholder : null}
      ></motion.textarea>
    </div>
  );
}

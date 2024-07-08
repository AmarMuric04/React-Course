import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { listItemVariant } from "@Utility/animationVariants";

export default function Input({
  label,
  type,
  id,
  placeholder,
  invalid = false,
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
        className="text-xs lg:text-md"
      >
        {label}
      </motion.label>
      <motion.input
        {...props}
        variants={listItemVariant}
        transition={{
          type: "spring",
        }}
        whileHover={{
          scale: 1.05,
        }}
        className={`bg-gray-100 px-4 py-3 outline-none focus:bg-gray-200
         text-xs w-full border-[0.1rem] border-transparet ${
           invalid && "border-red-400"
         }`}
        id={id}
        name={id}
        placeholder={placeholder ? placeholder : null}
        type={type}
        value={inputValue}
        onChange={handleChangeInputValue}
        required
      />
    </div>
  );
}

import { motion } from "framer-motion";

export default function Input({
  label,
  type,
  id,
  placeholder,
  invalid = false,
  extraClasses,
  ...props
}) {
  return (
    <div className={extraClasses}>
      <motion.label
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
        }}
      >
        {label}
      </motion.label>
      <motion.input
        {...props}
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{
          type: "spring",
        }}
        whileHover={{
          scale: 1.05,
        }}
        className={`bg-gray-100 px-4 py-3 outline-none focus:bg-gray-200
         text-xs w-full border-[0.1rem] border-transparen ${
           invalid && "border-red-400"
         }`}
        id={id}
        name={id}
        placeholder={placeholder ? placeholder : null}
        type={type}
        required
      />
    </div>
  );
}

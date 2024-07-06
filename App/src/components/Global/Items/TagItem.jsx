import { motion } from "framer-motion";

import { listItemVariant } from "../../../utils/animationVariants";

export default function TagItem({ tag, itemWidth }) {
  return (
    <motion.li
      variants={listItemVariant}
      transition={{
        type: "spring",
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 500,
      }}
      style={{
        minWidth: `${itemWidth}px`,
        height: `${itemWidth}px`,
      }}
      key={tag}
      className="flex flex-col items-center justify-center gap-4 p-4 rounded-full hover:bg-[#fff5e9] cursor-pointer hover:shadow-md"
    >
      <img
        className="w-12"
        src={`${tag.toLowerCase().trim().replace(" ", "-")}.png`}
      />
      <p className="use-poppins text-center font-bold tracking-[0.05rem]">
        {tag}
      </p>
    </motion.li>
  );
}

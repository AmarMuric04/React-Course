import { motion } from "framer-motion";

export default function TagItem({ tag, itemWidth }) {
  return (
    <motion.li
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.5,
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
        scale: 1.1,
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

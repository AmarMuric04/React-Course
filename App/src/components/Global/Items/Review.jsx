import { useContext, useEffect, useRef } from "react";

import { Quotes } from "@Icons/Icons";

import { ReviewContext } from "@Home/Review/ReviewSection";

import { motion } from "framer-motion";

import { listItemVariant } from "../../../utils/animationVariants";

export default function Review({
  listItemHovered,
  translateX,
  index,
  review,
  ...props
}) {
  const { handleSetWidth, widthOfListItem } = useContext(ReviewContext);
  const listItem = useRef();

  useEffect(() => {
    if (!listItem.current) return;

    handleSetWidth(listItem.current.offsetWidth);
  }, []);

  return (
    <motion.li
      variants={listItemVariant}
      transition={{
        type: "spring",
      }}
      whileHover={{
        scale: 1.1,
      }}
      {...props}
      ref={listItem}
      className={`min-w-72 hover:bg-[#141210] hover:text-white h-auto border-[0.1rem] border-gray-400 rounded-md use-poppins shadow-xl p-4 relative transition-custom ${
        !listItemHovered &&
        translateX - widthOfListItem * 1.5 < -widthOfListItem * (index + 1)
          ? "bg-[#141210] text-white  first:bg-[#141210] first:text-white "
          : " bg-[#fff5e9]"
      }`}
    >
      <Quotes width="2.5em" height="2.5em" />
      <img
        className="w-12 h-12 rounded-full object-scale-down"
        src={review.image}
      />
      <p className="font-bold my-4">{review.username}</p>
      <p className="text-sm">{review.comment}</p>
    </motion.li>
  );
}

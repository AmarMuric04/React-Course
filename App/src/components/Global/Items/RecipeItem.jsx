import StarRating from "@GlobalComponents/StarRating";

import { toCurrency } from "@Utility/transformData";

import { motion } from "framer-motion";

import { listItemVariant } from "../../../utils/animationVariants";

export default function RecipeItem({
  itemWidth,
  recipe,
  showOrderButton = true,
}) {
  return (
    <motion.li
      variants={listItemVariant}
      transition={{
        type: "spring",
      }}
      whileHover={{
        scale: 1.05,
      }}
      style={{
        minWidth: `${itemWidth}px`,
        width: `${itemWidth}px`,
      }}
      key={recipe.name}
      className="use-poppins"
    >
      <div className="w-full h-[19rem] bg-white grid place-items-center">
        <img className="w-[95%] h-[95%] object-cover" src={recipe.image} />
      </div>
      <p className="font-bold text-sm my-2 w-full truncate">{recipe.name}</p>
      <StarRating rating={recipe.rating}></StarRating>
      {recipe.reviewCount > 0 ? (
        <p className="tracking-[0.1rem] text-md my-2">
          {toCurrency(recipe.reviewCount - 0.01) + " EUR"}
        </p>
      ) : (
        <p className="tracking-[0.1rem] text-md my-2">FREE</p>
      )}
      {showOrderButton && (
        <button className="py-2 px-4 font-bold use-poppins border-2 border-black rounded-full self-start hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all">
          Order Now
        </button>
      )}
    </motion.li>
  );
}

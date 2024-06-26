import StarRating from "../StarRating";
import { toCurrency } from "../../../../utils/transformData";
import { motion } from "framer-motion";

export default function RecipeItem({ itemWidth, recipe }) {
  return (
    <motion.li
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
        scale: 1.1,
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
    </motion.li>
  );
}

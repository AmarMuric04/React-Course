import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import RecipeItem from "@GlobalComponents/Items/RecipeItem";

export default function Recipes({ recipes }) {
  const [isInView, setIsInView] = useState(false);

  const newRecipes = useMemo(() => {
    console.log("changed");
    return recipes.splice(0, 8);
  }, [recipes]);

  return (
    <motion.ul
      whileInView={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        type: "spring",
      }}
      className="flex self-center transition-all gap-[79.2px] mt-16  no-scrollbar flex-wrap w-[1280px]"
    >
      {newRecipes.map((iterable, index) => (
        <RecipeItem recipe={iterable} itemWidth={260.6} />
      ))}
    </motion.ul>
  );
}

import { useMemo } from "react";

import RecipeItem from "@GlobalComponents/Items/RecipeItem";

import AnimatedList from "@Animations/AnimatedList";

export default function Recipes({ recipes }) {
  const newRecipes = useMemo(() => {
    return recipes.splice(0, 8);
  }, [recipes]);

  return (
    <AnimatedList className="w-full flex self-center transition-all gap-[79.2px] mt-16  no-scrollbar flex-wrap justify-center md:justify-between xl:justify-center lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] ">
      {newRecipes.map((iterable, index) => (
        <RecipeItem recipe={iterable} itemWidth={260.6} />
      ))}
    </AnimatedList>
  );
}

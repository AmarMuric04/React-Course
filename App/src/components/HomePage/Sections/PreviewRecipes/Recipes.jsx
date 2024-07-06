import { useMemo, useState } from "react";

import RecipeItem from "@GlobalComponents/Items/RecipeItem";
import AnimatedList from "@Animations/AnimatedList";

export default function Recipes({ recipes }) {
  const newRecipes = useMemo(() => {
    return recipes.splice(0, 8);
  }, [recipes]);

  return (
    <AnimatedList className="flex self-center transition-all gap-[79.2px] mt-16  no-scrollbar flex-wrap w-[1280px]">
      {newRecipes.map((iterable, index) => (
        <RecipeItem recipe={iterable} itemWidth={260.6} />
      ))}
    </AnimatedList>
  );
}

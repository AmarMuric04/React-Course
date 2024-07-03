import { useState, useEffect } from "react";

import TitleText from "@GlobalComponents/Texts/TitleText";
import RecipeItem from "@GlobalComponents/Items/RecipeItem";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";
import ScrollableContainer from "@GlobalComponents/ScrollableContainer";

export default function OurFavorites() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async (limit, skip) => {
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setRecipes(data.recipes);
        console.log(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRecipes(0, 20);
  }, []);

  let recipeAmount;

  if (window.innerWidth >= 1536) recipeAmount = 4;
  else if (window.innerWidth >= 1280) recipeAmount = 3;
  else if (window.innerWidth >= 1024) recipeAmount = 3;
  else if (window.innerWidth >= 768) recipeAmount = 2;
  else if (window.innerWidth >= 640) recipeAmount = 1;
  else if (window.innerWidth >= 480) recipeAmount = 1;

  return (
    <div className="lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] relative flex flex-col my-16">
      <div className="flex flex-col items-center">
        <TitleText extraClasses="text-[3rem]">
          Best Selling <SpecialText>Items</SpecialText>
        </TitleText>
        <ParagraphText extraClasses="text-[1.2rem] text-center">
          Explore our best selling items, beloved by our patrons for their
          exceptional flavors and exquisite presentation. Each dish showcases
          our commitment to quality and culinary innovation.
        </ParagraphText>
      </div>
      <ScrollableContainer
        iterables={recipes}
        visible={recipeAmount}
        itemWidth={260.6}
        gap={79.2}
      >
        {(recipe, _, itemWidth) => (
          <RecipeItem
            showOrderButton={false}
            recipe={recipe}
            itemWidth={itemWidth}
          />
        )}
      </ScrollableContainer>
    </div>
  );
}

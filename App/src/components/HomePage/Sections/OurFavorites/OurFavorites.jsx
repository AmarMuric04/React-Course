import { useState, useEffect } from "react";

import TitleText from "@GlobalComponents/Texts/TitleText";
import RecipeItem from "@GlobalComponents/Items/RecipeItem";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";
import ScrollableContainer from "@GlobalComponents/ScrollableContainer";

export default function OurFavorites() {
  const [recipes, setRecipes] = useState([]);
  const [showedItems, setShowedItems] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) setShowedItems(4);
      else if (window.innerWidth >= 1280) setShowedItems(3);
      else if (window.innerWidth >= 1024) setShowedItems(2);
      else if (window.innerWidth >= 768) setShowedItems(2);
      else if (window.innerWidth >= 640) setShowedItems(1);
      else setShowedItems(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", () => {});
  }, []);

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

  return (
    <div className="w-[95%] md:w-[640px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] relative flex flex-col my-16 items-center">
      <div className="flex flex-col items-center text-center xl:text-start">
        <TitleText extraClasses="text-[2rem] lg:text-[3rem]">
          Best Selling <SpecialText>Items</SpecialText>
        </TitleText>
        <ParagraphText extraClasses="text-[1rem] lg:text-[1.2rem] text-center">
          Explore our best selling items, beloved by our patrons for their
          exceptional flavors and exquisite presentation. Each dish showcases
          our commitment to quality and culinary innovation.
        </ParagraphText>
      </div>
      <ScrollableContainer
        iterables={recipes}
        visible={showedItems}
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

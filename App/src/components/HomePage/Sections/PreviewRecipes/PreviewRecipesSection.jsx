import { useState, useEffect } from "react";

import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";

import Recipes from "./Recipes";

import { RightArrowIcon } from "@Icons/Icons";

export default function PreviewRecipesSection() {
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

  return (
    <div className="w-[95%] md:w-[640px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px]  py-16 flex flex-col">
      <section className="w-full xl:h-48 flex justify-between flex-col xl:flex-row">
        <div className="w-full xl:w-[60%] text-center xl:text-start">
          <TitleText extraClasses="text-[2rem] lg:text-[3rem]">
            Handpicked Culinary <br /> <SpecialText>Masterpieces</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1rem] lg:text-[1.rem]">
            Discover our handpicked culinary masterpieces, each meticulously
            crafted to perfection. These dishes represent the pinnacle of our
            culinary expertise.
          </ParagraphText>
        </div>
        <div className="w-full xl:w-[40%] flex justify-center xl:justify-end items-end">
          <YellowButton
            width="[15rem]"
            text="View More"
            icon={<RightArrowIcon width="2em" height="2em" />}
          />
        </div>
      </section>
      <Recipes recipes={recipes} />
    </div>
  );
}

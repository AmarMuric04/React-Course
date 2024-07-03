import { useState, useEffect } from "react";
import TitleText from "../../../Global/Texts/TitleText";
import ParagraphText from "../../../Global/Texts/ParagraphText";
import YellowButton from "../../../Global/Buttons/YellowButton";
import { RightArrowIcon } from "../../../../icons/Icons";
import SpecialText from "../../../Global/Texts/SpecialText";
import Recipes from "./Recipes";

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
    <div className="w-[1280px] py-16 flex flex-col">
      <section className="w-full h-48 flex justify-between">
        <div className="w-[60%]">
          <TitleText extraClasses="text-[3rem]">
            Handpicked Culinary <br /> <SpecialText>Masterpieces</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1.2rem]">
            Discover our handpicked culinary masterpieces, each meticulously
            crafted to perfection. These dishes represent the pinnacle of our
            culinary expertise.
          </ParagraphText>
        </div>
        <div className="w-[40%] flex justify-end items-end">
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

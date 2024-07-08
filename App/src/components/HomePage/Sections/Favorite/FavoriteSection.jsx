import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";
import UnderlinedButton from "@GlobalComponents/Buttons/UnderlinedButton";

import { RightArrowIcon } from "@Icons/Icons";

import JumpAndFadeIn from "@Animations/JumpAndFadeIn";
import Increase from "../../../Animations/Increase";

export default function FavoriteSection() {
  return (
    <div className="w-full md:w-[640px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] flex flex-col xl:flex-row items-center xl:items-start py-32 justify-center gap-40 xl:gap-20 relative">
      <Increase
        startingHeight="2rem"
        endingHeight="40rem"
        startingWidth="2rem"
        endingWidth="50rem"
        className="absolute right-0 md:-right-20 lg:-right-4 xl:-right-40 2xl:right-0 bottom-[7rem] md:bottom-[5rem] shadow-md"
      >
        <div className="bg-[#fde7cb] h-full w-full z-0 rounded-md"></div>
      </Increase>
      <div className="relative flex justify-center w-full">
        <JumpAndFadeIn className="h-[30rem] xl:max-w-[100rem] max-w-[24rem] shadow-xl mr-28 relative left-8 bottom-12 md:left-0">
          <img
            className="w-full h-full object-cover rounded-lg skew-x-1"
            src="https://img.freepik.com/premium-photo/burger-with-flying-ingredients-black-background-fast-food-concept_843762-1629.jpg?w=826"
          />
        </JumpAndFadeIn>
        <JumpAndFadeIn className="absolute w-64 h-64 rounded-xl -skew-x-2 -bottom-8 left-28 lg:left-40 2xl:left-64 border-[0.4rem] border-[#fff5e9] shadow-xl">
          <img
            className="rounded-xl"
            src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg"
          />
        </JumpAndFadeIn>
      </div>
      <div className="flex flex-col gap-2 py-16 w-full z-50 text-center xl:text-start px-12 xl:px-0">
        <TitleText extraClasses="text-[2rem] lg:text-[2rem]">
          Captivating Culinary <br /> <SpecialText>Favorites</SpecialText>
        </TitleText>
        <ParagraphText extraClasses="text-[1rem] lg:text-[1.2rem]">
          Welcome to a culinary paradise, where every bite is an unforgettable
          journey. Discover captivating favorites, crafted with fresh
          ingredients and innovative flavors. Each dish is a feast for the eyes
          and palate, making every moment truly divine.
        </ParagraphText>
        <div className="flex gap-3 items-center mt-8">
          <YellowButton
            width="15"
            text="Order Now"
            icon={<RightArrowIcon width="2em" height="2em" />}
          />
          <UnderlinedButton text="Check your favorites" color="green" />
        </div>
      </div>
    </div>
  );
}

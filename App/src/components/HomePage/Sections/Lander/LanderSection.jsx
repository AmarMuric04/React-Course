import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";

import handImg from "/hand.png";

import { RightArrowIcon } from "@Icons/Icons";
import TagList from "./TagList";

export default function LanderSection() {
  return (
    <div className="w-full h-screen">
      <div className="relative text-white w-full h-[75%] special-bg pt-48 pl-32">
        <TitleText extraClasses="text-[4rem]">
          Your Go-To Spot for <br /> Quick and{" "}
          <SpecialText>Tasty Eats!</SpecialText>
        </TitleText>
        <ParagraphText extraClasses="text-[1.2rem]">
          Welcome to DineDivine, where every bite is a journey to culinary
          heaven,
          <br /> and every meal is an unforgettable experience of gourmet bliss!
        </ParagraphText>
        <YellowButton
          width="[15rem]"
          text="Order Now"
          icon={<RightArrowIcon width="2em" height="2em" />}
        />
        <img src={handImg} className="absolute right-0 bottom-0 w-[70%]" />
      </div>
      <TagList />
    </div>
  );
}

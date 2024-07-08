import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";

import { RightArrowIcon } from "@Icons/Icons";
import TagList from "./TagList";
import HandImage from "./HandImage";

export default function LanderSection() {
  return (
    <div className="w-full h-screen">
      <div className="relative text-white w-full h-[75%] special-bg flex flex-col items-center">
        <div className="h-full w-[95%] md:w-[640px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] flex flex-col items-center xl:items-start justify-center text-center xl:text-start">
          <TitleText extraClasses="text-[2rem] lg:text-[4rem]">
            Your Go-To Spot for <br /> Quick and{" "}
            <SpecialText>Tasty Eats!</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1rem] lg:text-[1.2rem]">
            Welcome to DineDivine, where every bite is a journey to culinary
            heaven,
            <br /> and every meal is an unforgettable experience of gourmet
            bliss!
          </ParagraphText>
          <YellowButton
            width="[15rem]"
            text="Order Now"
            icon={<RightArrowIcon width="2em" height="2em" />}
          />
          <HandImage />
        </div>
      </div>
      <TagList />
    </div>
  );
}

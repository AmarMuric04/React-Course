import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";
import InformationCard from "@GlobalComponents/Items/InformationCard";

import { RightArrowIcon } from "@Icons/Icons";

import SlideAndFadeIn from "@Animations/SlideAndFadeIn";

export default function InstructionsSection() {
  return (
    <div className="w-full bg-[#fde7cb] py-16 flex justify-center">
      <div className="w-[95%] md:w-[640px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] flex justify-between gap-10 flex-col-reverse xl:flex-row ">
        <div className="w-full xl:w-[65%] flex-col items-center 2xl:items-end">
          <SlideAndFadeIn
            starting="150"
            end="-20"
            className="flex py-4 gap-4 justify-center md:flex-row md:items-start flex-col items-center"
          >
            <InformationCard
              icon="cooking"
              title="Warm & Enjoy"
              text="Warm & enjoy delicious comfort food that soothes the soul and delights the taste buds. Indulge in hearty soups, savory stews, and decadent desserts."
            />
            <InformationCard
              icon="cloche"
              title="Savour & Replay"
              text="Experience comforting dishes like hearty soups, savory stews, and decadent desserts, each bite offering a nostalgic embrace of comfort and joy."
            />
          </SlideAndFadeIn>
          <SlideAndFadeIn
            starting="-150"
            end="0"
            className="flex py-4 gap-4 justify-center md:flex-row md:items-start flex-col items-center"
          >
            <InformationCard
              icon="affection"
              title="Delivery Services"
              text="Take a look & experience seamless delivery with our dedicated
                  team ensuring your food arrives fresh, tasty and on time,
                  every single time."
            />
            <InformationCard
              icon="diet"
              title="Organic Food"
              text="Explore our selection of wholesome, amazing, good,
                  farm-to-table goodness, delivering quality organic ingredients
                  directly to your kitchen."
            />
          </SlideAndFadeIn>
        </div>
        <div className="flex  flex-col items-center 2xl:items-start w-full xl:w-[35%] text-center 2xl:text-start">
          <TitleText extraClasses="text-[2rem] lg:text-[3rem]">
            The Choice of <br /> <SpecialText>Customers</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1rem] lg:text-[1.2rem]">
            <p className="use-poppins my-8">
              Our best selling items are the choice of customers who seek
              exceptional flavors and impeccable quality. Each dish is crafted
              with precision, using the finest ingredients to ensure a memorable
              dining experience.
            </p>
          </ParagraphText>
          <YellowButton
            width="[15rem]"
            text="View More"
            icon={<RightArrowIcon width="2em" height="2em" />}
          />
        </div>
      </div>
    </div>
  );
}

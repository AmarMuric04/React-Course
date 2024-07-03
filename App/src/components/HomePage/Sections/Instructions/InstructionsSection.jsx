import SlideAndFadeIn from "../../../Animations/SlideAndFadeIn";
import InformationCard from "../../../Global/Items/InformationCard";
import TitleText from "../../../Global/Texts/TitleText";
import SpecialText from "../../../Global/Texts/SpecialText";
import ParagraphText from "../../../Global/Texts/ParagraphText";
import YellowButton from "../../../Global/Buttons/YellowButton";
import { RightArrowIcon } from "../../../../icons/Icons";

export default function InstructionsSection() {
  return (
    <div className="w-full bg-[#fde7cb] py-16 flex justify-center">
      <div className="w-[1280px] flex justify-between gap-10">
        <div className="w-[65%] flex-col items-end">
          <SlideAndFadeIn starting="150" end="-20" className="flex py-4 gap-4">
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
          <SlideAndFadeIn starting="-150" end="0" className="flex py-4 gap-4">
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
        <div className="w-[35%]">
          <TitleText extraClasses="text-[3rem]">
            The Choice of <br /> <SpecialText>Customers</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1.2rem]">
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

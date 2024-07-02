import Reviews from "./Reviews";
import { LeftArrowIcon, RightArrowIcon } from "../../../../icons/Icons";
import reviews from "../../../../assets/reviews";
import { createContext, useState } from "react";
import CircleButton from "../../../Global/Buttons/CircleButton";
import TitleText from "../../../Global/Texts/TitleText";
import SpecialText from "../../../Global/Texts/SpecialText";
import ParagraphText from "../../../Global/Texts/ParagraphText";

export const ReviewContext = createContext({
  widthOfListItem: 0,
  handleSetWidth: () => {},
});

export const ReviewContextProvider = ({ children }) => {
  const [widthOfListItem, setWidthOfListItem] = useState(0);

  const handleSetWidth = (width) => setWidthOfListItem(width);

  return (
    <ReviewContext.Provider
      value={{
        widthOfListItem,
        handleSetWidth,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default function ReviewSection() {
  const [scroll, setScroll] = useState(undefined);

  const handleScroll = () =>
    setScroll((prevScroll) => {
      if (prevScroll === undefined || prevScroll === false) return true;
      else return false;
    });

  return (
    <div className="w-[1280px] py-16 flex flex-col items-end">
      <div className="flex justify-between z-50">
        <div className="w-1/2">
          <TitleText extraClasses="text-[3rem]">
            Our Cherished <SpecialText>Patrons</SpecialText>{" "}
          </TitleText>
          <ParagraphText extraClasses="text-[1.2rem]">
            For our cherished patrons, we extend heartfelt gratitude for your
            unwavering support and loyalty. Your satisfaction and enjoyment are
            at the heart of everything we do, inspiring us to continuously
            deliver exceptional culinary experiences. Thank you for being a part
            of our family.
          </ParagraphText>
        </div>
        <CircleButton
          onClick={handleScroll}
          extraClasses="self-end bg-red-400"
          icon={<RightArrowIcon height="1.3em" width="1.3em" />}
        />
      </div>
      <section className="w-[1600px] self-start relative">
        <ReviewContextProvider>
          <Reviews reviews={reviews} isScrolled={scroll} />
        </ReviewContextProvider>
      </section>
    </div>
  );
}

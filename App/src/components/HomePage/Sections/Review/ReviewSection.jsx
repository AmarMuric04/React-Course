import { createContext, useContext, useState } from "react";

import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import CircleButton from "@GlobalComponents/Buttons/CircleButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";

import reviews from "@Assets/reviews";

import Reviews from "./Reviews";

import { RightArrowIcon } from "@Icons/Icons";

export const ReviewContext = createContext({
  widthOfListItem: 0,
  listGap: 0,
  handleSetWidth: () => {},
  handleSetGap: () => {},
});

export const ReviewContextProvider = ({ children }) => {
  const [widthOfListItem, setWidthOfListItem] = useState(0);
  const [listGap, setListGap] = useState(0);

  const handleSetWidth = (width) => setWidthOfListItem(width);
  const handleSetGap = (gap) => setListGap(gap);

  return (
    <ReviewContext.Provider
      value={{
        widthOfListItem,
        listGap,
        handleSetWidth,
        handleSetGap,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default function ReviewSection() {
  const [translateX, setTranslateX] = useState(0);
  const { widthOfListItem, listGap } = useContext(ReviewContext);

  const handleScroll = () =>
    setTranslateX((prevTranslateX) => prevTranslateX - widthOfListItem);

  return (
    <div className="w-[95%] md:w-[640px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] py-16 flex flex-col items-end">
      <div className="flex justify-between z-50 flex-col">
        <div className="w-full xl:w-1/2 text-center xl:text-start">
          <TitleText extraClasses="text-[2rem] lg:text-[3rem]">
            Our Cherished <SpecialText>Patrons</SpecialText>{" "}
          </TitleText>
          <ParagraphText extraClasses="text-[1rem] lg:text-[1.2rem]">
            For our cherished patrons, we extend heartfelt gratitude for your
            unwavering support and loyalty. Your satisfaction and enjoyment are
            at the heart of everything we do, inspiring us to continuously
            deliver exceptional culinary experiences. Thank you for being a part
            of our family.
          </ParagraphText>
        </div>
        {translateX - (widthOfListItem + parseInt(listGap)) >
        widthOfListItem * 0.5 -
          (reviews.length * widthOfListItem + parseInt(listGap)) ? (
          <CircleButton
            onClick={handleScroll}
            extraClasses="self-end bg-red-400"
            icon={<RightArrowIcon height="1.3em" width="1.3em" />}
          />
        ) : (
          <div className="h-10"></div>
        )}
      </div>
      <section className="self-start relative">
        <Reviews
          reviews={reviews}
          translateX={translateX}
          setTranslateX={setTranslateX}
        />
      </section>
    </div>
  );
}

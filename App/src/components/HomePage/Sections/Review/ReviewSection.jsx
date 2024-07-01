import Reviews from "./Reviews";
import { LeftArrowIcon, RightArrowIcon } from "../../../../icons/Icons";
import reviews from "../../../../assets/reviews";
import { useState } from "react";

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
          <h1 className="use-playfair font-bold text-[3rem] leading-tight">
            Our Cherished <span className="text-green-400">Patrons</span>
          </h1>
          <p className="use-poppins my-8">
            For our cherished patrons, we extend heartfelt gratitude for your
            unwavering support and loyalty. Your satisfaction and enjoyment are
            at the heart of everything we do, inspiring us to continuously
            deliver exceptional culinary experiences. Thank you for being a part
            of our family.
          </p>
        </div>
        <button
          onClick={handleScroll}
          className="self-end bg-orange-400 text-white w-12 h-12 rounded-full hover:bg-orange-300 grid place-items-center border-2 border-orange-400 mb-8"
        >
          <RightArrowIcon height="1.3em" width="1.3em" />
        </button>
      </div>
      <section className="w-[1279px] self-start relative">
        <Reviews reviews={reviews} isScrolled={scroll} />
      </section>
    </div>
  );
}

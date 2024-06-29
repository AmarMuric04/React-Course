import StarRating from "./StarRating";
import { toCurrency } from "../../utils/transformData";
import { useRef, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../icons/Icons";

/* Container could be made more universal with a dynamic set of width, item length
 etc... but there's no point */

export default function ScrollableContainer({ iterables }) {
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  const handleScrollRight = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = iterables.length * itemRef.current.offsetWidth + 11.2;
    const remainingScrollableArea = containerWidth - contentWidth;
    const scrollAmount = (itemRef.current.offsetWidth + 11.2) * 2;

    if (translateX - scrollAmount <= remainingScrollableArea) return;

    setTranslateX((prevTranslateX) =>
      Number((prevTranslateX - itemRef.current.offsetWidth - 11.2).toFixed(5))
    );
  };

  const handleScrollLeft = () => {
    if (translateX >= 0) return;

    setTranslateX((prevTranslateX) =>
      Number((prevTranslateX + itemRef.current.offsetWidth + 11.2).toFixed(5))
    );
  };

  return (
    <>
      <section
        ref={containerRef}
        className="w-[66rem] self-center flex overflow-scroll no-scrollbar"
      >
        {iterables.length > 0 && (
          <ul
            style={{
              transform: `translateX(${translateX}px)`,
            }}
            className="flex transition-all gap-[0.7rem] mt-16 w-full no-scrollbar"
          >
            {iterables.map((iterable, index) => (
              <li
                ref={itemRef}
                key={index}
                className="use-poppins min-w-[16rem]"
              >
                <div className="w-full h-[18rem] bg-white grid place-items-center">
                  <img
                    className="w-[95%] h-[95%] object-cover"
                    src={iterable.image}
                  />
                </div>
                <p className="font-bold text-sm my-2 w-full truncate">
                  {iterable.name}
                </p>
                <StarRating rating={iterable.rating}></StarRating>
                {iterable.reviewCount > 0 ? (
                  <p className="tracking-[0.1rem] text-md my-2">
                    {toCurrency(iterable.reviewCount - 0.01) + " EUR"}
                  </p>
                ) : (
                  <p className="tracking-[0.1rem] text-md my-2">FREE</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
      {itemRef.current && (
        <div className="absolute top-[65%] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[76rem] flex justify-between">
          {translateX < 0 ? (
            <button
              onClick={handleScrollLeft}
              className="w-10 h-10 rounded-full grid place-items-center border-2 border-orange-400 transition-all bg-orange-400 text-white hover:bg-orange-300 shadow-md hover:shadow-xl"
            >
              <LeftArrowIcon width="1.3em" height="1.3em" />
            </button>
          ) : (
            <div></div>
          )}

          {translateX - (itemRef.current.offsetWidth + 11.2) * 2 >
          containerRef.current.offsetWidth -
            (iterables.length * itemRef.current.offsetWidth + 11.2) ? (
            <button
              onClick={handleScrollRight}
              className="w-10 h-10 rounded-full grid place-items-center border-2 border-orange-400 transition-all bg-orange-400 hover:bg-orange-300 text-white shadow-md hover:shadow-xl"
            >
              <RightArrowIcon width="1.3em" height="1.3em" />
            </button>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </>
  );
}

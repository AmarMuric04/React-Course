import StarRating from "./StarRating";
import { toCurrency } from "../../utils/transformData";
import { useEffect, useRef, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../icons/Icons";

export default function ScrollableContainer({
  iterables,
  itemWidth,
  gap,
  visible,
}) {
  const containerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    setContainerWidth(containerRef.current.offsetWidth);
  }, []);

  const handleScrollRight = () => {
    const contentWidth = iterables.length * itemWidth + gap;
    const remainingScrollableArea = containerWidth - contentWidth;
    const scrollAmount = (itemWidth + gap) * 2;

    if (translateX - scrollAmount <= remainingScrollableArea) return;

    setTranslateX((prevTranslateX) =>
      Number((prevTranslateX - itemWidth - gap).toFixed(5))
    );
  };

  const handleScrollLeft = () => {
    if (translateX >= 0) return;

    setTranslateX((prevTranslateX) =>
      Number((prevTranslateX + itemWidth + gap).toFixed(5))
    );
  };

  return (
    <>
      <section
        ref={containerRef}
        style={{ width: `${itemWidth * visible + (visible - 1) * gap}px` }}
        className="self-center flex overflow-hidden no-scrollbar"
      >
        {iterables.length > 0 && (
          <ul
            style={{
              transform: `translateX(${translateX}px)`,
              gap: `${gap}px`,
            }}
            className="flex transition-all mt-16 w-full no-scrollbar"
          >
            {iterables.map((iterable, index) => (
              <li
                style={{
                  minWidth: `${itemWidth}px`,
                }}
                key={index}
                className="use-poppins"
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
      <div
        style={{
          width: `${itemWidth * visible + (visible - 1) * gap + 100}px`,
        }}
        className="absolute top-[65%] left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-between"
      >
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

        {translateX - (itemWidth + gap) * 2 >
        containerWidth - (iterables.length * itemWidth + gap) ? (
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
    </>
  );
}

import StarRating from "./StarRating";
import { toCurrency } from "../../../utils/transformData";
import { useEffect, useRef, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../icons/Icons";
import CircleButton from "./Buttons/CircleButton";

export default function ScrollableContainer({
  iterables,
  itemWidth,
  gap,
  visible,
  children,
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
    <div className="relative">
      <div
        style={{
          width: `${itemWidth * visible + (visible - 1) * gap + 200}px`,
        }}
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-between"
      >
        {translateX < 0 ? (
          <CircleButton
            onClick={handleScrollLeft}
            icon={<LeftArrowIcon width="1.3em" height="1.3em" />}
          />
        ) : (
          <div></div>
        )}

        {translateX - (itemWidth + gap) * 2 >
        containerWidth - (iterables.length * itemWidth + gap) ? (
          <CircleButton
            onClick={handleScrollRight}
            icon={<RightArrowIcon width="1.3em" height="1.3em" />}
          />
        ) : (
          <div></div>
        )}
      </div>
      <section
        ref={containerRef}
        style={{ width: `${itemWidth * visible + (visible - 1) * gap}px` }}
        className="self-center flex overflow-hidden no-scrollbar relative"
      >
        {iterables.length > 0 && (
          <ul
            style={{
              transform: `translateX(${translateX}px)`,
              gap: `${gap}px`,
            }}
            className="flex transition-all w-full no-scrollbar py-4"
          >
            {iterables.map((iterable, index) =>
              children(iterable, index, itemWidth)
            )}
          </ul>
        )}
      </section>
    </div>
  );
}

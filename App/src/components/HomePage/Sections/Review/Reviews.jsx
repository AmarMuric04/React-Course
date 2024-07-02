import { useRef, useEffect, useState, useContext, useMemo } from "react";
import CircleButton from "../../../Global/Buttons/CircleButton";
import { LeftArrowIcon } from "../../../../icons/Icons";
import Review from "../../../Global/Items/Review";
import { ReviewContext } from "./ReviewSection";

export default function Reviews({ reviews, isScrolled }) {
  const container = useRef();
  const [scrollAmount, setScrollAmount] = useState(0);
  const [listItemHovered, setListItemHovered] = useState(false);

  const { widthOfListItem } = useContext(ReviewContext);

  useEffect(() => {
    if (!container.current) return;

    const widthOfContainer = container.current.offsetWidth;

    const amountScrolled = container.current.scrollLeft;
    const scrollableArea = container.current.scrollWidth;

    /* basically what this shit does is it scrolls on click and when it
    reaches the end aka the last item is visible then we disallow more scrolls */
    setScrollAmount((prevScrollAmount) => {
      if (
        isScrolled === undefined ||
        amountScrolled >= scrollableArea - widthOfContainer
      )
        return prevScrollAmount;

      const newScrollAmount = prevScrollAmount + widthOfListItem + 16;

      container.current.scrollLeft = newScrollAmount;
      return newScrollAmount;
    });
  }, [isScrolled]);

  const handleHoverItem = (isHovering) => setListItemHovered(isHovering);

  const memoizedReviews = useMemo(() => {
    return reviews.map((review, index) => (
      <Review
        onMouseEnter={() => handleHoverItem(true)}
        onMouseLeave={() => handleHoverItem(false)}
        widthOfListItem={widthOfListItem}
        index={index}
        scrollAmount={scrollAmount}
        listItemHovered={listItemHovered}
        review={review}
      />
    ));
  }, [scrollAmount, listItemHovered]);

  return (
    <>
      {scrollAmount !== 0 && (
        <CircleButton
          extraClasses="absolute -left-20 top-1/2 -translate-y-1/2"
          icon={<LeftArrowIcon width="1.3em" height="1.3em" />}
          onClick={() =>
            setScrollAmount((prevScrollAmount) => {
              const newScrollAmount = prevScrollAmount - widthOfListItem - 16;

              container.current.scrollLeft = newScrollAmount;
              return newScrollAmount;
            })
          }
        />
      )}
      <div
        ref={container}
        onScroll={() => setScrollAmount(container.current.scrollLeft)}
        className="w-full overflow-scroll smooth-scrolling no-scrollbar overflow-y-hidden"
      >
        <ul className="flex gap-4 my-8 items-start">{memoizedReviews}</ul>
      </div>
    </>
  );
}

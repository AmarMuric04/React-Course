import { useRef, useEffect, useState, useContext } from "react";

import Review from "@GlobalComponents/Items/Review";
import CircleButton from "@GlobalComponents/Buttons/CircleButton";

import { ReviewContext } from "./ReviewSection";

import { motion } from "framer-motion";

import { LeftArrowIcon } from "@Icons/Icons";

export default function Reviews({ reviews, isScrolled }) {
  const container = useRef();
  const [scrollAmount, setScrollAmount] = useState(0);
  const [listItemHovered, setListItemHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

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
        <motion.ul
          initial="hidden"
          whileInView={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)}
          animate={isInView ? "visible" : ""}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex gap-4 my-8 items-start"
        >
          {reviews.map((review, index) => (
            <Review
              onMouseEnter={() => handleHoverItem(true)}
              onMouseLeave={() => handleHoverItem(false)}
              widthOfListItem={widthOfListItem}
              index={index}
              scrollAmount={scrollAmount}
              listItemHovered={listItemHovered}
              review={review}
            />
          ))}
        </motion.ul>
      </div>
    </>
  );
}

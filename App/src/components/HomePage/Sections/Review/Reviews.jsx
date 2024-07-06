import { useRef, useEffect, useState, useContext, useCallback } from "react";

import Review from "@GlobalComponents/Items/Review";
import CircleButton from "@GlobalComponents/Buttons/CircleButton";

import { ReviewContext } from "./ReviewSection";

import { motion } from "framer-motion";

import { LeftArrowIcon } from "@Icons/Icons";

export default function Reviews({ reviews, translateX, setTranslateX }) {
  const listContainer = useRef();
  const [listItemHovered, setListItemHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const { widthOfListItem, handleSetGap } = useContext(ReviewContext);

  const handleHoverItem = (isHovering) => setListItemHovered(isHovering);

  const reset = useCallback(() => {
    if (!isInView) setTranslateX(0);
  }, [isInView]);

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    if (!listContainer.current) return;

    const computedStyle = getComputedStyle(listContainer.current);
    const gapValue = computedStyle.gap || "0px";
    handleSetGap(gapValue);
  }, []);

  return (
    <>
      {translateX !== 0 && (
        <CircleButton
          extraClasses="absolute top-full -translate-y-1/2"
          icon={<LeftArrowIcon width="1.3em" height="1.3em" />}
          onClick={() =>
            setTranslateX((prevTranslateX) => prevTranslateX + widthOfListItem)
          }
        />
      )}
      <div
        onScroll={() => setScrollAmount(container.current.scrollLeft)}
        className="w-full"
      >
        <motion.ul
          ref={listContainer}
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
          style={{
            transform: `translateX(${translateX}px)`,
          }}
          className="flex gap-4 my-8 items-start transition-all"
        >
          {reviews.map((review, index) => (
            <Review
              onMouseEnter={() => handleHoverItem(true)}
              onMouseLeave={() => handleHoverItem(false)}
              widthOfListItem={widthOfListItem}
              index={index}
              translateX={translateX}
              listItemHovered={listItemHovered}
              review={review}
            />
          ))}
        </motion.ul>
      </div>
    </>
  );
}

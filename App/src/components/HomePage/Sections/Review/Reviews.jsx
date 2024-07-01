import { useRef, useEffect, useState } from "react";
import { LeftArrowIcon } from "../../../../icons/Icons";

export default function Reviews({ reviews, isScrolled }) {
  const listItem = useRef();
  const container = useRef();
  const [widthOfListItem, setWidthOfListItem] = useState(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [listItemHovered, setListItemHovered] = useState(false);

  useEffect(() => {
    if (!listItem.current || !container.current) return;

    const widthOfListItem = listItem.current.offsetWidth;
    const widthOfContainer = container.current.offsetWidth;

    const amountScrolled = container.current.scrollLeft;
    const scrollableArea = container.current.scrollWidth;

    setWidthOfListItem(widthOfListItem);

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
        <button
          onClick={() =>
            setScrollAmount((prevScrollAmount) => {
              const newScrollAmount = prevScrollAmount - widthOfListItem - 16;

              container.current.scrollLeft = newScrollAmount;
              return newScrollAmount;
            })
          }
          className="bg-orange-400 absolute -left-20 top-1/2 -translate-y-1/2 text-white w-12 h-12 rounded-full hover:bg-orange-300 grid place-items-center border-2 border-orange-400 mb-8"
        >
          <LeftArrowIcon height="1.3em" width="1.3em" />
        </button>
      )}
      <div
        ref={container}
        onScroll={() => setScrollAmount(container.current.scrollLeft)}
        className="w-full overflow-scroll smooth-scrolling no-scrollbar overflow-y-hidden"
      >
        <ul className="flex gap-4 my-8 items-start">
          {reviews.map((review, index) => {
            return (
              <li
                onMouseEnter={() => handleHoverItem(true)}
                onMouseLeave={() => handleHoverItem(false)}
                ref={listItem}
                className={`min-w-72 hover:bg-[#141210] hover:text-white h-auto border-[0.1rem] border-gray-400 rounded-md use-poppins shadow-xl p-4 relative transition-all ${
                  !listItemHovered &&
                  scrollAmount + widthOfListItem * 1.5 >
                    widthOfListItem * (index + 1)
                    ? "bg-[#141210] text-white  first:bg-[#141210] first:text-white "
                    : " bg-[#fff5e9]"
                }`}
              >
                <svg
                  className="absolute top-5 right-3 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5em"
                  height="2.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179"
                  />
                </svg>
                <img
                  className="w-12 h-12 rounded-full object-scale-down"
                  src={review.image}
                />
                <p className="font-bold my-4">{review.username}</p>
                <p className="text-sm">{review.comment}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollableContainer from "@GlobalComponents/ScrollableContainer";
import TagItem from "@GlobalComponents/Items/TagItem";

export default function TagList() {
  const [tags, setTags] = useState([]);
  const [showedItems, setShowedItems] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) setShowedItems(6);
      else if (window.innerWidth >= 1280) setShowedItems(5);
      else if (window.innerWidth >= 1024) setShowedItems(4);
      else if (window.innerWidth >= 768) setShowedItems(3);
      else if (window.innerWidth >= 640) setShowedItems(2);
      else setShowedItems(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes/tags");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setTags(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTags();
  }, []);

  return (
    <motion.section
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full flex justify-center items-center mt-5 bg-[#fde7cb] h-[200px]"
    >
      <ScrollableContainer
        iterables={tags}
        itemWidth={140}
        gap={85}
        visible={showedItems}
      >
        {(tag, _, itemWidth) => <TagItem tag={tag} itemWidth={itemWidth} />}
      </ScrollableContainer>
    </motion.section>
  );
}

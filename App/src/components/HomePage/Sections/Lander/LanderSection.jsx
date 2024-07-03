import { useEffect, useState } from "react";

import TagItem from "@GlobalComponents/Items/TagItem";
import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";
import ScrollableContainer from "@GlobalComponents/ScrollableContainer";

import handImg from "/hand.png";

import { motion } from "framer-motion";

import { RightArrowIcon } from "@Icons/Icons";

export default function LanderSection() {
  const [tags, setTags] = useState([]);
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
    <div className="w-full h-screen">
      <div className="relative text-white w-full h-[75%] special-bg pt-48 pl-32">
        <TitleText extraClasses="text-[4rem]">
          Your Go-To Spot for <br /> Quick and{" "}
          <SpecialText>Tasty Eats!</SpecialText>
        </TitleText>
        <ParagraphText extraClasses="text-[1.2rem]">
          Welcome to DineDivine, where every bite is a journey to culinary
          heaven,
          <br /> and every meal is an unforgettable experience of gourmet bliss!
        </ParagraphText>
        <YellowButton
          width="[15rem]"
          text="Order Now"
          icon={<RightArrowIcon width="2em" height="2em" />}
        />
        <img src={handImg} className="absolute right-0 bottom-0 w-[70%]" />
      </div>
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
        className="w-full  flex justify-center items-center mt-5
           bg-[#fde7cb] h-[200px]"
      >
        {tags.length > 0 && (
          <ScrollableContainer
            iterables={tags}
            itemWidth={140}
            gap={85}
            visible={6}
          >
            {(tag, _, itemWidth) => <TagItem tag={tag} itemWidth={itemWidth} />}
          </ScrollableContainer>
        )}
      </motion.section>
    </div>
  );
}

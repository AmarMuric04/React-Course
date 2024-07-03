import React, { useEffect } from "react";
import { useState } from "react";
import handImg from "../../public/hand.png";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer/Footer";
import YellowButton from "../components/Global/Buttons/YellowButton";
import ScrollableContainer from "../components/Global/ScrollableContainer";
import ReviewSection from "../components/HomePage/Sections/Review/ReviewSection";
import ReservationSection from "../components/HomePage/Sections/Reservation/ReservationSection";
import { RightArrowIcon } from "../icons/Icons";
import RecipeItem from "../components/Global/Items/RecipeItem";
import TitleText from "../components/Global/Texts/TitleText";
import SpecialText from "../components/Global/Texts/SpecialText";
import ParagraphText from "../components/Global/Texts/ParagraphText";
import TagItem from "../components/Global/Items/TagItem";
import { motion } from "framer-motion";
import FavoriteSection from "../components/HomePage/Sections/Favorite/FavoriteSection";
import BlogSection from "../components/HomePage/Sections/Blog/BlogSection";
import PreviewRecipesSection from "../components/HomePage/Sections/PreviewRecipes/PreviewRecipesSection";
import InstructionsSection from "../components/HomePage/Sections/Instructions/InstructionsSection";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchRecipes = async (limit, skip, setter) => {
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setter(data.recipes);
        console.log(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

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

    fetchRecipes(20, 0, setRecipes);
    fetchTags();
  }, []);

  let recipeAmount;

  if (window.innerWidth >= 1536) recipeAmount = 4;
  else if (window.innerWidth >= 1280) recipeAmount = 3;
  else if (window.innerWidth >= 1024) recipeAmount = 3;
  else if (window.innerWidth >= 768) recipeAmount = 2;
  else if (window.innerWidth >= 640) recipeAmount = 1;
  else if (window.innerWidth >= 480) recipeAmount = 1;

  return (
    <main className="w-full h-auto flex flex-col items-center overflow-x-hidden">
      <Header />
      <div className="w-full h-screen">
        <div className="relative text-white w-full h-[75%] special-bg pt-48 pl-32">
          <TitleText extraClasses="text-[4rem]">
            Your Go-To Spot for <br /> Quick and{" "}
            <SpecialText>Tasty Eats!</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1.2rem]">
            Welcome to DineDivine, where every bite is a journey to culinary
            heaven,
            <br /> and every meal is an unforgettable experience of gourmet
            bliss!
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
              {(tag, _, itemWidth) => (
                <TagItem tag={tag} itemWidth={itemWidth} />
              )}
            </ScrollableContainer>
          )}
        </motion.section>
      </div>
      <FavoriteSection />
      <div className="lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] relative flex flex-col my-16">
        <div className="flex flex-col items-center">
          <TitleText extraClasses="text-[3rem]">
            Best Selling <SpecialText>Items</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1.2rem] text-center">
            Explore our best selling items, beloved by our patrons for their
            exceptional flavors and exquisite presentation. Each dish showcases
            our commitment to quality and culinary innovation.
          </ParagraphText>
        </div>
        <ScrollableContainer
          iterables={recipes}
          visible={recipeAmount}
          itemWidth={260.6}
          gap={79.2}
        >
          {(recipe, _, itemWidth) => (
            <RecipeItem
              showOrderButton={false}
              recipe={recipe}
              itemWidth={itemWidth}
            />
          )}
        </ScrollableContainer>
      </div>
      <InstructionsSection />
      <PreviewRecipesSection />
      <ReservationSection />
      <ReviewSection />
      <BlogSection />
      <Footer />
    </main>
  );
}

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import handImg from "../../public/hand.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import YellowButton from "../components/Global/Buttons/YellowButton";
import ScrollableContainer from "../components/Global/ScrollableContainer";
import ReviewSection from "../components/HomePage/Sections/Review/ReviewSection";
import ReservationSection from "../components/HomePage/Sections/Reservation/ReservationSection";
import UnderlinedButton from "../components/Global/Buttons/UnderlinedButton";
import { RightArrowIcon, SolidRightArrow } from "../icons/Icons";
import RecipeItem from "../components/Global/Items/RecipeItem";
import InformationCard from "../components/Global/Items/InformationCard";
import TitleText from "../components/Global/Texts/TitleText";
import SpecialText from "../components/Global/Texts/SpecialText";
import ParagraphText from "../components/Global/Texts/ParagraphText";
import TagItem from "../components/Global/Items/TagItem";
import { motion } from "framer-motion";
import FavoriteSection from "../components/HomePage/Sections/Favorite/FavoriteSection";
import SlideAndFadeIn from "../components/Animations/SlideAndFadeIn";
import PostItem from "../components/Global/Items/PostItem";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [secondRecipes, setSecondRecipes] = useState([]);
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
    fetchRecipes(20, 20, setSecondRecipes);
    fetchTags();
  }, []);

  const readMoreBtn = (
    <UnderlinedButton
      text={
        <>
          Read More <SolidRightArrow width="2em" height="2em" />
        </>
      }
      color="yellow"
    />
  );

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
      <div className="w-[1280px] relative flex flex-col my-16">
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
          visible={4}
          itemWidth={260.6}
          gap={79.2}
        >
          {(recipe, _, itemWidth) => (
            <RecipeItem recipe={recipe} itemWidth={itemWidth} />
          )}
        </ScrollableContainer>
      </div>
      <div className="w-full bg-[#fde7cb] py-16 flex justify-center">
        <div className="w-[1280px] flex justify-between gap-10">
          <div className="w-[65%] flex-col items-end">
            <SlideAndFadeIn
              starting="150"
              end="-20"
              className="flex py-4 gap-4"
            >
              <InformationCard
                icon="cooking"
                title="Warm & Enjoy"
                text="Warm & enjoy delicious comfort food that soothes the soul and delights the taste buds. Indulge in hearty soups, savory stews, and decadent desserts."
              />
              <InformationCard
                icon="cloche"
                title="Savour & Replay"
                text="Experience comforting dishes like hearty soups, savory stews, and decadent desserts, each bite offering a nostalgic embrace of comfort and joy."
              />
            </SlideAndFadeIn>
            <SlideAndFadeIn starting="-150" end="0" className="flex py-4 gap-4">
              <InformationCard
                icon="affection"
                title="Delivery Services"
                text="Take a look & experience seamless delivery with our dedicated
                  team ensuring your food arrives fresh, tasty and on time,
                  every single time."
              />
              <InformationCard
                icon="diet"
                title="Organic Food"
                text="Explore our selection of wholesome, amazing, good,
                  farm-to-table goodness, delivering quality organic ingredients
                  directly to your kitchen."
              />
            </SlideAndFadeIn>
          </div>
          <div className="w-[35%]">
            <TitleText extraClasses="text-[3rem]">
              The Choice of <br /> <SpecialText>Customers</SpecialText>
            </TitleText>
            <ParagraphText extraClasses="text-[1.2rem]">
              <p className="use-poppins my-8">
                Our best selling items are the choice of customers who seek
                exceptional flavors and impeccable quality. Each dish is crafted
                with precision, using the finest ingredients to ensure a
                memorable dining experience.
              </p>
            </ParagraphText>
            <YellowButton
              width="[15rem]"
              text="View More"
              icon={<RightArrowIcon width="2em" height="2em" />}
            />
          </div>
        </div>
      </div>
      <div className="w-[1280px] py-16 flex flex-col">
        <section className="w-full h-48 flex justify-between">
          <div className="w-[60%]">
            <TitleText extraClasses="text-[3rem]">
              Handpicked Culinary <br /> <SpecialText>Masterpieces</SpecialText>
            </TitleText>
            <ParagraphText extraClasses="text-[1.2rem]">
              Discover our handpicked culinary masterpieces, each meticulously
              crafted to perfection. These dishes represent the pinnacle of our
              culinary expertise.
            </ParagraphText>
          </div>
          <div className="w-[40%] flex justify-end items-end">
            <YellowButton
              width="[15rem]"
              text="View More"
              icon={<RightArrowIcon width="2em" height="2em" />}
            />
          </div>
        </section>
        <ul className="flex self-center transition-all gap-[79.2px] mt-16  no-scrollbar flex-wrap w-[1280px]">
          {secondRecipes.length > 0 &&
            secondRecipes.splice(0, 8).map((iterable, index) => (
              <li className="flex flex-col">
                <RecipeItem recipe={iterable} itemWidth={260.6} />
                <button className="py-2 px-4 font-bold use-poppins border-2 border-black rounded-full self-start hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all">
                  Order Now
                </button>
              </li>
            ))}
        </ul>
      </div>
      <ReservationSection />
      <ReviewSection />
      <div className="w-[1280px] py-16 mb-32 flex flex-col items-center">
        <TitleText extraClasses="text-[3rem]">
          Our <SpecialText>Blog</SpecialText>
        </TitleText>
        <ParagraphText
          wrapperClasses="items-center justify-center"
          extraClasses="text-[1.2rem] w-[80%] text-center"
        >
          Stay tuned to our blog for the latest culinary trends, delicious
          recipes, and insider tips to elevate your dining experience.
        </ParagraphText>
        <div className="z-50 text-white special-bg2 w-full h-[40rem] p-16 rounded-xl overflow-hidden relative">
          <div className="absolute left-0 top-0 w-full h-full bg-black black-gradient"></div>
          <div className="z-50 absolute">
            <PostItem
              date="29 June, 2024"
              title={
                <>
                  The Palate Pioneer: <br />
                  Navigating the World of Tastes.
                </>
              }
              paragraph="Embark on a journey of flavor exploration, discovering hidden
              culinary treasures from around the globe. Join us as we navigate
              diverse tastes, bringing bold and exciting flavors to your table."
              titleClasses="text-[3rem]"
              paragraphClasses="text-[1.2rem] w-1/2 self-start"
            />
          </div>
        </div>
        <div className="flex w-full gap-20 justify-between mt-12">
          <div className="w-1/2 ">
            <PostItem
              date="June 29, 2024"
              title={
                <>
                  The Culinary Course: <br /> Artistry on a Plate Buffet
                </>
              }
              paragraph="The Culinary Course offers a buffet that is a true artistry on a
              plate. Indulge in a diverse array of meticulously crafted dishes,
              each one a masterpiece designed to tantalize your taste buds and
              delight your senses."
              titleClasses="text-[3rem]"
              paragraphClasses="text[1.2rem]"
            />
          </div>
          <div className="w-1/2 ">
            <PostItem
              date="June 30, 2024"
              title={
                <>
                  Tasting Traditions <br /> A Culinary and Odyssey
                </>
              }
              paragraph="Tasting Traditions invites you on a culinary odyssey, exploring
              the rich and diverse flavors from around the world. Each dish
              tells a story, celebrating the heritage and artistry of global
              cuisines."
              titleClasses="text-[3rem]"
              paragraphClasses="text[1.2rem]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

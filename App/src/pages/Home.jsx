import React, { useEffect } from "react";
import { useState } from "react";
import handImg from "../../public/hand.png";
import Header from "../components/Header";
import OrderButton from "../components/OrderButton";
import ScrollableContainer from "../components/ScrollableContainer";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/recipes?limit=40&skip=4"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setRecipes(data.recipes);
        console.log("Fetched recipes:", data);
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
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRecipes();
    fetchTags();
  }, []);

  return (
    <main className="w-full h-auto flex flex-col items-center">
      <Header />
      <div className="w-full h-screen">
        <div className="relative text-white w-full h-[75%]  special-bg pt-48 pl-32">
          <h1 className="z-50 text-[4.5rem] leading-tight use-playfair">
            Your Go-To Spot for <br /> Quick and{" "}
            <span className="text-yellow-400">Tasty Eats!</span>
          </h1>
          <p className="text-lg mt-4 use-poppins">
            Welcome to DineDivine, where every bite is a journey to culinary
            heaven,
            <br /> and every meal is an unforgettable experience of gourmet
            bliss!
          </p>
          <OrderButton />
          <img src={handImg} className="absolute right-0 bottom-0 w-[60%]" />
        </div>
        {tags.length > 0 && (
          <ul className="px-32 use-poppins flex items-center text-lg overflow-x-scroll no-scrollbar w-full gap-3 h-[25%]">
            {tags.map((tag) => (
              <li key={tag} className="whitespace-nowrap">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full flex px-[20rem] py-32 justify-between">
        <img
          className="w-[24rem] h-[30rem] rounded-lg skew-x-1 shadow-xl object-cover"
          src="https://img.freepik.com/premium-photo/burger-with-flying-ingredients-black-background-fast-food-concept_843762-1629.jpg?w=826"
        />
        <div className="flex flex-col gap-2 py-16 w-1/2">
          <h1 className="use-playfair text-[3rem] leading-tight">
            Captivating Culinary <br />{" "}
            <span className="text-yellow-400">Favorites</span>
          </h1>
          <p className="use-poppins mt-4">
            Welcome to a culinary paradise, where every bite is an unforgettable
            journey. Discover captivating favorites, crafted with fresh
            ingredients and innovative flavors. Each dish is a feast for the
            eyes and palate, making every moment truly divine.
          </p>
          <div className="flex gap-3 items-center mt-8">
            <OrderButton />

            <p className="text-yellow-400 hover:underline cursor-pointer text-lg">
              Check your favorites
            </p>
          </div>
        </div>
      </div>
      <div className="w-full relative flex flex-col my-16">
        <div className="flex flex-col items-center">
          <h1 className="use-playfair text-[3rem] font-bold">
            Best Selling <span className="text-yellow-400">Items</span>
          </h1>
          <p className="w-[50%] mt-4 mb-8 use-poppins text-center">
            Explore our best selling items, beloved by our patrons for their
            exceptional flavors and exquisite presentation. Each dish showcases
            our commitment to quality and culinary innovation.
          </p>
        </div>
        <ScrollableContainer iterables={recipes} />
      </div>
      <div className=""></div>
    </main>
  );
}

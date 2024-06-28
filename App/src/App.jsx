import React, { useEffect } from "react";
import { useState } from "react";
import handImg from "../public/hand.png";
import { toCurrency } from "../utils/transformData";
import StarRating from "../components/StarRating";
import Header from "../components/Header";
import OrderButton from "../components/OrderButton";

const appId = "5b98e15c";
const appKey = "c545ae4e7476756e51999a9c36bbe4ac";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/recipes?limit=30&skip=20"
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
              <li className="whitespace-nowrap">{tag}</li>
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
        {recipes.length > 0 && (
          <ul className="flex overflow-scroll gap-20 mt-16 w-2/3 self-center no-scrollbar">
            {recipes.map((recipe) => (
              <li className="use-poppins min-w-60">
                <img className="w-full" src={recipe.image} />
                <p className="font-bold text-sm my-2 w-full truncate">
                  {recipe.name}
                </p>
                <StarRating rating={recipe.rating}></StarRating>
                {recipe.reviewCount > 0 ? (
                  <p className="font-bold text-sm my-2">
                    {toCurrency(recipe.reviewCount - 0.01) + " EUR"}
                  </p>
                ) : (
                  <p className="font-bold text-sm my-2">FREE</p>
                )}
              </li>
            ))}
          </ul>
        )}
        <div className="absolute top-[65%] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[75%] flex justify-between">
          <button className="w-12 h-12 rounded-full bg-yellow-200 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.122 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122l-5.66-5.658Z"
                />
              </g>
            </svg>
          </button>
          <button className="w-12 h-12 rounded-full bg-yellow-200 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;

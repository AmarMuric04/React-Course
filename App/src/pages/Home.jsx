import React, { useEffect } from "react";
import { useState } from "react";
import handImg from "../../public/hand.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderButton from "../components/OrderButton";
import ScrollableContainer from "../components/ScrollableContainer";
import StarRating from "../components/StarRating";
import { toCurrency } from "../../utils/transformData";
import ReviewSection from "../components/ReviewSection";
import ReservationSection from "../components/ReservationSection";

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

    fetchRecipes(20, 0, setRecipes);
    fetchRecipes(20, 20, setSecondRecipes);
    fetchTags();
  }, []);

  return (
    <main className="w-full h-auto flex flex-col">
      <Header />
      <div className="w-full h-screen">
        <div className="relative text-white w-full h-[75%]  special-bg pt-48 pl-32">
          <h1 className="z-50 font-bold text-[4.5rem] leading-tight use-playfair">
            Your Go-To Spot for <br /> Quick and{" "}
            <span className="text-green-400">Tasty Eats!</span>
          </h1>
          <p className="text-lg mt-4 use-poppins my-8">
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
      <div className="w-full flex py-32 px-48 justify-center gap-40">
        <img
          className="w-[24rem] h-[30rem] rounded-lg skew-x-1 shadow-xl object-cover"
          src="https://img.freepik.com/premium-photo/burger-with-flying-ingredients-black-background-fast-food-concept_843762-1629.jpg?w=826"
        />
        <div className="flex flex-col gap-2 py-16 w-[30%]">
          <h1 className="use-playfair font-bold text-[3rem] leading-tight">
            Captivating Culinary <br />{" "}
            <span className="text-green-400">Favorites</span>
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
      <div className="w-full relative px-48 flex flex-col my-16">
        <div className="flex flex-col items-center">
          <h1 className="use-playfair text-[3rem] font-bold">
            Best Selling <span className="text-green-400">Items</span>
          </h1>
          <p className="w-[50%] mt-4 mb-8 use-poppins text-center my-8">
            Explore our best selling items, beloved by our patrons for their
            exceptional flavors and exquisite presentation. Each dish showcases
            our commitment to quality and culinary innovation.
          </p>
        </div>
        <ScrollableContainer
          iterables={recipes}
          visible={4}
          itemWidth={276}
          gap={11.2}
        />
      </div>
      <div className="bg-[#fde7cb] px-48 py-16 flex gap-10 justify-center w-full">
        <div className="w-[65%] flex-col items-end">
          <div className="flex py-4 gap-4 translate-x-[-1rem] justify-end">
            <div className="w-64 h-40 border-[0.1rem] border-gray-400 bg-white shadow-xl"></div>
            <div className="w-64 h-40 border-[0.1rem] border-gray-400 bg-white shadow-xl"></div>
          </div>
          <div className="flex py-4 gap-4 justify-end">
            <div className="w-64 h-40 border-[0.1rem] border-gray-400 bg-white shadow-xl"></div>
            <div className="w-64 h-40 border-[0.1rem] border-gray-400 bg-white shadow-xl"></div>
          </div>
        </div>
        <div className="w-[35%]">
          <h1 className="use-playfair leading-tight text-[3rem] font-bold">
            The Choice of <br />{" "}
            <span className="text-green-400">Customers</span>
          </h1>
          <p className="use-poppins my-8">
            Our best selling items are the choice of customers who seek
            exceptional flavors and impeccable quality. Each dish is crafted
            with precision, using the finest ingredients to ensure a memorable
            dining experience.
          </p>
          <OrderButton />
        </div>
      </div>
      <div className="px-48 py-16 flex flex-col">
        <section className="w-full h-48 flex justify-between">
          <div className="w-[60%]">
            <h1 className="use-playfair leading-tight text-[3rem] font-bold">
              Handpicked Culinary <br />{" "}
              <span className="text-green-400">Masterpieces</span>
            </h1>
            <p className="use-poppins">
              Discover our handpicked culinary masterpieces, each meticulously
              crafted to perfection. These dishes represent the pinnacle of our
              culinary expertise.
            </p>
          </div>
          <div className="w-[40%] flex justify-end items-end">
            <OrderButton />
          </div>
        </section>
        <ul className="flex self-center transition-all gap-[0.7rem] mt-16  no-scrollbar flex-wrap w-[66.1rem]">
          {secondRecipes.length > 0 &&
            secondRecipes.splice(0, 8).map((iterable, index) => (
              <li
                key={index}
                className="mb-8 use-poppins w-[16rem] min-w-[16rem]"
              >
                <div className="w-full h-[18rem] bg-white grid place-items-center">
                  <img
                    className="w-[95%] h-[95%] object-cover"
                    src={iterable.image}
                  />
                </div>
                <p className="font-bold text-sm my-2 w-full truncate">
                  {iterable.name}
                </p>
                <StarRating rating={iterable.rating}></StarRating>
                {iterable.reviewCount > 0 ? (
                  <p className="tracking-[0.1rem] text-md my-2">
                    {toCurrency(iterable.reviewCount - 0.01) + " EUR"}
                  </p>
                ) : (
                  <p className="tracking-[0.1rem] text-md my-2">FREE</p>
                )}
                <button className="py-[0.4rem] px-3 rounded-full border-[0.1rem] border-black text-sm hover:bg-gray-200 transition-all font-bold">
                  Order now
                </button>
              </li>
            ))}
        </ul>
      </div>
      <ReservationSection />
      <ReviewSection />
      <div className="px-48 py-16 flex flex-col items-center w-full">
        <h1 className="text-center use-playfair text-[3rem] font-bold leading-tight">
          Our <span className="text-green-400">Blog</span>
        </h1>
        <p className="use-poppins text-center w-[60%] my-8">
          Stay tuned to our blog for the latest culinary trends, delicious
          recipes, and insider tips to elevate your dining experience.
        </p>
        <div className="z-50 text-white special-bg2 w-full h-[40rem] p-16 rounded-xl overflow-hidden relative">
          <div className="absolute left-0 top-0 w-full h-full bg-black black-gradient"></div>
          <div className="z-50 absolute">
            <p className="use-poppins text-xl mb-4">June 30, 2024</p>
            <h1 className="use-playfair text-[3rem] leading-tight font-bold">
              The Palate Pioneer: <br />
              Navigating the World of Tastes.
            </h1>
            <p className="use-poppins w-1/2 my-8">
              Embark on a journey of flavor exploration, discovering hidden
              culinary treasures from around the globe. Join us as we navigate
              diverse tastes, bringing bold and exciting flavors to your table.
            </p>
            <OrderButton />
          </div>
        </div>
        <div className="flex w-full gap-20 justify-between mt-12">
          <div className="w-1/2 ">
            <p className="text-sm use-poppins mb-4">June 29, 2024</p>
            <h1 className="text-[2rem] use-playfair font-bold leading-tight">
              The Culinary Course: <br /> Artistry on a Plate Buffet
            </h1>
            <p className="use-poppins mt-4 mb-8">
              The Culinary Course offers a buffet that is a true artistry on a
              plate. Indulge in a diverse array of meticulously crafted dishes,
              each one a masterpiece designed to tantalize your taste buds and
              delight your senses.
            </p>
            <OrderButton />
          </div>{" "}
          <div className="w-1/2 ">
            <p className="text-sm use-poppins mb-4">June 30, 2024</p>
            <h1 className="text-[2rem] use-playfair font-bold leading-tight">
              Tasting Traditions <br /> A Culinary and Odyssey
            </h1>
            <p className="use-poppins mt-4 mb-8">
              Tasting Traditions invites you on a culinary odyssey, exploring
              the rich and diverse flavors from around the world. Each dish
              tells a story, celebrating the heritage and artistry of global
              cuisines.
            </p>
            <OrderButton />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

import PostItem from "@GlobalComponents/Items/PostItem";
import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";

import BlogImage from "./BlogImage";

export default function BlogSection() {
  return (
    <div className="w-[98%] xl:w-[1024px] 2xl:w-[1280px] py-16 mb-32 flex flex-col items-center">
      <TitleText extraClasses="text-[2rem] lg:text-[3rem]">
        Our <SpecialText>Blog</SpecialText>
      </TitleText>
      <ParagraphText
        wrapperClasses="items-center justify-center"
        extraClasses="text-[1rem] lg:text-[1.2rem] w-[80%] text-center"
      >
        Stay tuned to our blog for the latest culinary trends, delicious
        recipes, and insider tips to elevate your dining experience.
      </ParagraphText>
      <BlogImage />
      <div className="flex w-full gap-20 justify-between mt-12 flex-col items-center xl:flex-row xl:items-start">
        <div className="w-full md:w-1/2 ">
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
            titleClasses="text-[2rem] lg:text-[3rem]"
            paragraphClasses="text-[1rem] lg:text-[1.2rem]"
          />
        </div>
        <div className="w-full md:w-1/2 ">
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
            titleClasses="text-[2rem] lg:text-[3rem]"
            paragraphClasses="text-[1rem] lg:text-[1.2rem]"
          />
        </div>
      </div>
    </div>
  );
}

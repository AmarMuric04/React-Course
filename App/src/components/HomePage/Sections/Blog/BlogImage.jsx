import PostItem from "@GlobalComponents/Items/PostItem";

import Increase from "@Animations/Increase";

export default function BlogImage() {
  return (
    <Increase
      startingHeight="20rem"
      endingHeight="40rem"
      startingWidth="50%"
      endingWidth="100%"
      className="z-50 text-white special-bg2 w-full py-8 md:p-16 rounded-xl o verflow-hidden relative overflow-hidden"
    >
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
          paragraphClasses="text-[1.2rem] w-[80%] xl:w-1/2"
          wrapperClasses="justify-center"
        />
      </div>
    </Increase>
  );
}

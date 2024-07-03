import { useState } from "react";
import { motion } from "framer-motion";
import PostItem from "../../../Global/Items/PostItem";

export default function BlogImage() {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      whileInView={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      variants={{
        hidden: {
          width: "50%",
          height: "20rem",
        },
        visible: {
          width: "100%",
          height: "40rem",
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        type: "spring",
      }}
      className="z-50 text-white special-bg2 w-full p-16 rounded-xl overflow-hidden relative"
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
          paragraphClasses="text-[1.2rem] w-1/2 self-start"
        />
      </div>
    </motion.div>
  );
}

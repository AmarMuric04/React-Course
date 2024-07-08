import { useState, useEffect } from "react";

import handImg from "/hand.png";

export default function HandImage() {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setShowImage(true);
      else setShowImage(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", () => {});
  }, []);

  return (
    <>
      {showImage && (
        <img
          src={handImg}
          className="absolute right-0 bottom-0 max-w-[70rem] w-[70%] z-0"
        />
      )}
    </>
  );
}

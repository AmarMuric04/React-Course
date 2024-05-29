import { useState } from "react";
import { LoaderIcon } from "../assets/icons";

export default function ImageLoader({ image, className, svgSize }) {
  const [isLoading, setIsLoading] = useState(true);

  function handleImageLoaded() {
    setIsLoading(false);
  }

  setTimeout(() => {
    handleImageLoaded();
  }, 1500);

  return (
    <>
      {isLoading && <LoaderIcon size={svgSize} />}
      <img
        src={image}
        className={className}
        onLoad={handleImageLoaded}
        alt="..."
      />
    </>
  );
}

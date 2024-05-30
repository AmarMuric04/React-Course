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
    <main className="relative grid place-items-center w-full h-full">
      {isLoading && (
        <LoaderIcon
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          size={svgSize}
        />
      )}
      <img
        src={image}
        className={className}
        onLoad={handleImageLoaded}
        alt="..."
      />
    </main>
  );
}

import { useState } from "react";

const MagnifyingGlass = ({ imageSrc }) => {
  const [magnifierStyle, setMagnifierStyle] = useState({ display: "none" });

  const handleMouseMove = (e) => {
    const { top, left, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    const backgroundX = -((x / width) * 100 - 100);
    const backgroundY = -((y / height) * 100 - 100);

    setMagnifierStyle({
      display: "block",
      left: `${x - 50}px`, // 50 is half the width/height of the magnifier
      top: `${y - 50}px`,
      backgroundImage: `url(${imageSrc})`,
      backgroundPosition: `${backgroundX}% ${backgroundY}%`,
    });
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({ display: "none" });
  };

  return (
    <div
      className="img-container w-full h-full grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt="Zoom" className="zoom-img h-64" />
      <div className="magnifier" style={magnifierStyle}></div>
    </div>
  );
};

export default MagnifyingGlass;

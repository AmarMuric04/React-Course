import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        key={i + 1}
      >
        <path
          fill="currentColor"
          fill-opacity="0"
          stroke="currentColor"
          stroke-dasharray="32"
          stroke-dashoffset="32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="32;0"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.5s"
            dur="0.5s"
            values="0;1"
          />
        </path>
      </svg>
    );
  }

  return <span className="flex gap-[0.1rem] text-yellow-400 m-0">{stars}</span>;
};

export default StarRating;

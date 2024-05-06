import { useState } from "react";
import { Link } from "react-router-dom";

export default function CryptoAction({
  width,
  firstText,
  secondText,
  firstHash,
  secondHash,
}) {
  const [buyIsHovered, setBuyIsHovered] = useState(false);
  const [sellIsHovered, setSellIsHovered] = useState(false);

  function handleHoverBuy() {
    setBuyIsHovered(true);
  }

  function handleNoHoverBuy() {
    setBuyIsHovered(false);
  }

  function handleHoverSell() {
    setSellIsHovered(true);
  }

  function handleNoHoverSell() {
    setSellIsHovered(false);
  }

  return (
    <li className={`${width} flex relative justify-center`}>
      <div className="absolute top-[-0.5rem] left-0 hover:showtext">
        <Link to={`${firstHash}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            className="hover:text-green-400 hover:scale-[1.2] transition-all"
            onMouseOver={handleHoverBuy}
            onMouseLeave={handleNoHoverBuy}
          >
            <defs>
              <mask id="ipSBuy0">
                <g fill="none" stroke-width="4">
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    stroke="#fff"
                    stroke-linejoin="round"
                    d="M6 15h36l-2 27H8z"
                    clip-rule="evenodd"
                  />
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 19V6h16v13"
                  />
                  <path stroke="#000" stroke-linecap="round" d="M16 34h16" />
                </g>
              </mask>
            </defs>
            <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBuy0)" />
          </svg>
        </Link>
        <p
          className={`absolute text-xs right-[130%] text-nowrap bg-[#1A1C22ff] px-2 py-1 rounded-md shadow-lg top-0 ${
            buyIsHovered ? "inline-block" : "hidden"
          }`}
        >
          {firstText}
        </p>
      </div>
      /
      <div className="absolute bottom-[-0.5rem] right-0">
        <Link to={`${secondHash}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className=" hover:text-red-400 hover:scale-[1.2] transition-all cursor-pointer"
            title="hello"
            onMouseOver={handleHoverSell}
            onMouseLeave={handleNoHoverSell}
          >
            <path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12 2c1.399 0 2.59 0 3.612.038a4.5 4.5 0 0 0 6.35 6.35C22 9.41 22 10.601 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2m2.5 11.25a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v.69l-2.013-2.013a1.75 1.75 0 0 0-2.474 0l-1.586 1.586a.25.25 0 0 1-.354 0L7.53 9.47a.75.75 0 0 0-1.06 1.06l2.293 2.293a1.75 1.75 0 0 0 2.474 0l1.586-1.586a.25.25 0 0 1 .354 0l2.012 2.013z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
        <p
          className={`absolute text-xs left-[130%] bg-[#1A1C22ff] px-2 py-1 rounded-md shadow-lg top-0 ${
            sellIsHovered ? "inline-block" : "hidden"
          }`}
        >
          {secondText}
        </p>
      </div>
    </li>
  );
}

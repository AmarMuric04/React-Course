import { useContext, useState } from "react";
import { CryptoContext } from "../store/crypto-context";
export default function Crypto({ coin }) {
  const {
    favoriteCryptos,
    handleFormatNumber,
    addFavorite,
    buyCoin,
    handlePreventDefault,
  } = useContext(CryptoContext);

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

  const coinRank = coin.rank;
  const coinSymbol = coin.symbol;
  const coinName =
    coin.id.slice(0, 1).toUpperCase() +
    coin.id.slice(1, coin.id.length).replace("-", " ");
  const coinValue = Number(coin.priceUsd).toFixed(2);
  const coinMarketCap = handleFormatNumber(
    Number(coin.marketCapUsd).toFixed(0)
  );
  const changeInLast24Hours = Number(coin.changePercent24Hr).toFixed(2);
  const volumeInLast24Hours = handleFormatNumber(
    Number(coin.volumeUsd24Hr).toFixed(0)
  );

  return (
    <a key={coin.id} href={`${coin.explorer}`} onClick={handlePreventDefault}>
      <ul className="preventdefault flex items-center bg-white py-8 text-2xl pr-16 pl-8 rounded-xl relative hover:scale-[1.02] transition-all delay-50 gap-24">
        <li className="w-16">
          {favoriteCryptos.includes(coin) ? (
            <svg
              onClick={() => addFavorite(coin)}
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"
              />
            </svg>
          ) : (
            <svg
              onClick={() => addFavorite(coin)}
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.68 334.68 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"
              />
            </svg>
          )}
        </li>
        <li className="w-3 font-normal absolute bottom-2 left-2 text-sm">
          {coinRank}.
        </li>
        <li className="w-60">
          <span className="">{coinName} </span>(
          <span className="font-extrabold text-lg">{coinSymbol}</span>)
        </li>
        <li className="w-32">{coinValue}$</li>
        <li className="w-32"> {coinMarketCap}$</li>
        <li className="w-20">{volumeInLast24Hours}$</li>
        <li
          className={`w-32 flex items-center justify-end gap-2 ${
            changeInLast24Hours < -0.2 && "text-red-400"
          }  ${changeInLast24Hours > 0.2 && "text-green-400"} ${
            changeInLast24Hours >= -0.2 &&
            changeInLast24Hours <= 0.2 &&
            "text-stone-500"
          }`}
        >
          {changeInLast24Hours}%{" "}
          {changeInLast24Hours >= -0.2 && changeInLast24Hours <= 0.2 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8 18h3v-3H2v-2h20v2h-9v3h3l-4 4zm4-16L8 6h3v3H2v2h20V9h-9V6h3z"
              />
            </svg>
          )}
          {changeInLast24Hours < -0.2 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.03 13.92h4V5l2.01-.03v8.95h3.99l-5 5Z"
              />
            </svg>
          )}
          {changeInLast24Hours > 0.2 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.03 9.97h4v8.92l2.01.03V9.97h3.99l-5-5Z"
              />
            </svg>
          )}
        </li>
        <li className="w-16 flex relative justify-center">
          <div className="absolute top-[-0.5rem] left-0 hover:showtext">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
              className="hover:text-green-400 hover:scale-[1.2] transition-all"
              onMouseOver={handleHoverBuy}
              onMouseLeave={handleNoHoverBuy}
              onClick={() => buyCoin(coin)}
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
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSBuy0)"
              />
            </svg>
            <p
              className={`absolute text-xs right-[130%] bg-stone-200 px-2 py-1 rounded-md shadow-lg top-0 ${
                buyIsHovered ? "inline-block" : "hidden"
              }`}
            >
              Buy
            </p>
          </div>
          /
          <div className="absolute bottom-[-0.5rem] right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className=" hover:text-red-400 hover:scale-[1.2] transition-all"
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
            <p
              className={`absolute text-xs left-[130%] bg-stone-200 px-2 py-1 rounded-md shadow-lg top-0 ${
                sellIsHovered ? "inline-block" : "hidden"
              }`}
            >
              Short
            </p>
          </div>
        </li>
      </ul>
    </a>
  );
}

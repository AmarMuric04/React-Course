import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";

import Crypto from "./Crypto";

export default function Performers({ type }) {
  const { _mainCoinsList, coinFilter, handleFilterCoins } =
    useContext(CryptoContext);

  const newCoins = [..._mainCoinsList];
  let coins = [];

  coins =
    type === "bp"
      ? newCoins.filter((coin) => Number(coin.changePercent24Hr) < -0.2)
      : newCoins.filter((coin) => Number(coin.changePercent24Hr) > 0.2);

  coins = handleFilterCoins(coinFilter, coins);

  return (
    <ul className="flex flex-col gap-3">
      {coins.length === 0 ? (
        <div className="text-4xl text-center md:m-8 w-full h-96 grid place-items-center">
          {type === "bp" ? (
            <div className="border-[0.1rem] border-[#23272Eff] rounded-xl w-[95%] md:w-96 h-full flex flex-col items-center justify-between gap-3 pb-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
                className="text-green-400"
              >
                <mask id="lineMdEmojiGrin0">
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M8 14C8.5 15.5 9.79086 17 12 17C14.2091 17 15.5 15.5 16 14M8 14C9 14.5 10 15 12 15C14 15 15 14.5 16 14"
                  />
                </mask>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-dasharray="60"
                  stroke-dashoffset="60"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.5s"
                    values="60;0"
                  />
                </path>
                <g fill="currentColor">
                  <rect
                    width="0"
                    height="7"
                    x="6"
                    y="12"
                    mask="url(#lineMdEmojiGrin0)"
                  >
                    <animate
                      fill="freeze"
                      attributeName="width"
                      begin="1s"
                      dur="0.2s"
                      values="0;12"
                    />
                  </rect>
                  <ellipse cx="9" cy="9.5" fill-opacity="0" rx="1" ry="1.5">
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.6s"
                      dur="0.2s"
                      values="0;1"
                    />
                  </ellipse>
                  <ellipse cx="15" cy="9.5" fill-opacity="0" rx="1" ry="1.5">
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.8s"
                      dur="0.2s"
                      values="0;1"
                    />
                  </ellipse>
                </g>
              </svg>
              <p className="text-2xl">The market is doing great today!</p>
              <p className="text-lg text-gray-400">
                Hopefully you had some coins stacked up in your wallet!
              </p>
            </div>
          ) : (
            <div className="border-[0.1rem] border-[#23272Eff] rounded-xl w-96 md:w-96 h-full flex flex-col items-center justify-between gap-3 pb-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
                className="text-red-400"
              >
                <mask id="lineMdEmojiFrownOpen0">
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M8.5 16C9 15 10 14 12 14C14 14 15 15 15.5 16M8.5 16C9.5 15.5 11 15.5 12 15.5C13 15.5 14.5 15.5 15.5 16"
                  />
                </mask>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-dasharray="60"
                  stroke-dashoffset="60"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.5s"
                    values="60;0"
                  />
                </path>
                <g fill="currentColor">
                  <rect
                    width="0"
                    height="7"
                    x="6"
                    y="12"
                    mask="url(#lineMdEmojiFrownOpen0)"
                  >
                    <animate
                      fill="freeze"
                      attributeName="width"
                      begin="1s"
                      dur="0.2s"
                      values="0;12"
                    />
                  </rect>
                  <ellipse cx="9" cy="9.5" fill-opacity="0" rx="1" ry="1.5">
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.6s"
                      dur="0.2s"
                      values="0;1"
                    />
                  </ellipse>
                  <ellipse cx="15" cy="9.5" fill-opacity="0" rx="1" ry="1.5">
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.8s"
                      dur="0.2s"
                      values="0;1"
                    />
                  </ellipse>
                </g>
              </svg>
              <p className="text-2xl">The market is not having a good day!</p>
              <p className="text-lg text-gray-400">
                This is the perfect time to grab some more coins and stack your
                wallet though!
              </p>
            </div>
          )}
        </div>
      ) : (
        coins.map((coin) => <Crypto key={coin.id} coin={coin} />)
      )}
    </ul>
  );
}

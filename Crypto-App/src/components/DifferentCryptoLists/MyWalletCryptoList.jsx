import { useContext } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowHorizontalIcon,
} from "../../assets/icons";
import { CryptoContext } from "../../store/crypto-context";

import CryptoAction from "../Single Components/CryptoAction";

export default function MyWalletCryptoList() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);

  let walletCryptos;

  if (userAccount) walletCryptos = [...userAccount.wallet];

  if (!userAccount)
    return (
      <div className="text-4xl text-center md:m-8 w-full h-96 grid place-items-center">
        <div className="border-[0.1rem] border-[#23272Eff] rounded-xl w-[95%] md:w-96 h-full flex flex-col items-center justify-between gap-3 pb-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
            className="text-red-400 m-8"
          >
            <mask id="lineMdPersonOffTwotone0">
              <g
                fill="#fff"
                fill-opacity="0"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="20"
                  stroke-dashoffset="20"
                  d="M12 5C13.66 5 15 6.34 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="20;0"
                  />
                </path>
                <path
                  stroke-dasharray="36"
                  stroke-dashoffset="36"
                  d="M12 14C16 14 19 16 19 17V19H5V17C5 16 8 14 12 14z"
                  opacity="0"
                >
                  <set attributeName="opacity" begin="0.5s" to="1" />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.4s"
                    values="36;0"
                  />
                </path>
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.9s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </g>
              <g
                fill="none"
                stroke-dasharray="26"
                stroke-dashoffset="26"
                stroke-linecap="round"
                stroke-width="2"
                transform="rotate(45 12 12)"
              >
                <path stroke="#000" d="M0 11h24" />
                <path stroke="#fff" d="M1 13h22" />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="1.1s"
                  dur="0.2s"
                  values="26;0"
                />
              </g>
            </mask>
            <rect
              width="24"
              height="24"
              fill="currentColor"
              mask="url(#lineMdPersonOffTwotone0)"
            />
          </svg>
          <div className="flex flex-col gap-2">
            <p>Not Logged In!</p>
            <p className="text-sm text-gray-400 px-8">
              <Link to="/buy-crypto">Log in</Link> and start your own crypto
              journey!
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <ul className="flex flex-col gap-3">
      {walletCryptos.length === 0 ? (
        <div className="text-4xl text-center md:m-8 w-full h-96 grid place-items-center">
          <div className="border-[0.1rem] border-[#23272Eff] rounded-xl w-[95%] md:w-96 h-full flex flex-col items-center justify-between gap-3 pb-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
              className="m-8"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="20"
                  stroke-dashoffset="20"
                  d="M5 21V20C5 17.7909 6.79086 16 9 16H13C15.2091 16 17 17.7909 17 20V21"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="20;0"
                  />
                </path>
                <path
                  stroke-dasharray="20"
                  stroke-dashoffset="20"
                  d="M11 13C9.34315 13 8 11.6569 8 10C8 8.34315 9.34315 7 11 7C12.6569 7 14 8.34315 14 10C14 11.6569 12.6569 13 11 13Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.4s"
                    values="20;0"
                  />
                </path>
                <path stroke-dasharray="6" stroke-dashoffset="6" d="M20 3V7">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1s"
                    dur="0.2s"
                    values="6;0"
                  />
                  <animate
                    attributeName="stroke-width"
                    begin="1.5s"
                    dur="3s"
                    keyTimes="0;0.1;0.2;0.3;1"
                    repeatCount="indefinite"
                    values="2;3;3;2;2"
                  />
                </path>
              </g>
              <circle
                cx="20"
                cy="11"
                r="1"
                fill="currentColor"
                fill-opacity="0"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.2s"
                  dur="0.4s"
                  values="0;1"
                />
                <animate
                  attributeName="r"
                  begin="1.8s"
                  dur="3s"
                  keyTimes="0;0.1;0.2;0.3;1"
                  repeatCount="indefinite"
                  values="1;2;2;1;1"
                />
              </circle>
            </svg>
            <div className="flex flex-col gap-2">
              <p>Your wallet is empty!</p>
              <p className="text-sm text-gray-400 px-8">
                <Link to="/buy-crypto">Buy some coins</Link> when you feel like
                it's the best time to do so!
              </p>
            </div>
          </div>
        </div>
      ) : (
        walletCryptos.map((coin) => {
          const coinName =
            coin.id.slice(0, 1).toUpperCase() +
            coin.id.slice(1, coin.id.length).replace("-", " ");

          const newCoin = _mainCoinsList.find((item) => item.id === coin.id);

          const percentageChange = handleCustomToFixed(
            ((newCoin.priceUsd - coin.purchasedPrice) / coin.purchasedPrice) *
              100
          );

          return (
            <ul
              className="preventdefault flex items-center py-4 md:py-8 text-xs md:text-2xl px-2 md:pr-16 md:pl-8 rounded-xl relative hover:bg-[#23272Eff] transition-all delay-50 gap-2 md:gap-24 justify-between md:justify-start"
              key={coin.id}
            >
              <li className="w-1/6">
                <span className="">{coinName} </span>(
                <span className="font-extrabold text-[0.5rem] md:text-lg">
                  {newCoin.symbol}
                </span>
                )
              </li>
              <li className="w-16 md:w-1/6 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                $ {handleCustomToFixed(coin.purchasedPrice)}
              </li>
              <li className="w-8 md:w-1/6 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                {handleCustomToFixed(coin.amountOfCoins)}
              </li>
              <li className="w-1/6 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                $ {handleCustomToFixed(coin.moneySpent)}
              </li>
              <li
                className={`w-16 md:w-1/6 flex items-center md:gap-2 overflow-hidden truncate whitespace-nowrap ${
                  percentageChange < -0.2 && "text-red-400"
                } ${percentageChange > 0.2 && "text-green-400"} ${
                  percentageChange >= -0.2 &&
                  percentageChange <= 0.2 &&
                  "text-stone-500"
                }`}
              >
                {percentageChange}%{" "}
                {percentageChange < -0.2 && <ArrowDownIcon svgSize="1.7" />}
                {percentageChange > 0.2 && <ArrowUpIcon svgSize="1.7" />}
                {percentageChange >= -0.2 && percentageChange <= 0.2 && (
                  <ArrowHorizontalIcon svgSize="1.7" />
                )}{" "}
              </li>
              <CryptoAction
                firstText="Buy more"
                secondText="Sell"
                width="w-10 md:w-20"
                firstHash={`/crypto-list/${coin.id}`}
                secondHash={`/sell-crypto`}
              />
            </ul>
          );
        })
      )}
    </ul>
  );
}

import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";
import { Link } from "react-router-dom";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowHorizontalIcon,
} from "../assets/icons";

export default function TransactionsList() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);

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
    <>
      {userAccount.purchaseHistory.length === 0 ? (
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
              <p>No purchase history!</p>
              <p className="text-sm text-gray-400 px-8">
                <Link to="/buy-crypto">Buy some coins</Link> when you feel like
                it's the best time to do so!
              </p>
            </div>
          </div>
        </div>
      ) : (
        userAccount.purchaseHistory.map((coin) => {
          let actualCoin = _mainCoinsList.find(
            (mainCoin) => mainCoin.id === coin.first
          );
          let secondActualCoin = _mainCoinsList.find(
            (mainCoin) => mainCoin.id === coin.second
          );

          if (coin.second === "CASH") secondActualCoin = "CASH";
          if (coin.first === "CASH") actualCoin = "CASH";

          console.log(actualCoin, coin);

          return (
            <ul
              className="flex gap-2 md:gap-5 py-4 md:px-2 rounded-lg hover:bg-[#23272Eff] transition-all text-xs md:text-md items-center"
              key={coin.id}
            >
              <li className="w-32 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap flex items-center">
                <span
                  className={`py-1 px-2 rounded-md ${
                    coin.type === "BOUGHT" && "text-green-200 bg-green-800"
                  }
                  ${coin.type === "SOLD" && "text-red-200 bg-red-800"}
                  ${coin.type === "TRADED" && "text-yellow-200 bg-yellow-800"}`}
                >
                  {coin.type}
                </span>
              </li>
              <li className="w-32 text-nowrap">
                {actualCoin === "CASH" ? actualCoin : actualCoin.symbol} to{" "}
                {secondActualCoin === "CASH"
                  ? secondActualCoin
                  : secondActualCoin.symbol}
              </li>
              <li className="w-32 md:w-48 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                {coin.type !== "SOLD"
                  ? handleCustomToFixed(coin.amountOfCoins)
                  : handleCustomToFixed(Number(coin.moneyChange))}{" "}
                {coin.type === "BOUGHT" && secondActualCoin.symbol}
                {coin.type === "TRADED" && secondActualCoin.symbol}
                {coin.type === "SOLD" && "$"}
                {coin.type !== "SOLD" && (
                  <span className="text-xs text-gray-400 hidden md:block">
                    ({handleCustomToFixed(Number(coin.price))})
                  </span>
                )}
              </li>
              <li className="w-32 md:w-1/6 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                {coin.type !== "SOLD"
                  ? handleCustomToFixed(Number(coin.moneyChange))
                  : handleCustomToFixed(coin.amountOfCoins)}{" "}
                {coin.type === "BOUGHT" && "$"}
                {(coin.type === "TRADED" || coin.type === "SOLD") &&
                  actualCoin.symbol}
                {coin.priceSecond && (
                  <span className="text-xs text-gray-400 hidden md:block">
                    ({handleCustomToFixed(Number(coin.priceSecond))})
                  </span>
                )}
              </li>

              <li className="w-20 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                {coin.date}
              </li>
              <li className="w-20 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap hidden md:block">
                {coin.time}
              </li>

              {coin.percentageChange || coin.percentageChange === 0 ? (
                <li
                  className={`w-20 md:w-1/6 flex items-center md:gap-2 overflow-hidden truncate whitespace-nowrap ${
                    coin.percentageChange < -0.2 && "text-red-400"
                  } ${coin.percentageChange > 0.2 && "text-green-400"} ${
                    coin.percentageChange >= -0.2 &&
                    coin.percentageChange <= 0.2 &&
                    "text-stone-500"
                  }`}
                >
                  {handleCustomToFixed(Number(coin.percentageChange))}%{" "}
                  {coin.percentageChange < -0.2 && (
                    <ArrowDownIcon svgSize="1.7" />
                  )}
                  {coin.percentageChange > 0.2 && <ArrowUpIcon svgSize="1.7" />}
                  {coin.percentageChange >= -0.2 &&
                    coin.percentageChange <= 0.2 && (
                      <ArrowHorizontalIcon svgSize="1.7" />
                    )}{" "}
                </li>
              ) : (
                <li className="w-20 md:w-1/6 flex justify-center md:gap-2 overflow-hidden truncate whitespace-nowrap">
                  /
                </li>
              )}
            </ul>
          );
        })
      )}
    </>
  );
}

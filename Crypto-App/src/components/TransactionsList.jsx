import { act, useContext } from "react";
import { CryptoContext } from "../store/crypto-context";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowHorizontalIcon,
} from "../assets/icons";

export default function TransactionsList() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);

  return (
    <>
      {userAccount.purchaseHistory.length !== 0 &&
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
              className="flex gap-2 md:gap-5 py-4 md:px-2 rounded-lg hover:bg-[#23272Eff] transition-all text-xs md:text-md"
              key={coin.id}
            >
              <li className="w-32 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                <span
                  className={`py-2 px-4 rounded-xl ${
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
              <li className="w-20 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
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
                <li className="w-20 md:w-1/6 flex items-center md:gap-2 overflow-hidden truncate whitespace-nowrap">
                  /
                </li>
              )}
            </ul>
          );
        })}
    </>
  );
}

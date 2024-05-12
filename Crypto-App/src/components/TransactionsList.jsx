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

          return (
            <ul
              className="flex py-4 px-2 rounded-lg hover:bg-[#23272Eff] transition-all"
              key={coin.id}
            >
              <li className="w-1/6 md:w-1/6 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                {handleCustomToFixed(coin.type)}
              </li>
              <li className="w-1/6">
                {actualCoin === "CASH" ? actualCoin : actualCoin.symbol} to{" "}
                {secondActualCoin === "CASH"
                  ? secondActualCoin
                  : secondActualCoin.symbol}
              </li>
              <li className="w-1/6 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                {coin.type !== "SOLD"
                  ? handleCustomToFixed(coin.amountOfCoins)
                  : handleCustomToFixed(Number(coin.moneyChange))}{" "}
                {coin.type === "BOUGHT" && secondActualCoin.symbol}
                {coin.type === "TRADED" && secondActualCoin.symbol}
                {coin.type === "SOLD" && "$"}
                {coin.type !== "SOLD" && (
                  <span className="text-xs text-gray-400">
                    ({handleCustomToFixed(Number(coin.price))})
                  </span>
                )}
              </li>
              <li className="w-1/6 md:w-1/6 md:tracking-[0.1rem]">
                {coin.type !== "SOLD"
                  ? handleCustomToFixed(Number(coin.moneyChange))
                  : handleCustomToFixed(coin.amountOfCoins)}{" "}
                {coin.type === "BOUGHT" && "$"}
                {(coin.type === "TRADED" || coin.type === "SOLD") &&
                  actualCoin.symbol}
                {coin.priceSecond && (
                  <span className="text-xs text-gray-400">
                    ({handleCustomToFixed(Number(coin.priceSecond))})
                  </span>
                )}
              </li>

              <li className="w-1/6 md:tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                {coin.time}
              </li>

              {coin.percentageChange && (
                <li
                  className={`w-16 md:w-1/6 flex items-center md:gap-2 overflow-hidden truncate whitespace-nowrap ${
                    coin.percentageChange < -0.2 && "text-red-400"
                  } ${coin.percentageChange > 0.2 && "text-green-400"} ${
                    coin.percentageChange >= -0.2 &&
                    coin.percentageChange <= 0.2 &&
                    "text-stone-500"
                  }`}
                >
                  {coin.percentageChange}%{" "}
                  {coin.percentageChange < -0.2 && (
                    <ArrowDownIcon svgSize="1.7" />
                  )}
                  {coin.percentageChange > 0.2 && <ArrowUpIcon svgSize="1.7" />}
                  {coin.percentageChange >= -0.2 &&
                    coin.percentageChange <= 0.2 && (
                      <ArrowHorizontalIcon svgSize="1.7" />
                    )}{" "}
                </li>
              )}
            </ul>
          );
        })}
    </>
  );
}

import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowHorizontalIcon,
} from "../assets/icons";
import CryptoAction from "./Single Components/CryptoAction";

export default function WalletCryptoList() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);
  return (
    <>
      {userAccount.wallet.length !== 0 &&
        userAccount.wallet.map((coin) => {
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
              className="flex gap-5 py-4 px-2 rounded-lg hover:bg-[#23272Eff] transition-all"
              key={coin.id}
            >
              <li className="w-1/6">
                <span className="">{coinName} </span>(
                <span className="font-extrabold text-[0.5rem] md:text-lg">
                  {newCoin.symbol}
                </span>
                )
              </li>
              <li className="w-16 md:w-1/6 md:tracking-[0.1rem]">
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
        })}
    </>
  );
}

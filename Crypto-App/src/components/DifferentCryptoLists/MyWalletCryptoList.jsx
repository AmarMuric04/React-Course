import { useContext } from "react";

import { CryptoContext } from "../../store/crypto-context";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowHorizontalIcon,
} from "../../assets/icons";
import CryptoAction from "../Single Components/CryptoAction";

export default function MyWalletCryptoList() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);

  const walletCryptos = [...userAccount.wallet];

  return (
    <ul className="flex flex-col gap-3">
      {walletCryptos.length === 0 ? (
        <p className="text-4xl text-center m-8">
          You do not have any cryptos in your wallet...
        </p>
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
              className="preventdefault flex items-center py-8 text-2xl pr-16 pl-8 rounded-xl relative hover:bg-[#23272Eff] transition-all delay-50 gap-24"
              key={coin.id}
            >
              <li className="w-1/6">
                <span className="">{coinName} </span>(
                <span className="font-extrabold text-lg">{newCoin.symbol}</span>
                )
              </li>
              <li className="w-1/6 tracking-[0.1rem]">
                $ {handleCustomToFixed(coin.purchasedPrice)}
              </li>
              <li className="w-1/6 tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                {handleCustomToFixed(coin.amountOfCoins)}
              </li>
              <li className="w-1/6 tracking-[0.1rem] overflow-hidden truncate whitespace-nowrap">
                $ {handleCustomToFixed(coin.moneySpent)}
              </li>
              <li
                className={`w-1/6 flex items-center gap-2 overflow-hidden truncate whitespace-nowrap ${
                  percentageChange < -0.2 && "text-red-400"
                } ${percentageChange > 0.2 && "text-green-400"} ${
                  percentageChange >= -0.2 &&
                  percentageChange <= 0.2 &&
                  "text-stone-500"
                }`}
              >
                {percentageChange}%{" "}
                {percentageChange < -0.2 && <ArrowDownIcon svgSize="1.5" />}
                {percentageChange > 0.2 && <ArrowUpIcon svgSize="1.5" />}
                {percentageChange >= -0.2 && percentageChange <= 0.2 && (
                  <ArrowHorizontalIcon svgSize="1" />
                )}{" "}
              </li>
              <CryptoAction
                firstText="Buy more"
                secondText="Sell"
                width="w-20"
                coin={coin}
              />
            </ul>
          );
        })
      )}
    </ul>
  );
}

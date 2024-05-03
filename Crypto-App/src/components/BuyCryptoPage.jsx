import { useContext, useState } from "react";
import { CryptoContext } from "../store/crypto-context";
import Header from "./Single Components/Header";

import BuyCryptoLeftSide from "./BuyCryptoLeftSide";
import BuyCryptoRightSide from "./BuyCryptoRightSide";

export default function BuyCryptoPage({ onChangeMainPage }) {
  const { buyCryptoPageCoin, _mainCoinsList } = useContext(CryptoContext);

  const coinName =
    buyCryptoPageCoin.id.slice(0, 1).toUpperCase() +
    buyCryptoPageCoin.id
      .slice(1, buyCryptoPageCoin.id.length)
      .replace("-", " ");
  const coinValue = Number(buyCryptoPageCoin.priceUsd).toFixed(2);
  const changeInLast24Hours = Number(
    buyCryptoPageCoin.changePercent24Hr
  ).toFixed(2);
  const coinSymbol = buyCryptoPageCoin.symbol.toUpperCase();

  return (
    <main className="bg-stone-300 h-full min-h w-full min-w-screen flex flex-col items-center">
      <Header />
      <div className="w-[80rem] mt-16">
        <p className="text-md font-bold text-gray-600 my-8">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => onChangeMainPage("home")}
          >
            Home
          </span>{" "}
          > {coinName} Price
        </p>
        <div className="flex w-full min-h-screen h-full">
          <BuyCryptoLeftSide
            coin={{ coinName, coinValue, changeInLast24Hours, coinSymbol }}
          />
          <BuyCryptoRightSide
            coin={{ coinName, coinValue, changeInLast24Hours, coinSymbol }}
          />
        </div>
      </div>
    </main>
  );
}

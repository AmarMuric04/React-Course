import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";

import CryptoAction from "./CryptoAction";

export default function Crypto({ coin }) {
  const {
    favoriteCryptos,
    handleFormatNumber,
    addFavorite,
    handlePreventDefault,
    handleCustomToFixed,
  } = useContext(CryptoContext);

  const coinRank = coin.rank;
  const coinSymbol = coin.symbol;
  const coinName =
    coin.id.slice(0, 1).toUpperCase() +
    coin.id.slice(1, coin.id.length).replace("-", " ");
  const coinValue = handleCustomToFixed(Number(coin.priceUsd));
  const coinMarketCap = handleFormatNumber(Number(coin.marketCapUsd));
  const changeInLast24Hours = Number(coin.changePercent24Hr).toFixed(2);
  const volumeInLast24Hours = handleFormatNumber(
    Number(coin.volumeUsd24Hr).toFixed(0)
  );

  return (
    <a key={coin.id} href={`${coin.explorer}`} onClick={handlePreventDefault}>
      <ul className="preventdefault flex items-center py-8 text-2xl pr-16 pl-8 rounded-xl relative hover:bg-[#23272Eff] transition-all delay-50 gap-24">
        <li className="w-12">
          {favoriteCryptos.some(
            (favoritedCoin) => coin.id === favoritedCoin.id
          ) && (
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
          )}{" "}
          {!favoriteCryptos.some(
            (favoritedCoin) => coin.id === favoritedCoin.id
          ) && (
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
        <li className="w-64">
          <span className="">{coinName} </span>(
          <span className="font-extrabold text-lg">{coinSymbol}</span>)
        </li>
        <li className="w-36 tracking-[0.1rem]">$ {coinValue}</li>
        <li className="w-32">$ {coinMarketCap}</li>
        <li className="w-20">$ {volumeInLast24Hours}</li>
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
        <CryptoAction
          firstText="Buy"
          secondText="Short"
          width="w-16"
          coin={coin}
        />
      </ul>
    </a>
  );
}

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
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              onClick={() => addFavorite(coin)}
            >
              <path
                fill="currentColor"
                fill-opacity="0"
                d="M12 20L20.5 11V7L17 5.5L12 7L7 5.5L3.5 7V11L12 20Z"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.5s"
                  dur="0.5s"
                  values="0;1"
                />
              </path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-dasharray="30"
                stroke-dashoffset="30"
                stroke-linecap="round"
                stroke-width="2"
                d="M12 8C12 8 12 8 12.7578 7C13.6343 5.84335 14.9398 5 16.5 5C18.9853 5 21 7.01472 21 9.5C21 10.4251 20.7209 11.285 20.2422 12C19.435 13.206 12 21 12 21M12 8C12 8 12 8 11.2422 7C10.3657 5.84335 9.06021 5 7.5 5C5.01472 5 3 7.01472 3 9.5C3 10.4251 3.27914 11.285 3.75777 12C4.56504 13.206 12 21 12 21"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.5s"
                  values="30;0"
                />
              </path>
            </svg>
          )}{" "}
          {!favoriteCryptos.some(
            (favoritedCoin) => coin.id === favoritedCoin.id
          ) && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              onClick={() => addFavorite(coin)}
            >
              <path
                fill="currentColor"
                fill-opacity="0"
                d="M12 20L20.5 11V7L17 5.5L12 7L7 5.5L3.5 7V11L12 20Z"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.5s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-dasharray="30"
                stroke-dashoffset="30"
                stroke-linecap="round"
                stroke-width="2"
                d="M12 8C12 8 12 8 12.7578 7C13.6343 5.84335 14.9398 5 16.5 5C18.9853 5 21 7.01472 21 9.5C21 10.4251 20.7209 11.285 20.2422 12C19.435 13.206 12 21 12 21M12 8C12 8 12 8 11.2422 7C10.3657 5.84335 9.06021 5 7.5 5C5.01472 5 3 7.01472 3 9.5C3 10.4251 3.27914 11.285 3.75777 12C4.56504 13.206 12 21 12 21"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.5s"
                  values="30;0"
                />
              </path>
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
          secondText="Trade"
          width="w-16"
          firstHash={`/crypto-list/${coin.id}`}
          secondHash={`/sell-crypto`}
        />
      </ul>
    </a>
  );
}

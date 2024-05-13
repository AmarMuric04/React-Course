import { useContext } from "react";

import { CryptoContext } from "../../store/crypto-context";
import Crypto from "../Single Components/Crypto";

export default function FavoriteCryptoList() {
  const { favoriteCryptos, coinFilter, handleFilterCoins } =
    useContext(CryptoContext);

  const newCoins = handleFilterCoins(coinFilter, favoriteCryptos);

  return (
    <ul className="flex flex-col gap-3">
      {newCoins.length === 0 ? (
        <div className="text-4xl text-center md:m-8 w-full h-96 grid place-items-center">
          <div className="border-[0.1rem] border-[#23272Eff] rounded-xl w-[95%] md:w-96 h-full flex flex-col items-center justify-between gap-3 pb-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
              className="m-8"
            >
              <path
                fill="currentColor"
                fill-opacity="0"
                d="M3.5 11L12 20V7L7 5.5L3.5 7V11Z"
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
            <div className="flex flex-col gap-2">
              <p>You have no favorite cryptos!</p>
              <p className="text-sm text-gray-400 px-8">
                Do research on some coins and if you like them add them to your
                favorites!
              </p>
            </div>
          </div>
        </div>
      ) : (
        newCoins.map((coin) => <Crypto key={coin.id} coin={coin} />)
      )}
    </ul>
  );
}

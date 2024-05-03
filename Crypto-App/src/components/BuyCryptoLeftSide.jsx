import { useContext } from "react";
import Logo from "../../public/btcLogo.png";
import { CryptoContext } from "../store/crypto-context";

export default function BuyCryptoLeftSide({ coin }) {
  const { handleFormatNumberWithCommas } = useContext(CryptoContext);

  return (
    <div className="flex flex-col w-2/3 ">
      <div className="flex gap-3 items-center mb-8">
        <img className="w-20" src={Logo} alt="" />
        <h1 className="text-4xl text-stone-600 flex gap-2 items-end">
          {coin.coinName} Price
          <span className="text-lg">
            (
            <span className="text-lg font-extrabold uppercase text-stone-900">
              {coin.coinSymbol}
            </span>
            )
          </span>
        </h1>
      </div>
      <div className="flex gap-3 items-end">
        <h2 className="text-white font-extrabold text-3xl">
          $ {handleFormatNumberWithCommas(coin.coinValue)}
        </h2>
        <p
          className={`flex items-center justify-end text-xl ${
            coin.changeInLast24Hours < -0.2 && "text-red-400"
          }  ${coin.changeInLast24Hours > 0.2 && "text-green-400"} ${
            coin.changeInLast24Hours >= -0.2 &&
            coin.changeInLast24Hours <= 0.2 &&
            "text-stone-500"
          }`}
        >
          {coin.changeInLast24Hours}%{" "}
          {coin.changeInLast24Hours >= -0.2 &&
            coin.changeInLast24Hours <= 0.2 && (
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
          {coin.changeInLast24Hours < -0.2 && (
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
          {coin.changeInLast24Hours > 0.2 && (
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
        </p>
        <p className="text-stone-400 font-bold">24hr</p>
      </div>
    </div>
  );
}

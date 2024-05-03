import { useContext, useState } from "react";
import Logo from "../../public/btcLogo.png";
import { CryptoContext } from "../store/crypto-context";

export default function BuyCryptoRightSide({ coin }) {
  const [inputValue, setInputValue] = useState();

  const { handleFormatNumberWithCommas } = useContext(CryptoContext);

  function handleInputValue(event) {
    let value = event.target.value;

    value = value.replace(/[^0-9.]/g, "").replace(/^0+/, "");

    if (value.split(".").length > 2) {
      value = value.substring(0, value.lastIndexOf("."));
    }
    setInputValue(value);
  }

  return (
    <div className="flex flex-col w-1/3 ">
      <div className="w-full h-auto flex flex-col">
        <div className="flex gap-8 items-start mt-16">
          <button className="font-bold text-2xl py-2  border-b-4 border-transparent focus:border-yellow-400">
            Buy {coin.coinSymbol}
          </button>
          <button className="font-bold text-2xl py-2  border-b-4 border-transparent focus:border-yellow-400">
            Short {coin.coinSymbol}
          </button>
        </div>
        <div className="w-full relative my-4">
          <input
            className="bg-stone-400 pb-4 py-12 w-full text-white px-4 rounded-lg focus:outline-none placeholder-stone-800"
            type="text"
            value={inputValue}
            maxLength="11"
            placeholder="0.00"
            onChange={handleInputValue}
          />
          <p className="text-white absolute top-4 left-3">Buy</p>
          <div className="flex bg-stone-800 rounded-full py-2 w-auto pr-3 items-center absolute right-3 top-8">
            <img src={Logo} className="w-12" />
            <p className="uppercase text-white font-bold">{coin.coinSymbol}</p>
          </div>
        </div>
        <div className="flex w-full gap-2 text-xl">
          <p className="font-bold max-w-1/3 w-1/3 overflow-hidden truncate whitespace-nowrap">
            {inputValue} {coin.coinSymbol} =
          </p>
          <p className="font-bold max-w-2/3 w-2/3 overflow-hidden truncate whitespace-nowrap text-end">
            USD ${" "}
            {inputValue
              ? handleFormatNumberWithCommas(
                  (coin.coinValue * inputValue).toFixed(2)
                )
              : "0.00"}
          </p>
        </div>
        <p className="flex gap-2 items-center text-sm my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="text-green-800"
          >
            <path
              fill="currentColor"
              d="M3 6v12h10.32a6.4 6.4 0 0 1-.32-2H7a2 2 0 0 0-2-2v-4c1.11 0 2-.89 2-2h10a2 2 0 0 0 2 2v.06c.67 0 1.34.12 2 .34V6zm9 3c-1.7.03-3 1.3-3 3s1.3 2.94 3 3c.38 0 .77-.08 1.14-.23c.27-1.1.72-2.14 1.83-3.16C14.85 10.28 13.59 8.97 12 9m9.63 3.27l-3.87 3.9l-1.35-1.37L15 16.22L17.75 19l5.28-5.32z"
            />
          </svg>
          0% trading fee on {coin.coinSymbol}/USDT spot trading pair.
        </p>
        <button className="bg-yellow-400 rounded-md py-4 font-bold hover:bg-yellow-500 transition-all">
          Buy {coin.coinSymbol}
        </button>
        <p className="text-end text-sm text-stone-800 my-4">
          Last updated 2024/05/03 21:03 (CEST)
        </p>
      </div>
    </div>
  );
}

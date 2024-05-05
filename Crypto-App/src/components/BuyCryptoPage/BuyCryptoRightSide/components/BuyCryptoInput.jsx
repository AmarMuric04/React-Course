import { useState, useContext } from "react";
import { CryptoContext } from "../../../../store/crypto-context";
import Image from "../../../Single Components/Image";

import Logo from "/public/btcLogo.png";

export default function BuyCryptoInput({ coin, type }) {
  const { handleCustomToFixed, handleBuyCrypto } = useContext(CryptoContext);

  const [inputValue, setInputValue] = useState();
  function handleInputValue(event) {
    let value = event.target.value;

    value = value.replace(/[^0-9.]/g, "").replace(/^0+/, "");

    if (value.split(".").length > 2) {
      value = value.substring(0, value.lastIndexOf("."));
    }
    setInputValue(value);
  }

  return (
    <>
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
        <div className="flex bg-stone-800 rounded-full py-2 w-auto pr-3 pl-2 items-center absolute right-3 top-8">
          {type === "crypto" ? (
            <Image image={Logo} className="w-8" svgSize="1em" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="text-green-400"
            >
              <path
                fill="currentColor"
                d="M11.25 7.847c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm1.5 5.001v3.304c.936-.255 1.5-.974 1.5-1.652c0-.678-.564-1.397-1.5-1.652"
              />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75"
                clip-rule="evenodd"
              />
            </svg>
          )}
          <p className="uppercase text-white font-bold">
            {type === "crypto" ? coin.coinSymbol : "CASH"}
          </p>
        </div>
      </div>
      <div className="flex w-full gap-2 text-xl">
        <p className="font-bold max-w-1/3 w-1/3 overflow-hidden truncate whitespace-nowrap">
          {inputValue &&
            inputValue !== "." &&
            handleCustomToFixed(Number(inputValue))}{" "}
          {type === "crypto" ? coin.coinSymbol : "USD $"} =
        </p>
        <p className="font-bold max-w-2/3 w-2/3 overflow-hidden truncate whitespace-nowrap text-end">
          {type === "crypto" ? "USD $" : coin.coinSymbol}{" "}
          {type === "crypto"
            ? inputValue && inputValue !== "."
              ? handleCustomToFixed(coin.coinValue * inputValue)
              : "0.00"
            : inputValue && inputValue !== "."
            ? handleCustomToFixed(inputValue / coin.coinValue)
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
        0% trading fee on{" "}
        {type === "crypto"
          ? `${coin.coinSymbol}/USDT`
          : `USDT/${coin.coinSymbol}`}{" "}
        spot trading pair.
      </p>
      <button
        onClick={
          type === "crypto"
            ? () => handleBuyCrypto(coin, inputValue, "")
            : () => handleBuyCrypto(coin, "", inputValue)
        }
        className="bg-yellow-400 rounded-md py-4 font-bold hover:bg-yellow-500 transition-all"
      >
        Buy {coin.coinSymbol}
      </button>
    </>
  );
}

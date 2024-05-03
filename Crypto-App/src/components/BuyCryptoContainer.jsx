import { useState, useContext } from "react";
import { CryptoContext } from "../store/crypto-context";
import Logo from "../../public/btcLogo.png";
import BuyCryptoInput from "./BuyCryptoInput";

export default function BuyCryptoContainer({ coin }) {
  const [buyCryptoButton, setBuyCryptoButton] = useState(true);
  const [inputValue, setInputValue] = useState();
  function handleInputValue(event) {
    let value = event.target.value;

    value = value.replace(/[^0-9.]/g, "").replace(/^0+/, "");

    if (value.split(".").length > 2) {
      value = value.substring(0, value.lastIndexOf("."));
    }
    setInputValue(value);
  }

  function handleChangeBuyCryptoButton(identifier) {
    setBuyCryptoButton(identifier);
  }

  const { handleFormatNumberWithCommas } = useContext(CryptoContext);

  return (
    <div className="w-full h-auto flex flex-col">
      <div className="flex gap-8 items-start mt-16">
        <button
          onClick={() => handleChangeBuyCryptoButton(true)}
          className={`font-bold text-2xl py-2  border-b-4 ${
            buyCryptoButton ? "border-yellow-400" : "border-transparent"
          }`}
        >
          Buy by {coin.coinSymbol}
        </button>
        <button
          onClick={() => handleChangeBuyCryptoButton(false)}
          className={`font-bold text-2xl py-2  border-b-4 ${
            !buyCryptoButton ? "border-yellow-400" : "border-transparent"
          }`}
        >
          Buy by Cash
        </button>
      </div>
      {buyCryptoButton && <BuyCryptoInput coin={coin} type="crypto" />}
      {!buyCryptoButton && <BuyCryptoInput coin={coin} type="cash" />}

      <button className="bg-yellow-400 rounded-md py-4 font-bold hover:bg-yellow-500 transition-all">
        Buy {coin.coinSymbol}
      </button>
      <p className="text-end text-sm text-stone-800 my-4">
        Last updated 2024/05/03 21:03 (CEST)
      </p>
    </div>
  );
}

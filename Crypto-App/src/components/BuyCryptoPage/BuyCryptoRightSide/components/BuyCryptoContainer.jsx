import { useState } from "react";
import BuyCryptoInput from "../../BuyCryptoRightSide/components/BuyCryptoInput";

export default function BuyCryptoContainer({ coin }) {
  const [buyCryptoButton, setBuyCryptoButton] = useState(true);

  function handleChangeBuyCryptoButton(identifier) {
    setBuyCryptoButton(identifier);
  }

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

      <p className="text-end text-sm text-stone-800 my-4">
        Last updated 2024/05/03 21:03 (CEST)
      </p>
    </div>
  );
}

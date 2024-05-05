import { useContext } from "react";

import { CryptoContext } from "../../store/crypto-context";
import Crypto from "../Single Components/Crypto";

export default function CryptoList() {
  const { _mainCoinsList, handleFilterCoins, coinFilter } =
    useContext(CryptoContext);

  const newCoins = handleFilterCoins(coinFilter, _mainCoinsList);

  return (
    <ul key={newCoins} className="flex flex-col gap-3">
      {newCoins.map((coin) => (
        <Crypto key={coin.id} coin={coin} />
      ))}
    </ul>
  );
}

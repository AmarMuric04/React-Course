import { useContext } from "react";
import { CryptoSearchContext } from "../../store/cryptoSearch-context";
import { CryptoContext } from "../../store/crypto-context";

import Crypto from "../Single Components/Crypto";

export default function SearchedCryptoList({ onBuy }) {
  const { inputValue } = useContext(CryptoSearchContext);
  const { coinsList } = useContext(CryptoContext);

  let coins = coinsList.filter(
    (coin) =>
      coin.id.toLowerCase().startsWith(inputValue.toLowerCase()) ||
      coin.symbol.toLowerCase().startsWith(inputValue.toLowerCase()) ||
      coin.priceUsd.startsWith(inputValue)
  );

  return (
    <ul key={coins} className="flex flex-col gap-3">
      {coins.length === 0 ? (
        <p className="text-4xl text-center m-8">
          No cryptos found for your search...
        </p>
      ) : (
        coins.map((coin) => (
          <Crypto key={coin.id} coin={coin} onBuyCrypto={onBuy} />
        ))
      )}
    </ul>
  );
}

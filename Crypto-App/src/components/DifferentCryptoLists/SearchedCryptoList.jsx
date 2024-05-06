import { useContext } from "react";
import { CryptoSearchContext } from "../../store/cryptoSearch-context";
import { CryptoContext } from "../../store/crypto-context";

import Crypto from "../Single Components/Crypto";
export default function SearchedCryptoList() {
  const { inputValue } = useContext(CryptoSearchContext);
  const { _mainCoinsList, handleFilterCoins, coinFilter } =
    useContext(CryptoContext);

  const newCoins = [..._mainCoinsList];

  let coins = newCoins.filter(
    (coin) =>
      coin.id.toLowerCase().startsWith(inputValue.toLowerCase()) ||
      coin.symbol.toLowerCase().startsWith(inputValue.toLowerCase()) ||
      coin.priceUsd.startsWith(inputValue)
  );

  coins = handleFilterCoins(coinFilter, coins);

  return (
    <ul key={coins} className="flex flex-col gap-3">
      {coins.length === 0 ? (
        <p className="text-4xl text-center m-8">
          No cryptos found for your search...
        </p>
      ) : (
        coins.map((coin) => <Crypto key={coin.id} coin={coin} />)
      )}
    </ul>
  );
}

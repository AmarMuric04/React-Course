import { useContext } from "react";

import { CryptoContext } from "../../store/crypto-context";
import Crypto from "../Single Components/Crypto";

export default function FavoriteCryptoList() {
  const { favoriteCryptos } = useContext(CryptoContext);

  return (
    <ul className="flex flex-col gap-3">
      {favoriteCryptos.length === 0 ? (
        <p className="text-4xl text-center m-8">
          You do not have any cryptos favorited...
        </p>
      ) : (
        favoriteCryptos.map((coin) => <Crypto key={coin.id} coin={coin} />)
      )}
    </ul>
  );
}

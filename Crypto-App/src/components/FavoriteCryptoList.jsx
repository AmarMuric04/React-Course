import { useContext } from "react";

import { CryptoContext } from "../store/crypto-context";
import Crypto from "./Crypto";

export default function FavoriteCryptoList() {
  const { favoriteCryptos } = useContext(CryptoContext);

  return (
    <ul key={favoriteCryptos} className="flex flex-col gap-3">
      {favoriteCryptos.map((coin) => (
        <Crypto key={coin.id} coin={coin} />
      ))}
    </ul>
  );
}

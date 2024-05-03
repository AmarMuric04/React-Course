import { useContext } from "react";

import { CryptoContext } from "../../store/crypto-context";
import Crypto from "../Single Components/Crypto";

export default function CryptoList() {
  const { coinsList } = useContext(CryptoContext);

  return (
    <ul key={coinsList} className="flex flex-col gap-3">
      {coinsList.map((coin) => (
        <Crypto key={coin.id} coin={coin} />
      ))}
    </ul>
  );
}

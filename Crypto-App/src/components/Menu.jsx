import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";

export default function MainList() {
  const { handleShowFavorite } = useContext(CryptoContext);

  return (
    <ul className="flex gap-10 text-xl px-12">
      <li className="cursor-pointer" onClick={() => handleShowFavorite(false)}>
        All Cryptos
      </li>
      <li className="cursor-pointer" onClick={() => handleShowFavorite(true)}>
        Favorite Cryptos
      </li>
      <li>My Wallet</li>
      <li>GP Cryptos</li>
      <li>BP Cryptos</li>
    </ul>
  );
}

import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";

export default function MainList() {
  const { handleShowCryptoList } = useContext(CryptoContext);

  return (
    <ul className="flex gap-10 text-xl px-12">
      <li
        className="cursor-pointer"
        onClick={() => handleShowCryptoList("main")}
      >
        All Cryptos
      </li>
      <li
        className="cursor-pointer"
        onClick={() => handleShowCryptoList("favorite")}
      >
        Favorite Cryptos
      </li>
      <li
        className="cursor-pointer"
        onClick={() => handleShowCryptoList("favorite")}
      >
        My Wallet
      </li>
      <li className="cursor-pointer" onClick={() => handleShowCryptoList("gp")}>
        GP Cryptos
      </li>
      <li className="cursor-pointer" onClick={() => handleShowCryptoList("bp")}>
        BP Cryptos
      </li>
    </ul>
  );
}

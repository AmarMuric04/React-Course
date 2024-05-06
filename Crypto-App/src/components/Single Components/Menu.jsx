import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";
import SearchedCryptos from "./SearchedCryptos";

export default function MainList() {
  const { handleShowCryptoList, showCryptoList } = useContext(CryptoContext);

  return (
    <div className="w-full flex justify-between items-center" id="menu">
      <ul className="flex gap-10 text-md px-12">
        <li
          className={`cursor-pointer border-b-[0.2rem] border-transparent py-2 ${
            showCryptoList === "main" && "border-yellow-400"
          }`}
          onClick={() => handleShowCryptoList("main")}
        >
          All Cryptos
        </li>
        <li
          className={`cursor-pointer border-b-[0.2rem] border-transparent py-2 ${
            showCryptoList === "favorite" && "border-yellow-400"
          }`}
          onClick={() => handleShowCryptoList("favorite")}
        >
          Favorite Cryptos
        </li>
        <li
          className={`cursor-pointer border-b-[0.2rem] border-transparent py-2 ${
            showCryptoList === "mywallet" && "border-yellow-400"
          }`}
          onClick={() => handleShowCryptoList("mywallet")}
        >
          My Wallet
        </li>
        <li
          className={`cursor-pointer border-b-[0.2rem] border-transparent py-2 ${
            showCryptoList === "gp" && "border-yellow-400"
          }`}
          onClick={() => handleShowCryptoList("gp")}
        >
          GP Cryptos
        </li>
        <li
          className={`cursor-pointer border-b-[0.2rem] border-transparent py-2 ${
            showCryptoList === "bp" && "border-yellow-400"
          }`}
          onClick={() => handleShowCryptoList("bp")}
        >
          BP Cryptos
        </li>
      </ul>
      <SearchedCryptos />
    </div>
  );
}

import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";
import SearchedCryptos from "./SearchedCryptos";

export default function MainList() {
  const { handleShowCryptoList, showCryptoList } = useContext(CryptoContext);

  return (
    <div
      className="w-full flex-wrap flex justify-between items-center"
      id="menu"
    >
      <ul className="flex w-full gap-3 justify-between md:justify-start md:gap-10 text-xs md:text-lg px-2 md:px-12">
        <li
          className={`cursor-pointer border-b-[0.2rem] border-transparent py-2    overflow-hidden truncate whitespace-nowrap ${
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
          <span className="hidden md:block">Favorite Cryptos</span>
          <span className="md:hidden">Favorites</span>
        </li>
        <li
          className={`cursor-pointer flex gap-2 border-b-[0.2rem] border-transparent py-2 ${
            showCryptoList === "mywallet" && "border-yellow-400"
          }`}
          onClick={() => handleShowCryptoList("mywallet")}
        >
          <span className="hidden md:block">My</span> Wallet
        </li>
        <li
          className={`cursor-pointer flex gap-2 border-b-[0.2rem] border-transparent py-2 ${
            showCryptoList === "gp" && "border-yellow-400"
          }`}
          onClick={() => handleShowCryptoList("gp")}
        >
          GP <span className="hidden md:block">Cryptos</span>
        </li>
        <li
          className={`cursor-pointer flex gap-2 border-b-[0.2rem] border-transparent py-2 ${
            showCryptoList === "bp" && "border-yellow-400"
          }`}
          onClick={() => handleShowCryptoList("bp")}
        >
          BP <span className="hidden md:block">Cryptos</span>
        </li>
        <li
          className={`cursor-pointer border-b-[0.2rem] border-transparent py-2   overflow-hidden truncate whitespace-nowrap ${
            showCryptoList === "activetrades" && "border-yellow-400"
          }`}
          onClick={() => handleShowCryptoList("activetrades")}
        >
          Active Trades
        </li>
      </ul>
      <SearchedCryptos />
    </div>
  );
}

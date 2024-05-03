import FavoriteCryptoList from "../DifferentCryptoLists/FavoriteCryptoList";
import CryptoList from "../DifferentCryptoLists/CryptoList";
import Performers from "../Single Components/Performers";
import FilterCryptoList from "../DifferentCryptoLists/FilterCryptoList";
import SearchedCryptoList from "../DifferentCryptoLists/SearchedCryptoList";
import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";

export default function CryptoListContainer({ onCryptoClick }) {
  const { showCryptoList } = useContext(CryptoContext);

  return (
    <>
      <FilterCryptoList />

      <ul className="flex gap-16 px-8 relative text-sm text-stone-700">
        <li className="w-24">Favorite</li>
        <li className="w-72">Name</li>
        <li className="w-40">Value</li>
        <li className="w-40">Market cap</li>
        <li className="w-40">Volume (24hr)</li>
        <li className="w-48">Change (24hr)</li>
        <li className="w-40">Trade</li>
      </ul>
      {(showCryptoList === "gp" || showCryptoList === "bp") && (
        <Performers onBuy={onCryptoClick} type={showCryptoList} />
      )}
      {showCryptoList === "favorite" && (
        <FavoriteCryptoList onBuy={onCryptoClick} />
      )}
      {showCryptoList === "main" && <CryptoList onBuy={onCryptoClick} />}
      {showCryptoList === "search" && (
        <SearchedCryptoList onBuy={onCryptoClick} />
      )}
    </>
  );
}

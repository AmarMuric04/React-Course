import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context.jsx";

export default function FilterCryptoList() {
  let { formatList, _mainCoinsList, favoriteCryptos, showCryptoList } =
    useContext(CryptoContext);

  const coins =
    showCryptoList !== "favorite" ? _mainCoinsList : favoriteCryptos;

  return (
    <div className="w-full flex justify-end gap-5 px-10 py-5 items-center">
      <p>Filter by:</p>
      <select
        onChange={() =>
          formatList(event, coins, showCryptoList !== "favorite" ? "main" : "")
        }
        className="px-2 py-1 rounded-md focus:outline-none cursor-pointer"
      >
        <option value="rank">Best rank</option>
        <option value="rank-reversed">Worst rank</option>
        <option value="cost">Highest cost</option>
        <option value="cost-reversed">Lowest cost</option>
        <option value="marketcap">Highest market cap</option>
        <option value="marketcap-reversed">Lowest market cap</option>
        <option value="volume">Highest volume 24Hr</option>
        <option value="volume-reversed">Lowest volume 24Hr</option>
        <option value="change">Best performing 24Hr</option>
        <option value="change-reversed">Worst performing 24Hr</option>
      </select>
    </div>
  );
}

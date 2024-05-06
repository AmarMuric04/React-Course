import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context.jsx";

export default function FilterCryptoList() {
  let { handleSetFilters, showCryptoList } = useContext(CryptoContext);

  return (
    <div className="w-full min-h-20 flex justify-end gap-5 px-10 py-5 items-center">
      {showCryptoList !== "mywallet" && (
        <>
          <p>Sort by:</p>
          <select
            onChange={() => handleSetFilters(event)}
            className="px-2 py-1 border-[0.1rem] focus:border-yellow-400 border-[#23272Eff] bg-[#1A1C22ff] rounded-md focus:outline-none cursor-pointer text-gray-600"
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
        </>
      )}
    </div>
  );
}

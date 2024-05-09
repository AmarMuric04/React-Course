import { useContext } from "react";
import { CryptoSearchContext } from "../../store/cryptoSearch-context";

export default function SearchedCryptos() {
  const { handleSearchInput } = useContext(CryptoSearchContext);

  return (
    <div className="w-full flex items-center gap-2 px-2 md:px-10 flex-wrap justify-end">
      <p className="hidden md:block md:w-1/3 md:text-end">
        Search for cryptos:
      </p>
      <input
        className="pl-2 my-4 md:my-0 bg-[#1A1C22ff] pr-8 py-2 text-white rounded-md focus:outline-none w-full md:w-1/3 border-[0.1rem] border-[#23272Eff] focus:border-yellow-400 transition-all placeholder-gray-600"
        type="text"
        placeholder="Crypto Name / Crypto Price / Crypto Symbol..."
        onChange={handleSearchInput}
      />
    </div>
  );
}

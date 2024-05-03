import { useContext } from "react";
import { CryptoSearchContext } from "../../store/cryptoSearch-context";

export default function SearchedCryptos() {
  const { handleSearchInput } = useContext(CryptoSearchContext);

  return (
    <div className="w-2/5 flex items-center gap-2 px-10">
      <p className="w-1/3 text-end">Search for cryptos:</p>
      <input
        className="pl-2 pr-8 py-2 rounded-xl focus:outline-none w-2/3"
        type="text"
        placeholder="Crypto Name / Crypto Price / Crypto Symbol..."
        onChange={handleSearchInput}
      />
    </div>
  );
}

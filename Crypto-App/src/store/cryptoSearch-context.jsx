import { createContext, useContext, useState } from "react";
import { CryptoContext } from "./crypto-context";

export const CryptoSearchContext = createContext({
  inputValue: "",
  handleSearchInput: () => {},
});

export default function CryptoSearchContextProvider({ children }) {
  const [searchedCrypto, setSearchedCrypto] = useState("");

  const { handleShowCryptoList } = useContext(CryptoContext);

  function handleSearchInput(e) {
    if (e.target.value === "") handleShowCryptoList("main");

    setSearchedCrypto(e.target.value);
    handleShowCryptoList("search");
  }

  const searchCryptoValue = {
    inputValue: searchedCrypto,
    handleSearchInput,
  };

  return (
    <CryptoSearchContext.Provider value={searchCryptoValue}>
      {children}
    </CryptoSearchContext.Provider>
  );
}

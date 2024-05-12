import { createContext, useState } from "react";

export const CryptoWalletContext = createContext({
  handleChangeWalletList: () => {},
  cryptoWalletList: "",
});

export default function CryptoWalletContextProvider({ children }) {
  const [cryptoWalletList, setCryptoWalletList] = useState("main");

  function handleChangeWalletList(identifier) {
    setCryptoWalletList(identifier);
  }

  const walletContextValue = {
    handleChangeWalletList,
    cryptoWalletList,
  };

  return (
    <CryptoWalletContext.Provider value={walletContextValue}>
      {children}
    </CryptoWalletContext.Provider>
  );
}

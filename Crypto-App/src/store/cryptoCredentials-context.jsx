import { createContext, useContext } from "react";
import { CryptoContext } from "./crypto-context";

export const CryptoCredentialsContext = createContext({
  handleCreateAccount: () => {},
});

export default function CryptoCredentialsContextProvider({ children }) {
  const { userAccounts, handleSetUserAccount, handleSetUserAccounts } =
    useContext(CryptoContext);

  function handleCreateAccount(firstName, lastName, email, password) {
    const newAccount = {
      firstName,
      lastName,
      email,
      password,
      balance: 150000,
      wallet: [],
      purchaseHistory: [],
      favoritedCryptos: [],
    };

    userAccounts.push(newAccount);
    handleSetUserAccounts(userAccounts);

    handleSetUserAccount(newAccount);

    localStorage.setItem(
      "Blajvinance-User-Accounts",
      JSON.stringify(userAccounts)
    );
    localStorage.setItem(
      "Blajvinance-Logged-In-As",
      JSON.stringify(newAccount)
    );
  }

  const credentialsContextValue = {
    handleCreateAccount,
  };

  return (
    <CryptoCredentialsContext.Provider value={credentialsContextValue}>
      {children}
    </CryptoCredentialsContext.Provider>
  );
}

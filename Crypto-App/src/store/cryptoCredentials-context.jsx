import { createContext, useEffect, useState } from "react";

export const CryptoCredentialsContext = createContext({
  account: {},
  userAccounts: [],
  handleCreateAccount: () => {},
});

export default function CryptoCredentialsContextProvider({ children }) {
  const [account, setAccount] = useState({});
  const [loggedInAs, setLoggedInAs] = useState({});

  const userAccounts =
    JSON.parse(localStorage.getItem("Blajvinance-User-Accounts")) || [];

  useEffect(() => {
    const alreadyLoggedIn = JSON.parse(
      localStorage.getItem("Blajvinance-Logged-In-As")
    );

    if (alreadyLoggedIn) {
      setAccount(alreadyLoggedIn);
      setLoggedInAs(alreadyLoggedIn);
    }
  }, []);

  function handleCreateAccount(firstName, lastName, email, password) {
    const newAccount = {
      firstName,
      lastName,
      email,
      password,
    };

    setAccount(newAccount);
    setLoggedInAs(newAccount);

    userAccounts.push(newAccount);

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
    userAccounts,
    account,
    handleCreateAccount,
  };

  return (
    <CryptoCredentialsContext.Provider value={credentialsContextValue}>
      {children}
    </CryptoCredentialsContext.Provider>
  );
}

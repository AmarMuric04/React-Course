import Header from "./components/Single Components/Header.jsx";
import Menu from "./components/Single Components/Menu.jsx";
import CryptoContextProvider from "./store/crypto-context.jsx";
import InterestingCryptos from "./components/Containers/InterestingCryptosContainer.jsx";
import CredentialsPage from "./components/Credentials/CredentialsPage.jsx";
import CryptoListContainer from "./components/Containers/CryptoListContainer.jsx";
import BuyCryptoPage from "./components/BuyCryptoPage.jsx";

import { useState } from "react";
import CryptoSearchContextProvider from "./store/cryptoSearch-context.jsx";

function App() {
  const [showPage, setShowPage] = useState("home");
  const [credentialsPage, setCredentialsPage] = useState(true);

  function handleChangeMainPage(identifier, credentialsPageParam = "login") {
    setShowPage(identifier);
    credentialsPageParam && setCredentialsPage(credentialsPageParam);
  }

  return (
    <CryptoContextProvider>
      {showPage === "home" && (
        <main className="bg-stone-200 max-w-screen mt-16 h-auto min-h-screen flex flex-col justify-center items-center">
          <Header onChangeMainPage={handleChangeMainPage} />
          <div className="flex flex-col w-[100rem] mt-24">
            <InterestingCryptos />
            <section>
              <CryptoSearchContextProvider>
                <Menu />
                <CryptoListContainer onCryptoClick={handleChangeMainPage} />
              </CryptoSearchContextProvider>
            </section>
          </div>
        </main>
      )}
      {showPage === "credentials" && (
        <CredentialsPage
          page={credentialsPage}
          onChangeMainPage={handleChangeMainPage}
        />
      )}
      {showPage === "buycrypto" && (
        <BuyCryptoPage onChangeMainPage={handleChangeMainPage} />
      )}
    </CryptoContextProvider>
  );
}

export default App;

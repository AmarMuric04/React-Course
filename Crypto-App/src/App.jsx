import Header from "./components/Header";
import Menu from "./components/Menu";
import CryptoContextProvider from "./store/crypto-context.jsx";
import InterestingCryptos from "./components/InterestingCryptos.jsx";
import CredentialsPage from "./components/CredentialsPage";
import CryptoListContainer from "./components/CryptoListContainer.jsx";

import { useState } from "react";

function App() {
  const [showPage, setShowPage] = useState("home");
  const [credentialsPage, setCredentialsPage] = useState(true);

  function handleChangeMainPage(identifier, credentialsPageParam = "login") {
    setShowPage(identifier);
    credentialsPageParam && setCredentialsPage(credentialsPageParam);
  }

  return (
    <>
      {showPage === "home" && (
        <CryptoContextProvider>
          <main className="bg-stone-200 max-w-screen mt-16 h-auto min-h-screen flex flex-col justify-center items-center">
            <Header onChangeMainPage={handleChangeMainPage} />
            <div className="flex flex-col w-[100rem] mt-24">
              <InterestingCryptos />
              <section>
                <Menu />
                <CryptoListContainer />
              </section>
            </div>
          </main>
        </CryptoContextProvider>
      )}
      {showPage === "credentials" && (
        <CredentialsPage
          page={credentialsPage}
          onChangeMainPage={handleChangeMainPage}
        />
      )}
    </>
  );
}

export default App;

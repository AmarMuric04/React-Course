import Header from "./components/Header";
import Menu from "./components/Menu";
import FilterCryptoList from "./components/FilterCryptoList";
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
          <main className="bg-stone-200 max-w-screen mt-[4.5rem] h-auto flex flex-col justify-center items-center">
            <Header onChangeMainPage={handleChangeMainPage} />
            <div className="flex flex-col w-[100rem] mt-24">
              <h1 className="text-4xl font-bold uppercase mb-8">
                Market overview
              </h1>
              <InterestingCryptos />
              <section>
                <Menu onChangeMainPage={handleChangeMainPage} />
                <FilterCryptoList />
              
                <CryptoListContainer />
              </section>
            </div>
          </main>
        </CryptoContextProvider>
      )}
      {showPage === "credentials" && <CredentialsPage page={credentialsPage} />}
    </>
  );
}

export default App;

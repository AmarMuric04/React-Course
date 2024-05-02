// import Header from "./components/Header";
// import CryptoList from "./components/CryptoList";
// import FavoriteCryptoList from "./components/FavoriteCryptoList";
// import FilterCryptoList from "./components/FilterCryptoList";
// import CryptoContextProvider from "./store/crypto-context.jsx";
// import InterestingCryptos from "./components/InterestingCryptos.jsx";
import { useState } from "react";

import SignUp from "./components/SignUp";

function App() {
  const [showFavorite, setShowFavorite] = useState(false);

  function handleShowFavorite(identifier) {
    identifier === false ? setShowFavorite(false) : setShowFavorite(true);
  }

  return (
    <>
      <SignUp />
      {/* <CryptoContextProvider>
        <main className="bg-stone-200 max-w-screen mt-[4.5rem] h-auto flex flex-col justify-center items-center">
          <Header />
          <div className="flex flex-col w-[100rem] mt-24">
            <h1 className="text-4xl font-bold uppercase mb-8">
              Market overview
            </h1>
            <InterestingCryptos />
            <section>
              <ul className="flex gap-10 text-xl px-12">
                <li
                  className="cursor-pointer"
                  onClick={() => handleShowFavorite(false)}
                >
                  All Cryptos
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleShowFavorite(true)}
                >
                  Favorite Cryptos
                </li>
                <li>My Wallet</li>
                <li>GP Cryptos</li>
                <li>BP Cryptos</li>
              </ul>
              <FilterCryptoList type={!showFavorite ? "main" : ""} />
              <ul className="flex gap-16 px-8 relative text-sm text-stone-700">
                <li className="w-24">Favorite</li>
                <li className="w-72">Name</li>
                <li className="w-40">Value</li>
                <li className="w-40">Market cap</li>
                <li className="w-40">Volume (24hr)</li>
                <li className="w-48">Change (24hr)</li>
                <li className="w-40">Trade</li>
              </ul>
              {showFavorite ? <FavoriteCryptoList /> : <CryptoList />}
            </section>
          </div>
        </main>
      </CryptoContextProvider> */}
    </>
  );
}

export default App;

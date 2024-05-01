// import Header from "./components/Header";
// import CryptoList from "./components/CryptoList";
// import FilterCryptoList from "./components/FilterCryptoList";
// import CryptoContextProvider from "./store/crypto-context.jsx";
// import InterestingCryptosContainer from "./components/InterestingCryptosContainer.jsx";

import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <SignUp />
      {/* <CryptoContextProvider>
        <main className="bg-stone-200 max-w-screen mt-[4.5rem] h-auto flex flex-col justify-center items-center">
          <Header />
          <div className="flex flex-col w-4/5 mt-24">
            <section className="flex flex-wrap w-ful justify-between px-16 mb-16">
              <InterestingCryptosContainer filterBy="volume" />
              <InterestingCryptosContainer filterBy="change" />
              <InterestingCryptosContainer filterBy="marketcap" />
            </section>
            <section>
              <FilterCryptoList />
              <CryptoList />
            </section>
          </div>
        </main>
      </CryptoContextProvider> */}
    </>
  );
}

export default App;

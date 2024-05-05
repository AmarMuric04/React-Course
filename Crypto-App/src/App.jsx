import Menu from "./components/Single Components/Menu.jsx";
import InterestingCryptos from "./components/Containers/InterestingCryptosContainer.jsx";
import CryptoListContainer from "./components/Containers/CryptoListContainer.jsx";
import Header from "./components/Single Components/Header.jsx";
import CryptoSearchContextProvider from "./store/cryptoSearch-context.jsx";
import Footer from "./components/Single Components/Footer.jsx";

function App() {
  return (
    <>
      <main className="bg-stone-200 max-w-screen mt-16 h-auto min-h-screen flex flex-col justify-center items-center">
        <Header />
        <div className="flex flex-col w-[100rem] mt-24">
          <InterestingCryptos />
          <section>
            <CryptoSearchContextProvider>
              <Menu />
              <CryptoListContainer />
            </CryptoSearchContextProvider>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;

import Menu from "./components/Single Components/Menu.jsx";
import InterestingCryptos from "./components/Containers/InterestingCryptosContainer.jsx";
import CryptoListContainer from "./components/Containers/CryptoListContainer.jsx";
import CryptoSearchContextProvider from "./store/cryptoSearch-context.jsx";
import UserBalance from "./components/Single Components/UserBalance.jsx";
import { Link } from "react-router-dom";

function App() {
  document.title = `Blajvinance | Crypto List`;

  return (
    <main className="bg-[#1A1C22ff] overflow-hidden text-white max-w-screen mt-16 h-auto min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col w-[100rem] max-w-full mt-8">
        <div className="flex justify-between items-center flex-col md:flex-row my-8">
          <p className="flex items-center gap-3 text-md font-bold text-yellow-400 my-8">
            <Link to="/" className="cursor-pointer hover:underline">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.879 17.243a1 1 0 0 1-.707-1.707L12.707 12L9.172 8.464a1 1 0 0 1 1.414-1.414l4.242 4.243a1 1 0 0 1 0 1.414l-4.242 4.243a.997.997 0 0 1-.707.293"
              />
            </svg>
            <p>Crypto List</p>
          </p>
          <div className="flex gap-2 items-end">
            <p>Bal:</p>
            <UserBalance />
          </div>
        </div>
        <InterestingCryptos />
        <section>
          <CryptoSearchContextProvider>
            <Menu />
            <CryptoListContainer />
          </CryptoSearchContextProvider>
        </section>
      </div>
    </main>
  );
}

export default App;

// import { Link } from "react-router-dom";
import Header from "../Single Components/Header";
import Footer from "../Single Components/Footer";
import InterestingCryptos from "../Single Components/InterestingCryptos";
import { cryptoQuestions } from "../../assets/mainQuestions";
import FAQ from "../BuyCryptoPage/BuyCryptoLeftSide/components/FAQ";
import CardsContainer from "./components/CardsContainer";
import WalletWorth from "./components/WalletWorth";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";

export default function LandingPage() {
  const { userAccount } = useContext(CryptoContext);

  document.title = `Blajvinance | Crypto Currency Exchange Platform`;

  return (
    <>
      <Header />
      <main className="w-full overflow-hidden pb-96 mt-16 min-h-screen text-white bg-[#1A1C22ff] grid place-items-center">
        <div className="flex pt-24 w-full max-w-full overflow-hidden lg:w-3/4 h-full justify-between gap-40 lg:gap-0 items-center lg:items-start flex-wrap flex-col lg:flex-row">
          <div className="w-4/5 lg:w-[38%] flex flex-col gap-10 items-center lg:items-start">
            <h1 className="font-bold text-[3.5rem] md:text-[4rem] leading-tight text-center lg:text-start">
              <span className="text-yellow-400">Join us</span> and Start{" "}
              <span className="text-yellow-400">Your</span> Crypto Journey
            </h1>
            <WalletWorth />
            {userAccount ? (
              <Link
                to="/crypto-list"
                className="bg-yellow-400 font-bold text-center text-black py-3 px-6 rounded-md"
              >
                Invest more
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-yellow-400 font-bold text-center text-black py-3 px-6 rounded-md"
              >
                Log in & invest
              </Link>
            )}
          </div>
          <div className="w-[95%] lg:w-1/2">
            <InterestingCryptos classes="w-full" filterBy="change" amount="3" />

            <Link
              to="/crypto-list"
              className="flex justify-end underline text-gray-400 hover:text-white transition-all"
            >
              Take a look at more cryptos
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-3/4 mt-48 justify-around flex flex-col gap-2 mb-64">
          <h1 className="text-[3rem] font-bold my-4 text-center md:text-start">
            What's going on in the crypto world today?
          </h1>
          <CardsContainer />
        </div>
        <div className="w-[95%] md:w-1/2">
          <h1 className="text-[4rem] font-bold md:ml-[-3rem]">
            People also ask:
          </h1>
          <FAQ questions={cryptoQuestions} />
        </div>
      </main>
      <Footer />
    </>
  );
}

// import { Link } from "react-router-dom";
import Header from "../Single Components/Header";
import Footer from "../Single Components/Footer";
import InteresetingCryptos from "../Single Components/InterestingCryptos";
import { cryptoQuestions } from "../../assets/mainQuestions";
import FAQ from "../BuyCryptoPage/BuyCryptoLeftSide/components/FAQ";
import CardsContainer from "./components/CardsContainer";
import WalletWorth from "./components/WalletWorth";

import { Link } from "react-router-dom";

export default function LandingPage() {
  window.scrollTo(0, 0);

  document.title = `Blajvinance | Crypto Currency Exchange Platform`;

  return (
    <>
      <Header />
      <main className="w-full pb-96 mt-16 min-h-screen text-white bg-[#1A1C22ff] grid place-items-center">
        <div className="flex pt-24 w-[80rem] h-full gap-40">
          <div className="w-1/2 flex flex-col gap-10 items-start">
            <h1 className="font-bold text-[4rem] leading-tight">
              <span className="text-yellow-400">Join us</span> and Start{" "}
              <span className="text-yellow-400">Your</span> Crypto Journey
            </h1>
            <WalletWorth />
            <Link
              to="/crypto-list"
              className="bg-yellow-400 font-bold text-center text-black py-3 px-6 rounded-md"
            >
              Invest more
            </Link>
          </div>
          <div className="w-1/2">
            <InteresetingCryptos
              classes="w-full"
              filterBy="change"
              amount="3"
            />
            <Link
              to="/crypto-list"
              className="flex justify-end underline text-gray-400 hover:text-white transition-all"
            >
              Take a look at more cryptos
            </Link>
          </div>
        </div>
        <div className="w-3/4 mt-48 justify-around flex flex-col gap-2 mb-64">
          <h1 className="text-[3rem] font-bold my-4">
            What's going on in the crypto world today?
          </h1>
          <CardsContainer />
        </div>
        <div className="w-1/2">
          <h1 className="text-[4rem] font-bold ml-[-3rem]">People also ask:</h1>
          <FAQ questions={cryptoQuestions} />
        </div>
      </main>
      <Footer />
    </>
  );
}

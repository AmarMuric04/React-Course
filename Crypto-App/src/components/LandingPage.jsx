// import { Link } from "react-router-dom";
import Header from "./Single Components/Header";
import Footer from "./Single Components/Footer";
import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";
import InteresetingCryptos from "./Single Components/InterestingCryptos";
import { cryptoQuestions } from "../assets/mainQuestions";
import FAQ from "./BuyCryptoPage/BuyCryptoLeftSide/components/FAQ";
import image1 from "/public/main1.jpeg";
import Image from "./Single Components/Image";
import image2 from "/public/main2.jpg";
import image3 from "/public/main3.png";
import image4 from "/public/main4.jpg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);

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
            <div className="flex flex-col gap-2 ">
              <p>Your Estimated Balance</p>
              <p className="truncate-[0.2rem] text-xl font-bold">
                $ {handleCustomToFixed(userAccount.balance)}
              </p>
              <p>
                Wallet worth: ${" "}
                {handleCustomToFixed(
                  userAccount.wallet.reduce((accumulator, currentValue) => {
                    return (
                      accumulator +
                      currentValue.amountOfCoins * currentValue.moneySpent
                    );
                  }, 0)
                )}
              </p>
            </div>
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
          </div>
        </div>
        <div className="w-3/4 mt-16 justify-around  flex gap-2 mb-64">
          <div className="w-1/4 h-96  border-[0.1rem] border-[#23272Eff] bg-[#1A1C22ff]  rounded-lg flex flex-col items-center p-8 justify-center hover:bg-[#23272Eff] hover:scale-[1.1] transition-all">
            <Image image={image1} className="h-32" />
            <span className="flex font-bold text-3xl tracking-[0.2rem] text-nowrap">
              ${" "}
              {handleCustomToFixed(
                _mainCoinsList.reduce(
                  (accumulator, currentValue) =>
                    accumulator + Number(currentValue.volumeUsd24Hr),
                  0
                )
              )}{" "}
            </span>
            <h1 className="text-lg text-center text-gray-400 mt-4">
              Was invested into crypto in the last 24 hours
            </h1>
          </div>
          <div className="w-1/4 h-96 justify-center  border-[0.1rem] border-[#23272Eff] bg-[#1A1C22ff]  rounded-lg flex flex-col items-center p-8 hover:bg-[#23272Eff] hover:scale-[1.1] transition-all">
            {handleCustomToFixed(
              _mainCoinsList.reduce(
                (accumulator, currentValue) =>
                  accumulator + Number(currentValue.changePercent24Hr),
                0
              )
            ) > 0 ? (
              <Image image={image3} className="h-32" />
            ) : (
              <Image image={image4} className="h-32" />
            )}
            <span className="text-4xl tracking-[0.2rem] font-bold">
              {handleCustomToFixed(
                _mainCoinsList.reduce(
                  (accumulator, currentValue) =>
                    accumulator + Number(currentValue.changePercent24Hr),
                  0
                )
              )}
              %{" "}
            </span>
            <h1 className="text-gray-400 text-lg mt-4">
              Status of Crypto in the last 24 hours
            </h1>
          </div>{" "}
          <div className="w-1/4 h-96 justify-center  border-[0.1rem] border-[#23272Eff] bg-[#1A1C22ff]  rounded-lg flex flex-col items-center p-8 hover:bg-[#23272Eff] hover:scale-[1.1] transition-all">
            <Image image={image2} className="h-32" />
            <span className="text-4xl font-bold tracking-[0.2rem] truncate-[0.2rem] w-full text-center">
              590 Trillion
            </span>
            <h1 className="mt-4 text-lg text-center text-gray-400">
              Worth of crypto supply ready to be bought
            </h1>
          </div>
        </div>
        <div className="w-1/2">
          <FAQ questions={cryptoQuestions} />
        </div>
      </main>
      <Footer />
    </>
  );
}

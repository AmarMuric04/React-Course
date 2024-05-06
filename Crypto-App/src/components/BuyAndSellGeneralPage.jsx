import Footer from "./Single Components/Footer";
import Header from "./Single Components/Header";
import { Link } from "react-router-dom";
import UserBalance from "./Single Components/UserBalance";
import Title from "./BuyCryptoPage/BuyCryptoLeftSide/components/Title";
import SubTitle from "./BuyCryptoPage/BuyCryptoLeftSide/components/SubTitle";
import InterestingCrytpos from "./Single Components/InterestingCryptos";

export default function BuyAndSellGeneralPage({ type }) {
  console.log(type);
  return (
    <>
      <Header />
      <main className="bg-[#1A1C22ff] text-white h-full min-h-screen w-full min-w-screen flex flex-col items-center mt-16">
        <div className="flex flex-col w-[80rem] mt-16">
          <div className="flex w-full justify-between items-center">
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
              <p>
                {`${type.slice(0, 1).toUpperCase()}` + `${type.slice(1)}`}{" "}
                Crypto
              </p>
            </p>
            <div className="flex gap-2 items-end">
              <p>Bal:</p>
              <UserBalance />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="w-1/2">
              <h1 className="text-4xl tracking-[0.1rem] my-8 font-bold">
                {`${type.slice(0, 1).toUpperCase() + type.slice(1)}`} Crypto
              </h1>
              <InterestingCrytpos
                classes="w-full"
                filterBy="change"
                amount="3"
              />
            </div>
            <div className="w-1/3 h-[30rem] my-16 rounded-lg bg-[#23272Eff]"></div>
          </div>
          <Title
            title={`How to ${
              type.slice(0, 1).toUpperCase() + type.slice(1)
            } Crypto`}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

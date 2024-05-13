import Footer from "../Single Components/Footer";
import Header from "../Single Components/Header";
import { Link } from "react-router-dom";
import UserBalance from "../Single Components/UserBalance";
import Title from "../BuyCryptoPage/BuyCryptoLeftSide/components/Title";
import InterestingCrytpos from "../Single Components/InterestingCryptos";
import BuyCryptoInGeneralInputs from "./components/BuyCryptoInGeneralInputs";
import SellCryptoInGeneralInputs from "./components/SellCryptoInGeneralInputs";
import { useState } from "react";
import Buy1 from "/public/buy1.svg";
import Buy2 from "/public/buy2.svg";
import Buy3 from "/public/buy3.svg";
import Sell1 from "/public/sell1.svg";
import Sell2 from "/public/sell2.svg";
import Sell3 from "/public/sell3.svg";
import Image from "../Single Components/Image";

export default function BuyGeneralCrypto({ type }) {
  window.scrollTo(0, 0);

  const [action, setAction] = useState(false);
  const [modal, setModal] = useState("");

  function handleSetAction(modal) {
    setModal(modal);
    setAction(true);
  }

  function handleRemoveAction() {
    setAction(false);
  }

  return (
    <>
      {action && modal}
      {type === "buy" && <Header />}
      {type === "sell" && <Header />}
      <main className="bg-[#1A1C22ff] text-white h-full min-h-screen w-full min-w-screen flex flex-col items-center mt-16">
        <div className="flex flex-col max-w-full w-[80rem] mt-16">
          <div className="flex w-full justify-between items-center flex-col md:flex-row">
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
              <Link
                to="/crypto-list"
                className="cursor-pointer hover:underline"
              >
                Crypto List
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
          <h1 className="ml-8 md:ml-0 text-4xl tracking-[0.1rem] my-8 font-bold">
            {`${type.slice(0, 1).toUpperCase() + type.slice(1)}`} Crypto
          </h1>
          <div className="flex justify-center gap-32 md:gap-16 lg:justify-between flex-wrap-reverse">
            <div className="w-[98%] md:w-1/2">
              <InterestingCrytpos
                classes="w-full"
                filterBy="change"
                amount="3"
              />
            </div>
            <div className="w-[95%] sm:w-3/5 md:w-2/5 h-[30rem] md:h-[30rem] md:my-16 rounded-lg bg-[#23272Eff] flex flex-col p-8 pt-0">
              <div className="flex justify-between mb-4">
                <Link
                  to="/buy-crypto"
                  className={`font-bold text-center w-1/2 text-xl py-4 border-b-[0.2rem] border-transparent ${
                    type === "buy" && "border-yellow-400 bg-[#1A1C22ff]"
                  }`}
                >
                  Buy
                </Link>
                <Link
                  to="/sell-crypto"
                  className={`font-bold text-center w-1/2 text-xl py-4 border-b-[0.2rem] border-transparent ${
                    type === "sell" && "border-yellow-400 bg-[#1A1C22ff]"
                  }`}
                >
                  Sell
                </Link>
              </div>
              {type === "buy" && (
                <BuyCryptoInGeneralInputs
                  onSell={handleSetAction}
                  onCancel={handleRemoveAction}
                />
              )}
              {type === "sell" && (
                <SellCryptoInGeneralInputs
                  onSell={handleSetAction}
                  onCancel={handleRemoveAction}
                />
              )}
            </div>
          </div>
          <Title
            title={`How to ${
              type.slice(0, 1).toUpperCase() + type.slice(1)
            } Crypto`}
          />
          <div className="w-full gap-5 md:gap-0 flex justify-center md:justify-between mb-16 flex-wrap">
            <div className="w-full sm:w-1/2 md:w-[30%] border-[0.1rem] border-[#23272Eff] rounded-xl p-8 flex-col flex gap-3">
              {type === "buy" ? (
                <Image className="w-32" image={Buy1} svgSize="2" />
              ) : (
                <Image className="w-32" image={Sell1} svgSize="2" />
              )}
              <h1 className="text-xl">1.Enter Amount & Select Payment</h1>
              <p className="text-gray-400">
                Enter the amount, select the available payment method, and
                choose the payment account{" "}
                {type === "buy" ? "bind the payment" : "receive the payment"}.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-[30%] border-[0.1rem] border-[#23272Eff] rounded-xl p-8 flex-col flex gap-3">
              {type === "buy" ? (
                <Image className="w-32" image={Buy2} svgSize="2" />
              ) : (
                <Image className="w-32" image={Sell2} svgSize="2" />
              )}
              <h1 className="text-xl">2.Confirm Order</h1>
              <p className="text-gray-400">
                Confirmation of transaction detail information, including
                trading pair quotes, fees, and other explanatory tips.
              </p>
            </div>
            <div className="w-full sm:w-1/2 md:w-[30%] border-[0.1rem] border-[#23272Eff] rounded-xl p-8 flex-col flex gap-3">
              {type === "buy" ? (
                <Image className="w-32" image={Buy3} svgSize="2" />
              ) : (
                <Image className="w-32" image={Sell3} svgSize="2" />
              )}
              <h1 className="text-xl">
                3.Receive {type === "buy" ? "Crypto" : "Cash"}
              </h1>
              <p className="text-gray-400">
                After successful payment, the purchased{" "}
                {type === "buy" ? "crypto" : "digital currency"} to will reach
                Spot Wallet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Header from "./Single Components/Header";
import Footer from "./Single Components/Footer";
import Image from "./Single Components/Image";
import WalletCryptoList from "./WalletCryptoList";
import PFP from "/public/PFP.jpg";
import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";
import TransactionsList from "./TransactionsList";

export default function WalletPage() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);

  console.log(userAccount.wallet.length);

  return (
    <>
      <Header />
      <main className="flex justify-between w-full h-full bg-[#1A1C22ff] mt-16">
        <div className="w-1/3 bg-black min-h-screen flex flex-col gap-3 items-center p-8 text-white">
          <div className="bg-[#23272Eff] h-48 w-[90%] rounded-lg p-8 flex flex-col justify-between">
            <h1 className="font-bold text-lg">This wallet belongs to:</h1>
            <div className="flex gap-5 items-center">
              <Image
                image={PFP}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <p className="font-semibold tracking-[0.1rem]">Amar,</p>
                  <p className="font-semibold tracking-[0.1rem]">Muric</p>
                </div>
                <div className="flex">
                  <p className="text-gray-400">muricamar2004@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#23272Eff] h-48 w-[90%] rounded-lg p-8 flex flex-col justify-between">
            <h1 className="font-bold text-lg tracking-[0.1rem]">
              WALLET DETAILS
            </h1>
            <div className="flex gap-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 4H2v16h20zm-6.25 10.09L4 11.22V10h16v.53zM4 6h16v2H4z"
                />
              </svg>
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <p className="text-xl text-gray-400">
                    Available balance (USD)
                  </p>
                </div>
                <div className="flex">
                  <p className="font-semibold tracking-[0.1rem]">
                    $ {handleCustomToFixed(userAccount.balance)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 bg-[#1A1C22ff] h-full text-white p-16">
          <div className="w-full flex gap-3 flex-col">
            <div className="flex justify-between px-16">
              <p className="uppercase tracking-[0.1rem] font-bold text-3xl">
                Total Invested:
              </p>
              <p className="uppercase tracking-[0.1rem] font-bold text-4xl">
                ${" "}
                {handleCustomToFixed(
                  Number(
                    userAccount.wallet.reduce((accumulator, currentValue) => {
                      return accumulator + Number(currentValue.moneySpent);
                    }, 0)
                  )
                )}
              </p>
            </div>
            <div className="flex justify-between px-16">
              <p className="uppercase tracking-[0.1rem] font-bold text-2xl text-gray-400">
                Current wallet worth
              </p>
              <p className="uppercase tracking-[0.1rem] font-bold text-2xl text-gray-400">
                ${" "}
                {handleCustomToFixed(
                  Number(
                    userAccount.wallet.reduce((accumulator, currentValue) => {
                      const coin = _mainCoinsList.find(
                        (coin) => coin.id === currentValue.id
                      );
                      return (
                        accumulator +
                        Number(currentValue.amountOfCoins) *
                          Number(coin.priceUsd)
                      );
                    }, 0)
                  )
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full mt-64">
            <div className="w-full flex gap-10 text-lg mb-8">
              <button className="py-2 px-4">Cryptos</button>
              <button className="py-2 px-4">Transactions</button>
              <button className="py-2 px-4">Active Trades</button>
              <button className="py-2 px-4">Trade History</button>
            </div>
            <ul className="flex gap-2 md:gap-16 md:px-8 relative text-xs md:text-sm text-gray-400 text-center">
              <li className="w-1/6 text-start">Transaction type</li>
              <li className="w-1/6 text-start">
                <span className="hidden md:block">Transaction</span>
                <span className="md:hidden">Buy price</span>
              </li>
              <li className="w-1/6 flex gap-2">
                <p>Got</p>
              </li>
              <li className="w-1/6 flex gap-2">
                <span>Spent</span>
              </li>
              <li className="w-1/6">
                <p>Time</p>
              </li>
              <li className="w-20">Action</li>
            </ul>
            <TransactionsList />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

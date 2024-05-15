import Header from "./Single Components/Header";
import Footer from "./Single Components/Footer";
import Image from "./Single Components/Image";
import WalletCryptoListContainer from "./WalletCryptoListContainer";
import WalletCryptoTellers from "./WalletCryptoTellers";
import PFP from "/public/PFP.jpg";
import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";
import CryptoWalletContextProvider from "../store/cryptoWallet-context";
import WalletCryptoMenu from "./WalletCryptoMenu";

export default function WalletPage() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);

  if (!_mainCoinsList || _mainCoinsList.length === 0) {
    return (
      <div className="w-screen h-screen bg-[#1A1C22ff] grid place-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
          className="text-yellow-400"
        >
          <rect width="2.8" height="12" x="1" y="6" fill="currentColor">
            <animate
              id="svgSpinnersBarsScale0"
              attributeName="y"
              begin="0;svgSpinnersBarsScale1.end-0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="0;svgSpinnersBarsScale1.end-0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="5.8" y="6" fill="currentColor">
            <animate
              attributeName="y"
              begin="svgSpinnersBarsScale0.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScale0.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="10.6" y="6" fill="currentColor">
            <animate
              attributeName="y"
              begin="svgSpinnersBarsScale0.begin+0.2s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScale0.begin+0.2s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="15.4" y="6" fill="currentColor">
            <animate
              attributeName="y"
              begin="svgSpinnersBarsScale0.begin+0.3s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScale0.begin+0.3s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="20.2" y="6" fill="currentColor">
            <animate
              id="svgSpinnersBarsScale1"
              attributeName="y"
              begin="svgSpinnersBarsScale0.begin+0.4s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScale0.begin+0.4s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="12;22;12"
            />
          </rect>
        </svg>
      </div>
    );
  }

  return (
    <CryptoWalletContextProvider>
      <Header />
      <main className="flex flex-col min-h-screen lg:flex-row justify-between w-full h-full bg-[#1A1C22ff] mt-16">
        <div className="w-full lg:w-1/3 bg-black min-h-auto flex lg:flex-col gap-3 sm:items-start lg:items-center py-8 md:p-8 text-white flex-col items-center sm:flex-row">
          <div className="bg-[#23272Eff] min-w-64 md:min-w-48 h-48 w-[90%] rounded-lg p-8 flex flex-col justify-between">
            <h1 className="font-bold text-lg">This wallet belongs to:</h1>
            <div className="flex gap-5 items-center">
              <Image
                image={PFP}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div className="flex flex-col overflow-hidden  whitespace-nowrap">
                <div className="flex gap-3">
                  <p className="font-semibold tracking-[0.1rem]">
                    {userAccount ? userAccount.firstName : "*****,"}
                  </p>
                  <p className="font-semibold tracking-[0.1rem] truncate">
                    {userAccount ? userAccount.lastName : "*****"}
                  </p>
                </div>
                <div className="flex ">
                  <p className="text-gray-400 truncate">
                    {userAccount ? userAccount.email : "********"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#23272Eff] min-w-64 md:min-w-48 h-48 w-[90%] rounded-lg p-8 flex flex-col justify-between">
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
                  <p className="text-md xl:text-lg text-gray-400">
                    Available balance (USD)
                  </p>
                </div>
                <div className="flex">
                  <p className="font-semibold tracking-[0.1rem]">
                    ${" "}
                    {userAccount
                      ? handleCustomToFixed(userAccount.balance)
                      : "*****"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 bg-[#1A1C22ff] h-full text-white md:p-16 py-8">
          <div className="w-full flex gap-3 flex-col">
            <div className="flex justify-between px-4 md:px-16">
              <p className="uppercase tracking-[0.1rem] font-bold text-md md:text-3xl">
                Total Invested:
              </p>
              <p className="uppercase tracking-[0.1rem] font-bold text-lg md:text-4xl">
                ${" "}
                {userAccount
                  ? handleCustomToFixed(
                      Number(
                        userAccount.wallet.reduce(
                          (accumulator, currentValue) => {
                            return (
                              accumulator + Number(currentValue.moneySpent)
                            );
                          },
                          0
                        )
                      )
                    )
                  : "*****"}
              </p>
            </div>
            <div className="flex justify-between px-4 md:px-16">
              <p className="uppercase tracking-[0.1rem] font-bold text-xs md:text-2xl text-gray-400">
                Current wallet worth
              </p>
              <p className="uppercase tracking-[0.1rem] font-bold text-xs md:text-2xl text-gray-400">
                ${" "}
                {userAccount
                  ? handleCustomToFixed(
                      Number(
                        userAccount.wallet.reduce(
                          (accumulator, currentValue) => {
                            const coin = _mainCoinsList.find(
                              (coin) => coin.id === currentValue.id
                            );

                            return (
                              accumulator +
                              Number(currentValue.amountOfCoins) *
                                Number(coin.priceUsd)
                            );
                          },
                          0
                        )
                      )
                    )
                  : "*****"}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full mt-64">
            <WalletCryptoMenu />
            <WalletCryptoTellers />
            <WalletCryptoListContainer />
          </div>
        </div>
      </main>
      <Footer />
    </CryptoWalletContextProvider>
  );
}

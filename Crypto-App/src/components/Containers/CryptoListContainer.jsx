import FavoriteCryptoList from "../DifferentCryptoLists/FavoriteCryptoList";
import CryptoList from "../DifferentCryptoLists/CryptoList";
import Performers from "../Single Components/Performers";
import FilterCryptoList from "../DifferentCryptoLists/FilterCryptoList";
import SearchedCryptoList from "../DifferentCryptoLists/SearchedCryptoList";
import MyWalletCryptoList from "../DifferentCryptoLists/MyWalletCryptoList";
import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";
import Modal from "../Single Components/Modal";
import ActiveTradesCryptoList from "../DifferentCryptoLists/ActiveTradesCryptoList";

export default function CryptoListContainer() {
  const { showCryptoList, _mainCoinsList } = useContext(CryptoContext);

  if (!_mainCoinsList || _mainCoinsList.length === 0) {
    return (
      <div className="w-auto h-96 grid place-content-center">
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
    <div className="mb-64">
      <FilterCryptoList />

      {showCryptoList !== "mywallet" && showCryptoList !== "activetrades" && (
        <ul className="flex gap-16 px-8 relative text-sm text-gray-400">
          <li className="w-24">Favorite</li>
          <li className="w-80">Name</li>
          <li className="w-40">Value</li>
          <li className="w-40">Market cap</li>
          <li className="w-40">Volume (24hr)</li>
          <li className="w-48">Change (24hr)</li>
          <li className="w-40">Trade</li>
        </ul>
      )}
      {(showCryptoList === "mywallet" || showCryptoList === "activetrades") && (
        <ul className="flex gap-16 px-8 relative text-sm text-gray-400">
          <li className="w-1/6">Name</li>
          <li className="w-1/6">Avg. Buying Price</li>
          <li className="w-1/6">Amount of Coins</li>
          <li className="w-1/6">Money Spent</li>
          <li className="w-1/6">Price Change</li>
          <li className="w-20">Action</li>
        </ul>
      )}
      {(showCryptoList === "gp" || showCryptoList === "bp") && (
        <Performers type={showCryptoList} />
      )}
      {showCryptoList === "favorite" && <FavoriteCryptoList />}
      {showCryptoList === "main" && <CryptoList />}
      {showCryptoList === "search" && <SearchedCryptoList />}
      {showCryptoList === "mywallet" && <MyWalletCryptoList />}
      {showCryptoList === "activetrades" && (
        <Modal height="h-[30rem]" width="w-[25rem]">
          <div className="border-[0.1rem] border-[#23272Eff] w-full p-8 rounded-xl h-full flex gap-5 items-center justify-center flex-col">
            <p>Coming soon...</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              />
              <rect
                width="2"
                height="7"
                x="11"
                y="6"
                fill="currentColor"
                rx="1"
              >
                <animateTransform
                  attributeName="transform"
                  dur="9s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </rect>
              <rect
                width="2"
                height="9"
                x="11"
                y="11"
                fill="currentColor"
                rx="1"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.75s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </rect>
            </svg>
            <p className="mb-8">Trades will include:</p>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-start text-sm ">
                More fun way of investing in cryptos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  className="text-green-400"
                >
                  <defs>
                    <mask id="lineMdCheckAll0">
                      <g
                        fill="none"
                        stroke="#fff"
                        stroke-dasharray="22"
                        stroke-dashoffset="22"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M2 13.5l4 4l10.75 -10.75">
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                        <path
                          stroke="#000"
                          stroke-width="4"
                          d="M7.5 13.5l4 4l10.75 -10.75"
                          opacity="0"
                        >
                          <set attributeName="opacity" begin="0.4s" to="1" />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.4s"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                        <path d="M7.5 13.5l4 4l10.75 -10.75" opacity="0">
                          <set attributeName="opacity" begin="0.4s" to="1" />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.4s"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                      </g>
                    </mask>
                  </defs>
                  <rect
                    width="24"
                    height="24"
                    fill="currentColor"
                    mask="url(#lineMdCheckAll0)"
                  />
                </svg>
              </li>
              <li className="flex gap-2 items-start text-sm ">
                Choosing multiplier (2x, 5x, 10x, 25x, 50x, 100x)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  className="text-green-400"
                >
                  <defs>
                    <mask id="lineMdCheckAll0">
                      <g
                        fill="none"
                        stroke="#fff"
                        stroke-dasharray="22"
                        stroke-dashoffset="22"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M2 13.5l4 4l10.75 -10.75">
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                        <path
                          stroke="#000"
                          stroke-width="4"
                          d="M7.5 13.5l4 4l10.75 -10.75"
                          opacity="0"
                        >
                          <set attributeName="opacity" begin="0.4s" to="1" />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.4s"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                        <path d="M7.5 13.5l4 4l10.75 -10.75" opacity="0">
                          <set attributeName="opacity" begin="0.4s" to="1" />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.4s"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                      </g>
                    </mask>
                  </defs>
                  <rect
                    width="24"
                    height="24"
                    fill="currentColor"
                    mask="url(#lineMdCheckAll0)"
                  />
                </svg>
              </li>
              <li className="flex gap-2 items-start text-sm ">
                Ability to short crypto currencies (Predict fall of a cryptos
                price)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5em"
                  height="2.5em"
                  viewBox="0 0 24 24"
                  className="text-green-400"
                >
                  <defs>
                    <mask id="lineMdCheckAll0">
                      <g
                        fill="none"
                        stroke="#fff"
                        stroke-dasharray="22"
                        stroke-dashoffset="22"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M2 13.5l4 4l10.75 -10.75">
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                        <path
                          stroke="#000"
                          stroke-width="4"
                          d="M7.5 13.5l4 4l10.75 -10.75"
                          opacity="0"
                        >
                          <set attributeName="opacity" begin="0.4s" to="1" />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.4s"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                        <path d="M7.5 13.5l4 4l10.75 -10.75" opacity="0">
                          <set attributeName="opacity" begin="0.4s" to="1" />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.4s"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                      </g>
                    </mask>
                  </defs>
                  <rect
                    width="24"
                    height="24"
                    fill="currentColor"
                    mask="url(#lineMdCheckAll0)"
                  />
                </svg>
              </li>
              <li className="flex gap-2 items-start text-sm ">
                Liquidations
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  className="text-green-400"
                >
                  <defs>
                    <mask id="lineMdCheckAll0">
                      <g
                        fill="none"
                        stroke="#fff"
                        stroke-dasharray="22"
                        stroke-dashoffset="22"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M2 13.5l4 4l10.75 -10.75">
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                        <path
                          stroke="#000"
                          stroke-width="4"
                          d="M7.5 13.5l4 4l10.75 -10.75"
                          opacity="0"
                        >
                          <set attributeName="opacity" begin="0.4s" to="1" />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.4s"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                        <path d="M7.5 13.5l4 4l10.75 -10.75" opacity="0">
                          <set attributeName="opacity" begin="0.4s" to="1" />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.4s"
                            dur="0.4s"
                            values="22;0"
                          />
                        </path>
                      </g>
                    </mask>
                  </defs>
                  <rect
                    width="24"
                    height="24"
                    fill="currentColor"
                    mask="url(#lineMdCheckAll0)"
                  />
                </svg>
              </li>
              <li className="flex gap-2 items-center text-sm ">
                ... and much more!
              </li>
            </ul>
          </div>
        </Modal>
      )}
      {showCryptoList === "activetrades" && <ActiveTradesCryptoList />}
    </div>
  );
}

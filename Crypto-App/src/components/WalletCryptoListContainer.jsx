import { useContext } from "react";
import { CryptoWalletContext } from "../store/cryptoWallet-context";
import TransactionsList from "./TransactionsList";
import Modal from "./Single Components/Modal";
import ActiveTradesCryptoList from "./DifferentCryptoLists/ActiveTradesCryptoList";
import WalletCryptoList from "./WalletCryptoList";

export default function WalletCryptoListContainer() {
  const { cryptoWalletList } = useContext(CryptoWalletContext);

  return (
    <>
      {cryptoWalletList === "main" && <WalletCryptoList />}
      {cryptoWalletList === "transactions" && <TransactionsList />}
      {cryptoWalletList === "activetrades" && (
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
      {cryptoWalletList === "tradehistory" && (
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

      {cryptoWalletList === "activetrades" && <ActiveTradesCryptoList />}
      {cryptoWalletList === "tradehistory" && <ActiveTradesCryptoList />}
    </>
  );
}

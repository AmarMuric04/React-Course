import { useContext, useState } from "react";
import { CryptoContext } from "../../../store/crypto-context";
import { Link } from "react-router-dom";
import Modal from "../../Single Components/Modal";

export default function BuyCryptoInGeneralInputs({ onSell, onCancel }) {
  const {
    userAccount,
    handleCustomToFixed,
    _mainCoinsList,
    handleSellCryptoGeneral,
  } = useContext(CryptoContext);
  const [inputValueFirst, setInputValueFirst] = useState("");
  const [inputValueSecond, setInputValueSecond] = useState("");
  const [coinToSell, setCoinToSell] = useState("bitcoin");
  const [error, setError] = useState("");

  if (!_mainCoinsList || _mainCoinsList.length === 0) {
    return (
      <div className="mt-8 w-full h-24 bg-[#1A1C22ff] grid place-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
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

  let selectedCoinWallet;
  let selectedCoin = _mainCoinsList.find((coin) => coin.id === coinToSell);

  if (userAccount) {
    selectedCoinWallet = userAccount.wallet.find(
      (coin) => coin.id === coinToSell
    );
  }

  function handleSetCoin(event) {
    setCoinToSell(event.target.value);
  }

  function handleSetFirstInput(event) {
    let value = event.target.value;

    value = value.replace(/[^0-9.]/g, "").replace(/^0+/, "");

    if (value.split(".").length > 2) {
      value = value.substring(0, value.lastIndexOf("."));
    }
    setInputValueFirst(value);

    if (!value || value === ".") {
      setInputValueSecond("");
      return;
    }

    setInputValueSecond(
      handleCustomToFixed(Number(value) * Number(selectedCoin.priceUsd))
    );
  }

  function handleSetSecondInput(event) {
    let value = event.target.value;

    value = value.replace(/[^0-9.]/g, "").replace(/^0+/, "");

    if (value.split(".").length > 2) {
      value = value.substring(0, value.lastIndexOf("."));
    }
    setInputValueSecond(value);

    if (!value || value === ".") {
      setInputValueFirst("");
      return;
    }

    setInputValueFirst(
      handleCustomToFixed(Number(value) / Number(selectedCoin.priceUsd))
    );
  }

  function handleSellCrypto() {
    if (
      selectedCoinWallet.amountOfCoins <
      Number(inputValueFirst.replaceAll(",", ""))
    ) {
      setError("Insufficiant funds in wallet.");
      return;
    }

     onSell(
       <Modal onCancel={onCancel} height="h-[36rem]" width="w-[25rem]">
         <div className="border-[0.1rem] border-[#23272Eff] w-full p-8 rounded-xl h-full flex gap-5 items-center justify-center flex-col">
           <h1 className="text-2xl text-center font-bold uppercase tracking-[0.1rem]">
             Sale successful!
           </h1>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="5em"
             height="5em"
             viewBox="0 0 24 24"
             className="text-green-400"
           >
             <g
               stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
             >
               <path
                 fill="currentColor"
                 fill-opacity="0"
                 stroke-dasharray="60"
                 stroke-dashoffset="60"
                 d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
               >
                 <animate
                   fill="freeze"
                   attributeName="stroke-dashoffset"
                   dur="0.5s"
                   values="60;0"
                 />
                 <animate
                   fill="freeze"
                   attributeName="fill-opacity"
                   begin="0.8s"
                   dur="0.15s"
                   values="0;0.3"
                 />
               </path>
               <path
                 fill="none"
                 stroke-dasharray="14"
                 stroke-dashoffset="14"
                 d="M8 12L11 15L16 10"
               >
                 <animate
                   fill="freeze"
                   attributeName="stroke-dashoffset"
                   begin="0.6s"
                   dur="0.2s"
                   values="14;0"
                 />
               </path>
             </g>
           </svg>
           <p className="mb-8">Sale details:</p>
           <ul className="flex flex-col gap-2">
             <li className="flex gap-2 items-center text-sm ">
               Sold:
               <span className="tracking-[0.1rem] uppercase">
                 {selectedCoinWallet.id.slice(0, 1).toUpperCase() +
                   selectedCoinWallet.id.slice(1)}
               </span>
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
               Sold at:
               <span className="tracking-[0.1rem]">
                 ${handleCustomToFixed(Number(selectedCoin.priceUsd))}
               </span>
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
               Amount sold: {selectedCoin.coinSymbol}:{" "}
               <span className="tracking-[0.1rem]">
                 {handleCustomToFixed(Number(inputValueFirst))}
               </span>
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
               Money gained:{" "}
               <span className="tracking-[0.1rem]">
                 $
                 {handleCustomToFixed(
                   Number(inputValueFirst.replaceAll(",", "")) *
                     Number(selectedCoin.priceUsd)
                 )}
               </span>
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
               Price change since buying:{" "}
               <span className="tracking-[0.1rem]">
                 {handleCustomToFixed(
                   ((selectedCoin.priceUsd -
                     selectedCoinWallet.purchasedPrice) /
                     selectedCoinWallet.purchasedPrice) *
                     100
                 )}
                 %
               </span>
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
           </ul>
           <p className="text-xs text-gray-400 text-center">
             Thank you for choosing us as your dedicated crypto exchange
             platform and best of luck with your future investments!
           </p>
         </div>
       </Modal>
     );

    handleSellCryptoGeneral(
      selectedCoin,
      Number(inputValueFirst.replaceAll(",", ""))
    );

    setInputValueFirst("");
    setInputValueSecond("");
  }

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <div className="relative w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Amount"
              value={inputValueFirst}
              onChange={handleSetFirstInput}
              maxLength="11"
              className={`${
                error ? "border-red-400" : "border-[#1A1C22ff]"
              } pt-10 pb-8 px-4 text-xl w-full bg-[#1A1C22ff] rounded-lg focus:outline-none border-[0.1rem]  focus:border-yellow-400`}
            />
            <div className="flex absolute bottom-1 left-4 items-center gap-3">
              <p className="text-sm text-gray-300">
                In wallet:{" "}
                {userAccount
                  ? selectedCoinWallet
                    ? handleCustomToFixed(
                        Number(selectedCoinWallet.amountOfCoins)
                      )
                    : 0
                  : "***"}{" "}
                {selectedCoin.symbol}
              </p>
              <Link
                to={`/crypto-list/${selectedCoin.id}`}
                className="font-bold text-yellow-400 text-md"
              >
                Add
              </Link>
            </div>
            <p className="absolute top-3 left-4 text-sm">Spend</p>
            <select
              className="bg-[#1A1C22ff] text-white focus:outline-none absolute right-1 bottom-8"
              name=""
              id=""
              onChange={handleSetCoin}
            >
              {_mainCoinsList.map((coin) => (
                <option
                  selected={
                    coinToSell !== "bitcoin" && coin.id === selectedCoin.id
                  }
                  key={coin.priceUsd}
                  value={`${coin.id}`}
                >
                  {coin.symbol}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="0.00"
              value={inputValueSecond}
              onChange={handleSetSecondInput}
              maxLength="11"
              className={`${
                error ? "border-red-400" : "border-[#1A1C22ff]"
              } pt-10 pb-4 px-4 text-xl w-full bg-[#1A1C22ff] rounded-lg focus:outline-none border-[0.1rem]  focus:border-yellow-400`}
            />
            <p className="absolute top-3 left-4 text-sm">Receive</p>
            <p className="absolute right-7 bottom-4">CASH</p>
          </div>
          {error && <p className="text-red-400">{error}</p>}
        </div>
        {userAccount ? (
          <button
            onClick={handleSellCrypto}
            className="bg-yellow-400  text-black py-3 text-xl rounded-lg font-bold hover:bg-yellow-500 transition-all"
          >
            Sell
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-yellow-400 text-center text-black py-3 text-xl rounded-lg font-bold hover:bg-yellow-500 transition-all"
          >
            Log in & Sell
          </Link>
        )}{" "}
      </div>
    </>
  );
}

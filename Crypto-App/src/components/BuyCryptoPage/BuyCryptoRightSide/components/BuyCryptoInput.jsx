import { useState, useContext } from "react";
import { CryptoContext } from "../../../../store/crypto-context";
import Image from "../../../Single Components/Image";

import Logo from "/public/btcLogo.png";
import Modal from "../../../Single Components/Modal";
import { Link } from "react-router-dom";

export default function BuyCryptoInput({ coin, type }) {
  const { handleCustomToFixed, handleBuyCrypto, userAccount } =
    useContext(CryptoContext);
  const [inputValue, setInputValue] = useState();
  const [error, setError] = useState(false);
  const [bought, setBought] = useState(false);

  function handleRemoveBought() {
    setBought(false);
    setInputValue("");
  }

  let modal;

  function handleInputValue(event) {
    let value = event.target.value;

    value = value.replace(/[^0-9.]/g, "").replace(/^0+/, "");

    if (value.split(".").length > 2) {
      value = value.substring(0, value.lastIndexOf("."));
    }
    setInputValue(value);
  }

  function handleBuyCryptoHelper(coin, amountOfCoins, amountOfCash) {
    let coinAmount = Number(amountOfCoins);
    let cashAmount = Number(amountOfCash);

    if (!amountOfCoins)
      coinAmount = Number(amountOfCash) / Number(coin.coinValue);

    if (!amountOfCash)
      cashAmount = Number(amountOfCoins) * Number(coin.coinValue);

    if (userAccount.balance < cashAmount || !Number(inputValue)) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 1000);
      return;
    }

    handleBuyCrypto(coin, cashAmount, coinAmount);
    setBought(true);
  }

  modal = (
    <Modal onCancel={handleRemoveBought} height="h-[30rem]" width="w-[25rem]">
      <div className="border-[0.1rem] border-[#23272Eff] w-full p-8 rounded-xl h-full flex gap-5 items-center justify-center flex-col">
        <h1 className="text-2xl text-center font-bold uppercase tracking-[0.1rem]">
          Purchase successful!
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
        <p className="mb-8">Purchase details:</p>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2 items-start text-sm ">
            Bought:
            <span className="tracking-[0.1rem] uppercase">{coin.coinName}</span>
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
            Bought at:
            <span className="tracking-[0.1rem]">
              ${handleCustomToFixed(coin.coinValue)}
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
          <li className="flex gap-2 items-start text-sm ">
            Amount of {coin.coinSymbol}:{" "}
            <span className="tracking-[0.1rem]">
              {type === "crypto"
                ? handleCustomToFixed(Number(inputValue))
                : handleCustomToFixed(
                    Number(Number(inputValue / coin.coinValue))
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
          <li className="flex gap-2 items-start text-sm ">
            Money spent:{" "}
            <span className="tracking-[0.1rem]">
              $
              {type === "crypto"
                ? handleCustomToFixed(Number(inputValue) * coin.coinValue)
                : handleCustomToFixed(
                    Number(Number(inputValue / coin.coinValue) * coin.coinValue)
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
        </ul>
        <p className="text-xs text-gray-400 text-center">
          Thank you for choosing us as your dedicated crypto exchange platform
          and best of luck with the investment!
        </p>
      </div>
    </Modal>
  );

  return (
    <>
      {bought && modal}
      <div className="w-full relative my-4">
        <input
          className={`bg-[#23272Eff] pb-4 py-12 w-full text-white px-4 rounded-lg focus:outline-none placeholder-white  ${
            error && "border-red-400"
          }`}
          type="text"
          value={inputValue}
          maxLength="11"
          placeholder="0.00"
          onChange={handleInputValue}
        />
        <p className="text-white absolute top-4 left-3">Buy</p>
        <div className="flex bg-stone-800 rounded-full py-2 w-auto pr-3 pl-2 items-center absolute right-3 top-8">
          {type === "crypto" ? (
            <Image image={Logo} className="w-8" svgSize="1em" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="text-green-400"
            >
              <path
                fill="currentColor"
                d="M11.25 7.847c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm1.5 5.001v3.304c.936-.255 1.5-.974 1.5-1.652c0-.678-.564-1.397-1.5-1.652"
              />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75"
                clip-rule="evenodd"
              />
            </svg>
          )}
          <p className="uppercase text-white font-bold">
            {type === "crypto" ? coin.coinSymbol : "CASH"}
          </p>
        </div>
      </div>
      <div className="flex w-full gap-2 text-xl">
        <p className="font-bold max-w-1/3 w-1/3 overflow-hidden truncate whitespace-nowrap">
          {inputValue &&
            inputValue !== "." &&
            handleCustomToFixed(Number(inputValue))}{" "}
          {type === "crypto" ? coin.coinSymbol : "USD $"} =
        </p>
        <p className="font-bold max-w-2/3 w-2/3 overflow-hidden truncate whitespace-nowrap text-end">
          {type === "crypto" ? "USD $" : coin.coinSymbol}{" "}
          {type === "crypto"
            ? inputValue && inputValue !== "."
              ? handleCustomToFixed(coin.coinValue * inputValue)
              : "0.00"
            : inputValue && inputValue !== "."
            ? handleCustomToFixed(inputValue / coin.coinValue)
            : "0.00"}
        </p>
      </div>
      <p className="flex gap-2 items-center text-sm my-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          className="text-green-800"
        >
          <path
            fill="currentColor"
            d="M3 6v12h10.32a6.4 6.4 0 0 1-.32-2H7a2 2 0 0 0-2-2v-4c1.11 0 2-.89 2-2h10a2 2 0 0 0 2 2v.06c.67 0 1.34.12 2 .34V6zm9 3c-1.7.03-3 1.3-3 3s1.3 2.94 3 3c.38 0 .77-.08 1.14-.23c.27-1.1.72-2.14 1.83-3.16C14.85 10.28 13.59 8.97 12 9m9.63 3.27l-3.87 3.9l-1.35-1.37L15 16.22L17.75 19l5.28-5.32z"
          />
        </svg>
        0% trading fee on{" "}
        {type === "crypto"
          ? `${coin.coinSymbol}/USDT`
          : `USDT/${coin.coinSymbol}`}{" "}
        spot trading pair.
      </p>
      {userAccount ? (
        <button
          onClick={
            type === "crypto"
              ? () => handleBuyCryptoHelper(coin, inputValue, "")
              : () => handleBuyCryptoHelper(coin, "", inputValue)
          }
          className="bg-yellow-400 text-black rounded-md py-4 font-bold hover:bg-yellow-500 transition-all"
        >
          Buy {coin.coinSymbol}
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-yellow-400 text-black text-center rounded-md py-4 font-bold hover:bg-yellow-500 transition-all"
        >
          Log in & Buy {coin.coinSymbol}
        </Link>
      )}
    </>
  );
}

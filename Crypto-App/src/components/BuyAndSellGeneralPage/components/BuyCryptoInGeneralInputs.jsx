import { useContext, useState } from "react";
import { CryptoContext } from "../../../store/crypto-context";
import { Link } from "react-router-dom";
import Modal from "../../Single Components/Modal";

export default function BuyCryptoInGeneralInputs({ onSell, onCancel }) {
  const {
    _mainCoinsList,
    handleCustomToFixed,
    handleBuyCryptoGeneral,
    userAccount,
  } = useContext(CryptoContext);
  const [inputValueFirst, setInputValueFirst] = useState("");
  const [inputValueSecond, setInputValueSecond] = useState("");
  const [firstSelection, setFirstSelection] = useState("cash");
  const [secondSelection, setSecondSelection] = useState("bitcoin");
  const [error, setError] = useState("");

  let selectedCoin, selectedCoinWallet;
  if (firstSelection !== "cash") {
    selectedCoin = _mainCoinsList.find((coin) => coin.id === firstSelection);

    if (userAccount) {
      selectedCoinWallet = userAccount.wallet.find(
        (coin) => coin.id === firstSelection
      );
    }
  }

  let secondSelectedCoin = _mainCoinsList.find(
    (coin) => coin.id === secondSelection
  );

  function handleInputFirst(event) {
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

    handleShowResult(event.target.value, "firstValue");
  }

  function handleShowResult(quantity, type) {
    let firstValue;
    if (firstSelection === "cash") firstValue = 1;
    else firstValue = selectedCoin.priceUsd;

    const secondValue = secondSelectedCoin.priceUsd;

    type === "firstValue" &&
      setInputValueSecond(
        handleCustomToFixed(
          (Number(firstValue) * Number(quantity)) / Number(secondValue)
        )
      );
    type === "secondValue" &&
      setInputValueFirst(
        handleCustomToFixed(
          (Number(secondValue) * Number(quantity)) / Number(firstValue)
        )
      );
  }

  function handleSelectionFirst(e) {
    setFirstSelection(e.target.value);
    setInputValueFirst("");
    setInputValueSecond("");
  }

  function handleInputSecond(event) {
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

    handleShowResult(event.target.value, "secondValue");
  }

  function handleSelectionSecond(e) {
    setSecondSelection(e.target.value);
    setInputValueFirst("");
    setInputValueSecond("");
  }

  function handleBuyGeneralCrypto() {
    setTimeout(() => {
      setError("");
    }, 1000);

    if (firstSelection === secondSelection) {
      setError("Can't use same currency.");
      return;
    }
    if (!inputValueFirst || inputValueFirst === ".") {
      setError("Invalid input entry.");
      return;
    }
    if (
      firstSelection === "cash" &&
      Number(inputValueFirst?.replaceAll(",", "")) > userAccount.balance
    ) {
      setError("Insufficient balance in your wallet.");
      return;
    }
    if (
      firstSelection !== "cash" &&
      (!selectedCoinWallet ||
        selectedCoinWallet.amountOfCoins <
          Number(inputValueFirst.replaceAll(",", "")))
    ) {
      setError("Insufficient amount of coins in wallet.");
      return;
    }

    selectedCoin = firstSelection !== "cash" ? selectedCoin : "cash";

    onSell(
      <Modal onCancel={onCancel} height="h-[36rem]" width="w-[25rem]">
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
            <li className="flex gap-2 items-center text-sm ">
              Transaction type:{" "}
              <span className="tracking-[0.1rem]">
                {selectedCoin === "cash" &&
                  `CASH to ${secondSelectedCoin.symbol}`}
                {selectedCoin !== "cash" &&
                  `${selectedCoin.symbol} to ${secondSelectedCoin.symbol}`}
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
              Bought:
              <span className="tracking-[0.1rem] uppercase">
                {secondSelectedCoin.id[0].toUpperCase() +
                  secondSelectedCoin.id.slice(1)}
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
              Bought at:
              <span className="tracking-[0.1rem]">
                ${handleCustomToFixed(Number(secondSelectedCoin.priceUsd))}
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
              Amount bought: {secondSelectedCoin.coinSymbol}:{" "}
              <span className="tracking-[0.1rem]">
                {handleCustomToFixed(
                  Number(inputValueSecond.replaceAll(",", ""))
                )}{" "}
                {secondSelectedCoin.symbol}
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
              Spent:{" "}
              <span className="tracking-[0.1rem]">
                {selectedCoin === "cash" && `$ ${inputValueFirst}`}
                {selectedCoin !== "cash" &&
                  handleCustomToFixed(
                    Number(inputValueFirst.replaceAll(",", ""))
                  ) +
                    " " +
                    selectedCoin.symbol}
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
            and best of luck with your future investments!
          </p>
        </div>
      </Modal>
    );

    handleBuyCryptoGeneral(
      selectedCoin,
      secondSelectedCoin,
      Number(inputValueFirst.replaceAll(",", "")),
      Number(inputValueSecond.replaceAll(",", ""))
    );

    setInputValueFirst("");
    setInputValueSecond("");
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-2">
        <div className="relative w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Amount"
            value={inputValueFirst}
            maxLength="11"
            onChange={handleInputFirst}
            className={`${
              error ? "border-red-400" : "border-[#1A1C22ff]"
            } pt-10 pb-8 px-4 text-xl w-full bg-[#1A1C22ff] rounded-lg focus:outline-none border-[0.1rem]  focus:border-yellow-400`}
          />
          {firstSelection !== "cash" && (
            <div className="flex absolute bottom-1 left-4 items-center gap-3">
              <p className="text-sm text-gray-300">
                In wallet:{" "}
                {userAccount
                  ? firstSelection !== "cash" &&
                    selectedCoinWallet?.amountOfCoins
                    ? handleCustomToFixed(selectedCoinWallet.amountOfCoins)
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
          )}
          <p className="absolute top-3 left-4 text-sm">Spend</p>
          <select
            className="bg-[#1A1C22ff] text-white focus:outline-none absolute right-1 bottom-8"
            name=""
            id=""
            onChange={handleSelectionFirst}
          >
            <option value="cash">CASH</option>
            {_mainCoinsList.map((coin) => (
              <option
                selected={
                  firstSelection !== "cash" && coin.id === selectedCoin.id
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
            maxLength="11"
            onChange={handleInputSecond}
            className={`${
              error ? "border-red-400" : "border-[#1A1C22ff]"
            } pt-10 pb-4 px-4 text-xl w-full bg-[#1A1C22ff] rounded-lg focus:outline-none border-[0.1rem]  focus:border-yellow-400`}
          />
          <p className="absolute top-3 left-4 text-sm">Receive</p>
          <select
            className="bg-[#1A1C22ff] text-white focus:outline-none absolute right-1 bottom-4"
            name=""
            id=""
            onChange={handleSelectionSecond}
          >
            {_mainCoinsList.map((coin) => (
              <option key={coin.id} value={`${coin.id}`}>
                {coin.symbol}
              </option>
            ))}
          </select>
        </div>
        {error && <p className="text-red-400">{error}</p>}
      </div>
      {userAccount ? (
        <button
          onClick={handleBuyGeneralCrypto}
          className="bg-yellow-400 text-black py-3 text-xl rounded-lg font-bold hover:bg-yellow-500 transition-all"
        >
          Buy
        </button>
      ) : (
        <Link
          className="bg-yellow-400 text-center text-black py-3 text-xl rounded-lg font-bold hover:bg-yellow-500 transition-all"
          to="/login"
        >
          Log in & Buy
        </Link>
      )}
    </div>
  );
}

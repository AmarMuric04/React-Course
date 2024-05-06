import { useContext, useState } from "react";
import { CryptoContext } from "../../../store/crypto-context";
import { Link } from "react-router-dom";

export default function BuyAndSellInputs({ type }) {
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
    selectedCoinWallet = userAccount.wallet.find(
      (coin) => coin.id === firstSelection
    );
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
      firstSelection === "cash" &&
      selectedCoinWallet?.amountOfCoins < inputValueFirst
    ) {
      setError("Insufficient amount of coins in wallet.");
      return;
    }

    selectedCoin = firstSelection !== "cash" ? selectedCoin : "cash";

    handleBuyCryptoGeneral(
      selectedCoin,
      secondSelectedCoin,
      Number(inputValueFirst.replaceAll(",", "")),
      Number(inputValueSecond.replaceAll(",", ""))
    );
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
                {firstSelection !== "cash" && selectedCoinWallet?.amountOfCoins
                  ? selectedCoinWallet.amountOfCoins
                  : 0}{" "}
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
      <button
        onClick={handleBuyGeneralCrypto}
        className="bg-yellow-400 text-black py-3 text-xl rounded-lg font-bold"
      >
        {type.slice(0, 1).toUpperCase() + type.slice(1)}
      </button>
    </div>
  );
}

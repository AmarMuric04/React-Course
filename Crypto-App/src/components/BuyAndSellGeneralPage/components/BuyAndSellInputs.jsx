import { useContext, useState, useEffect } from "react";
import { CryptoContext } from "../../../store/crypto-context";

export default function BuyAndSellInputs() {
  const { _mainCoinsList, handleCustomToFixed, userAccount } =
    useContext(CryptoContext);
  const [inputValueFirst, setInputValueFirst] = useState("");
  const [inputValueSecond, setInputValueSecond] = useState("");
  const [firstSelection, setFirstSelection] = useState("cash");
  const [secondSelection, setSecondSelection] = useState("bitcoin");

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
    else
      firstValue = _mainCoinsList.find(
        (coin) => coin.id === firstSelection
      ).priceUsd;

    const secondValue = _mainCoinsList.find(
      (coin) => coin.id === secondSelection
    ).priceUsd;

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

  return (
    <>
      <div className="relative w-full">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Amount"
          value={inputValueFirst}
          maxLength="11"
          onChange={handleInputFirst}
          className="pt-8 pb-4 px-4 text-xl w-full bg-[#1A1C22ff] rounded-lg focus:outline-none border-[0.1rem] border-[#1A1C22ff] focus:border-yellow-400"
        />
        <p className="absolute top-3 left-4 text-sm">Spend</p>
        <select
          className="bg-[#1A1C22ff] text-white focus:outline-none absolute right-1 bottom-4"
          name=""
          id=""
          onChange={handleSelectionFirst}
        >
          <option value="cash">CASH</option>
          {_mainCoinsList.map((coin) => (
            <option key={coin.priceUsd} value={`${coin.id}`}>
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
          className="pt-10 pb-4 px-4 text-xl w-full bg-[#1A1C22ff] rounded-lg focus:outline-none border-[0.1rem] border-[#1A1C22ff] focus:border-yellow-400"
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
    </>
  );
}

import { useContext, useState } from "react";
import { CryptoContext } from "../../store/crypto-context";

export default function EarnPageInputs({ onResult }) {
  const { _mainCoinsList } = useContext(CryptoContext);

  const [amountOfMoney, setAmountOfMoney] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1000);
  const [percentageChange, setPercentageChange] = useState(3);
  const [amountOfYears, setAmountOfYears] = useState(1);

  function handleInputs(input) {
    let value = input;

    value = value.replace(/[^0-9.-]/g, "").replace(/^0+/, "");

    if (!value) return 0;

    if (value.split(".").length > 2) {
      value = value.substring(0, value.lastIndexOf("."));
    }
    return value;
  }

  function handleAmountOfMoney(event) {
    setAmountOfMoney(handleInputs(event.target.value));
    onResult(false);
  }

  function handlePercentage(event) {
    setPercentageChange(handleInputs(event.target.value));
    onResult(false);
  }

  function handleAnnualInvestment(event) {
    setAnnualInvestment(handleInputs(event.target.value));
    onResult(false);
  }

  function handleAmountOfYears(event) {
    setAmountOfYears(event.target.value);
    onResult(false);
  }

  return (
    <div className="w-full bg-[#23272Eff] p-4 md:p-16 text-xl border-[0.1rem] border-[#23272Eff] rounded-xl mt-8">
      <div className="w-full flex-col md:flex-row gap-5 md:gap-0 flex justify-between items-center mb-8">
        <div className="flex w-full md:w-2/5 flex-col">
          <label
            htmlFor="amountOfMoney"
            className="uppercase text-sm text-gray-400"
          >
            initial investment
          </label>
          <div className="flex items-center">
            <input
              id="amountOfMoney"
              type="text"
              placeholder="10,000.00"
              className="w-full bg-[#1A1C22ff] pt-2 px-2 rounded-lg"
              defaultValue={10000}
              value={amountOfMoney}
              onChange={handleAmountOfMoney}
            />
            <span>$</span>
          </div>
        </div>
        <div className="flex w-full md:w-2/5 flex-col">
          <label
            htmlFor="priceChange"
            className="uppercase text-sm text-gray-400"
          >
            Expected annual return
          </label>
          <div className="flex items-center">
            <input
              id="priceChange"
              type="text"
              className="w-full bg-[#1A1C22ff] pt-2 px-2 rounded-lg"
              placeholder="3.00"
              defaultValue={3}
              onChange={handlePercentage}
              value={percentageChange}
            />
            <span>%</span>
          </div>
        </div>
      </div>
      <div className="w-full flex-col md:flex-row gap-5 md:gap-0 flex justify-between items-center">
        <div className="flex w-full md:w-2/5  flex-col">
          <label
            htmlFor="annualInvestment"
            className="uppercase text-sm text-gray-400"
          >
            Annual investment
          </label>
          <div className="flex items-center">
            <input
              id="annualInvestment"
              type="text"
              className="w-full bg-[#1A1C22ff] pt-2 px-2 rounded-lg"
              placeholder="1000"
              defaultValue={1000}
              onChange={handleAnnualInvestment}
              value={annualInvestment}
            />
            <span>$</span>
          </div>
        </div>
        <div className="flex w-full md:w-2/5 flex-col">
          <label
            htmlFor="amountOfYears"
            className="uppercase text-sm text-gray-400"
          >
            Duration (yr)
          </label>
          <select
            name=""
            className="w-full bg-[#1A1C22ff] pt-2 px-2 rounded-lg"
            id="amountOfYears"
            onChange={handleAmountOfYears}
          >
            {_mainCoinsList.map((_, index) => (
              <option className="bg-[#1A1C22ff]" value={index + 1} key={index}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="py-8 flex text-xs  sm:text-md md:text-lg">
        If this outcome happens, how much money would I have at the end of each
        year?
      </p>
      <button
        onClick={() =>
          onResult(true, {
            amountOfMoney,
            annualInvestment,
            percentageChange,
            amountOfYears,
          })
        }
        className="mt-8 bg-yellow-400 rounded-lg font-bold py-2 px-4 text-black"
      >
        Get results
      </button>
    </div>
  );
}

import Header from "../Single Components/Header";
import Footer from "../Single Components/Footer";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CryptoContext } from "../../store/crypto-context";
import EarnResults from "./EarnResults";

export default function EarnPage() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);

  const [amountOfMoney, setAmountOfMoney] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1000);
  const [percentageChange, setPercentageChange] = useState(3);
  const [amountOfYears, setAmountOfYears] = useState(1);
  const [result, setResult] = useState(false);

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
    setResult(false);
  }

  function handlePercentage(event) {
    setPercentageChange(handleInputs(event.target.value));
    setResult(false);
  }

  function handleAnnualInvestment(event) {
    setAnnualInvestment(handleInputs(event.target.value));
    setResult(false);
  }

  function handleAmountOfYears(event) {
    setAmountOfYears(event.target.value);
    setResult(false);
  }

  function handleGetResult() {
    setResult(true);
  }

  return (
    <>
      <Header />
      <main className="w-full mt-16 min-h-screen text-white bg-[#1A1C22ff]">
        <div className="w-full bg-black h-auto flex flex-col items-center">
          <div className="w-[80rem] py-24">
            <div className="flex justify-between items-center flex-col md:flex-row my-8">
              <p className="flex items-center gap-3 text-sm font-bold text-yellow-400 my-8">
                <Link to="/" className="cursor-pointer hover:underline">
                  Home
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.879 17.243a1 1 0 0 1-.707-1.707L12.707 12L9.172 8.464a1 1 0 0 1 1.414-1.414l4.242 4.243a1 1 0 0 1 0 1.414l-4.242 4.243a.997.997 0 0 1-.707.293"
                  />
                </svg>
                <p>Earn</p>
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="text-[5rem] font-semibold">Earn</h1>
                <p className="text-gray-300 text-2xl font-bold">
                  Set up a{" "}
                  <span className="text-yellow-400 underline">
                    plan to success
                  </span>
                  .
                </p>
                <p className="text-gray-400">
                  See how much you would earn by looking at your made up
                  possible outcomes!
                </p>
              </div>
              <div className="bg-[#1A1C22ff] w-96 h-64 rounded-xl p-8">
                <h1 className="flex font-bold items-center gap-2">
                  My Holdings
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-opacity="0"
                      d="M6 8L12 3L18 8V20H16V13L15 12H9L8 13V20H6V8Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="0.9s"
                        dur="0.15s"
                        values="0;0.3"
                      />
                    </path>
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="21"
                        stroke-dashoffset="21"
                        d="M5 21H19"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.2s"
                          values="21;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="15"
                        stroke-dashoffset="15"
                        d="M5 21V8M19 21V8"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.2s"
                          dur="0.2s"
                          values="15;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="24"
                        stroke-dashoffset="24"
                        d="M9 21V13H15V21"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="24;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="26"
                        stroke-dashoffset="26"
                        d="M2 10L12 2L22 10"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.5s"
                          dur="0.4s"
                          values="26;0"
                        />
                      </path>
                    </g>
                  </svg>
                </h1>
                <div className="flex flex-col border-b-[0.1rem] border-black py-4">
                  <p className="uppercase tracking-[0.1rem] font-bold flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M1 4.25C1 3.56 1.56 3 2.25 3h9.5c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-9.5C1.56 11 1 10.44 1 9.75zm3 .25V4H3v.5a.5.5 0 0 1-.5.5H2v1h.5A1.5 1.5 0 0 0 4 4.5M9 7a2 2 0 1 0-4 0a2 2 0 0 0 4 0m2-3h-1v.5A1.5 1.5 0 0 0 11.5 6h.5V5h-.5a.5.5 0 0 1-.5-.5zM4 9.5A1.5 1.5 0 0 0 2.5 8H2v1h.5a.5.5 0 0 1 .5.5v.5h1zm7 .5v-.5a.5.5 0 0 1 .5-.5h.5V8h-.5A1.5 1.5 0 0 0 10 9.5v.5zm-6.5 3a1.5 1.5 0 0 1-1.427-1.036Q3.281 12 3.5 12h8.25A2.25 2.25 0 0 0 14 9.75V5.085A1.5 1.5 0 0 1 15 6.5v3.25A3.25 3.25 0 0 1 11.75 13z"
                      />
                    </svg>{" "}
                    In cash
                  </p>
                  <p className="tracking-[0.1rem] text-gray-400">
                    $ {handleCustomToFixed(userAccount.balance)}
                  </p>
                </div>
                <div className="py-4">
                  <p className="uppercase tracking-[0.1rem] font-bold flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14.24 10.56c-.31 1.24-2.24.61-2.84.44l.55-2.18c.62.18 2.61.44 2.29 1.74m-3.11 1.56l-.6 2.41c.74.19 3.03.92 3.37-.44c.36-1.42-2.03-1.79-2.77-1.97m10.57 2.3c-1.34 5.36-6.76 8.62-12.12 7.28S.963 14.94 2.3 9.58A9.996 9.996 0 0 1 14.42 2.3c5.35 1.34 8.61 6.76 7.28 12.12m-7.49-6.37l.45-1.8l-1.1-.25l-.44 1.73c-.29-.07-.58-.14-.88-.2l.44-1.77l-1.09-.26l-.45 1.79c-.24-.06-.48-.11-.7-.17l-1.51-.38l-.3 1.17s.82.19.8.2c.45.11.53.39.51.64l-1.23 4.93c-.05.14-.21.32-.5.27c.01.01-.8-.2-.8-.2L6.87 15l1.42.36c.27.07.53.14.79.2l-.46 1.82l1.1.28l.45-1.81c.3.08.59.15.87.23l-.45 1.79l1.1.28l.46-1.82c1.85.35 3.27.21 3.85-1.48c.5-1.35 0-2.15-1-2.66c.72-.19 1.26-.64 1.41-1.62c.2-1.33-.82-2.04-2.2-2.52"
                      />
                    </svg>{" "}
                    In crypto
                  </p>
                  <p className="tracking-[0.1rem] text-gray-400">
                    ${" "}
                    {handleCustomToFixed(
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
                    )}
                  </p>
                  <p className="tracking-[0.1rem] text-gray-700 text-sm">
                    ${" "}
                    {handleCustomToFixed(
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
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center px-16">
          <div className="w-2/5 py-24">
            <h1 className="text-4xl font-semibold tracking-[0.1rem] uppercase">
              Create your plan:
            </h1>
            <div className="w-full bg-[#23272Eff] p-16 text-xl border-[0.1rem] border-[#23272Eff] rounded-xl m-8">
              <div className="w-full flex justify-between items-center mb-8">
                <div className="flex w-2/5 flex-col">
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
                <div className="flex w-2/5 flex-col">
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
              <div className="w-full flex justify-between items-center">
                <div className="flex w-2/5 flex-col">
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
                <div className="flex w-2/5 flex-col">
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
                      <option
                        className="bg-[#1A1C22ff]"
                        value={index + 1}
                        key={index}
                      >
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <p className="py-8 flex">
                If this outcome happens, how much money would I have at the end
                of each year?
              </p>
              <button
                onClick={handleGetResult}
                className="mt-8 bg-yellow-400 rounded-lg font-bold py-2 px-4 text-black"
              >
                Get results
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-2/3 flex items-center border-[0.1rem] border-[#23272Eff] rounded-xl p-8 mb-32">
            <div className="w-[10%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M10 1.944A11.954 11.954 0 0 1 2.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0 1 10 1.944M11 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-7a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h1 className="w-[90%] text-gray-400">
              <strong>Disclaimer</strong>: The information provided in this tool
              is for educational and entertainment purposes only. Any investment
              decisions made based on the hypothetical outcomes generated by
              this tool are done so at your own risk. The projections and
              predictions presented here are purely speculative and should not
              be considered as financial advice. Actual investment outcomes may
              vary significantly from the simulated results. Always conduct
              thorough research and consult with a qualified financial advisor
              before making any investment decisions.
            </h1>
          </div>
        </div>
        {result && (
          <EarnResults
            input={{
              amountOfMoney,
              annualInvestment,
              percentageChange,
              amountOfYears,
            }}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

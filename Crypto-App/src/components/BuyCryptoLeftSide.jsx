import { useContext, useState } from "react";
import Logo from "../../public/btcLogo.png";
import { CryptoContext } from "../store/crypto-context";

export default function BuyCryptoLeftSide({ coin }) {
  const { handleCustomToFixed } = useContext(CryptoContext);
  const [clickedGood, setClickedGood] = useState(false);
  const [clickedBad, setClickedBad] = useState(false);

  function handleClickedFeeling(identifier) {
    if (identifier === "good") {
      setClickedGood(true);
      setClickedBad(false);
    } else {
      setClickedBad(true);
      setClickedGood(false);
    }
  }

  return (
    <div className="flex flex-col w-2/3 ">
      <div className="flex gap-3 items-center mb-8">
        <img className="w-20" src={Logo} alt="" />
        <h1 className="text-4xl text-stone-600 flex gap-2 items-end">
          {coin.coinName} Price
          <span className="text-lg">
            (
            <span className="text-lg font-extrabold uppercase text-stone-900">
              {coin.coinSymbol}
            </span>
            )
          </span>
        </h1>
      </div>
      <div className="flex gap-3 items-end">
        <h2 className="text-white font-extrabold text-3xl">
          $ {handleCustomToFixed(Number(coin.coinValue))}
        </h2>
        <p
          className={`flex items-center justify-end text-xl ${
            coin.changeInLast24Hours < -0.2 && "text-red-400"
          }  ${coin.changeInLast24Hours > 0.2 && "text-green-400"} ${
            coin.changeInLast24Hours >= -0.2 &&
            coin.changeInLast24Hours <= 0.2 &&
            "text-stone-500"
          }`}
        >
          {coin.changeInLast24Hours}%{" "}
          {coin.changeInLast24Hours >= -0.2 &&
            coin.changeInLast24Hours <= 0.2 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8 18h3v-3H2v-2h20v2h-9v3h3l-4 4zm4-16L8 6h3v3H2v2h20V9h-9V6h3z"
                />
              </svg>
            )}
          {coin.changeInLast24Hours < -0.2 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.03 13.92h4V5l2.01-.03v8.95h3.99l-5 5Z"
              />
            </svg>
          )}
          {coin.changeInLast24Hours > 0.2 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.03 9.97h4v8.92l2.01.03V9.97h3.99l-5-5Z"
              />
            </svg>
          )}
        </p>
        <p className="text-stone-400 font-bold">24hr</p>
      </div>
      <div className="flex items-center justify-between mt-16">
        <h2 className="font-bold text-2xl">
          How do you feel about {coin.coinName} today?
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleClickedFeeling("good")}
            className="flex items-center gap-1 bg-stone-400 px-2 py-1 rounded-md focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"
              />
            </svg>
            <span className="text-white font-bold">Good</span>
          </button>
          <button
            onClick={() => handleClickedFeeling("bad")}
            className="flex items-center gap-1 bg-stone-400 px-2 py-1 rounded-md focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2"
              />
            </svg>
            <span className="text-white font-bold">Bad</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-between rounded-md mt-8 px-2 py-1 bg-stone-400">
        <div className="flex w-full h-full">
          <div className="flex items-center gap-3 w-1/6 justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"
              />
            </svg>
            <p className="flex gap-2">
              Good{" "}
              <span className="text-green-400 font-bold">
                {clickedGood ? "2" : "1"}
              </span>
            </p>
          </div>
          <div className="flex w-4/6 gap-2 h-full items-center justify-center">
            <div
              className={`h-1/2 skew-x-[-45deg] transition-all w-${
                clickedGood ? "2/3" : clickedBad ? "1/3" : "1/2"
              } bg-green-400`}
            ></div>
            <div
              className={`h-1/2 skew-x-[-45deg] transition-all w-${
                clickedBad ? "2/3" : clickedGood ? "1/3" : "1/2"
              } bg-red-400`}
            ></div>
          </div>
          <div className="flex items-center gap-3 w-1/6 justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2"
              />
            </svg>
            <p className="flex gap-2">
              Bad{" "}
              <span className="text-red-400 font-bold">
                {clickedBad ? "2" : "1"}
              </span>
            </p>
          </div>
        </div>
        <p className="flex items-center gap-2 text-sm text-stone-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
            />
          </svg>
          Note: This information is for reference only.
        </p>
      </div>
      <div className="flex flex-col mt-16">
        <h1 className="text-4xl font-bold mb-8">
          Price of {coin.coinSymbol} today
        </h1>
        <p>
          The live price of {coin.coinName} is ${" "}
          {handleCustomToFixed(coin.coinValue)} per ({coin.coinSymbol} / USD)
          with a current market cap of $ 1,239.30B USD. 24-hour trading volume
          is $ 33.12B USD. BTC to USD price is updated in real-time. Bitcoin is
          +6.59% in the last 24 hours with a circulating supply of 19.69M.
        </p>
        <h2 className="text-2xl font-bold my-8">
          {coin.coinSymbol} Price History USD
        </h2>
        <table>
          <thead className="bg-stone-800 text-white text-xs">
            <tr>
              <th className="px-4 py-4 text-start w-[45%]">Date comparison</th>
              <th className="px-4 py-4 text-start w-[40%]">Amount change</th>
              <th className=" px-4 py-4 text-start w-[15%]">% Change</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-stone-400 text-white">
              <td className="px-4 py-2">Today</td>
              <td
                className={`px-4 py-2 ${
                  handleCustomToFixed(
                    Number(
                      coin.coinValue * Number(coin.changeInLast24Hours / 1000)
                    )
                  ) > 0
                    ? "text-green-400 font-bold"
                    : "text-red-400"
                }`}
              >
                ${" "}
                {handleCustomToFixed(
                  Number(coin.coinValue) *
                    Number(coin.changeInLast24Hours / 100)
                )}
              </td>
              <td
                className={`px-4 py-2 ${
                  handleCustomToFixed(
                    Number(
                      coin.coinValue * Number(coin.changeInLast24Hours / 1000)
                    )
                  ) > 0
                    ? "text-green-400 font-bold"
                    : "text-red-400"
                }`}
              >
                {coin.changeInLast24Hours > 0 && `+${coin.changeInLast24Hours}`}{" "}
                {coin.changeInLast24Hours < 0 && coin.changeInLast24Hours}%
              </td>
            </tr>
            <tr className="bg-stone-400 text-white">
              <td className="px-4 py-2">30 Days</td>
              <td
                className={`px-4 py-2 ${
                  Number(
                    coin.coinValue *
                      Number((-coin.changeInLast24Hours + 2) / 100)
                  ) > 0
                    ? "text-green-400 font-bold"
                    : "text-red-400"
                }`}
              >
                ${" "}
                {handleCustomToFixed(
                  Number(coin.coinValue) *
                    Number((-coin.changeInLast24Hours + 2) / 100)
                )}
              </td>
              <td
                className={`px-4 py-2 ${
                  Number(coin.coinValue) *
                    Number((-coin.changeInLast24Hours + 2) / 100) >
                  0
                    ? "text-green-400 font-bold"
                    : "text-red-400"
                }`}
              >
                {-coin.changeInLast24Hours + 2 > 0 &&
                  `+${handleCustomToFixed(
                    Number(-coin.changeInLast24Hours + 2)
                  )}`}{" "}
                {-coin.changeInLast24Hours + 2 < 0 &&
                  handleCustomToFixed(Number(-coin.changeInLast24Hours + 2))}
                %
              </td>
            </tr>
            <tr className="bg-stone-400 text-white">
              <td className="px-4 py-2">60 Days</td>
              <td
                className={`px-4 py-2 ${
                  Number(
                    coin.coinValue *
                      Number((-coin.changeInLast24Hours * 7) / 100)
                  ) > 0
                    ? "text-green-400 font-bold"
                    : "text-red-400"
                }`}
              >
                ${" "}
                {handleCustomToFixed(
                  Number(coin.coinValue) *
                    Number((-coin.changeInLast24Hours - 1) / 100)
                )}
              </td>
              <td
                className={`px-4 py-2 ${
                  Number(coin.coinValue) *
                    Number((-coin.changeInLast24Hours - 1) / 100) >
                  0
                    ? "text-green-400 font-bold"
                    : "text-red-400"
                }`}
              >
                {-coin.changeInLast24Hours + -1 > 0 &&
                  `+${handleCustomToFixed(-coin.changeInLast24Hours - 1)}`}{" "}
                {-coin.changeInLast24Hours - 1 < 0 &&
                  handleCustomToFixed(-coin.changeInLast24Hours - 1)}
                %
              </td>
            </tr>
            <tr className="bg-stone-400 text-white">
              <td className="px-4 py-2">90 Days</td>
              <td
                className={`px-4 py-2 ${
                  Number(
                    coin.coinValue *
                      Number((coin.changeInLast24Hours * 7) / 100)
                  ) > 0
                    ? "text-green-400 font-bold"
                    : "text-red-400"
                }`}
              >
                ${" "}
                {handleCustomToFixed(
                  Number(coin.coinValue) *
                    Number((coin.changeInLast24Hours * 7) / 100)
                )}
              </td>
              <td
                className={`px-4 py-2 ${
                  Number(coin.coinValue) *
                    Number((coin.changeInLast24Hours * 7) / 100) >
                  0
                    ? "text-green-400 font-bold"
                    : "text-red-400"
                }`}
              >
                {coin.changeInLast24Hours * 7 > 0 &&
                  `+${handleCustomToFixed(coin.changeInLast24Hours * 7)}`}{" "}
                {coin.changeInLast24Hours * 7 < 0 &&
                  handleCustomToFixed(coin.changeInLast24Hours * 7)}
                %
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-2xl font-bold my-8">
          {coin.coinSymbol} Price Information
        </h2>
        <div>
          <p className="flex items-center">
            24h Low & High{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}

import { useContext } from "react";
import Image from "./Image";
import Logo from "../../public/btcLogo.png";
import { CryptoContext } from "../store/crypto-context";
import BuyCryptoThoughts from "./BuyCryptoThoughts";

export default function BuyCryptoLeftSide({ coin, extendedCoin }) {
  const { handleCustomToFixed, handleGetRandomNumber } =
    useContext(CryptoContext);

  const priceChange1h = handleGetRandomNumber(-0.5, 0.5).toFixed(2);
  const priceChange7d = handleGetRandomNumber(0.1, 0.15).toFixed(2);

  return (
    <div className="flex flex-col w-2/3 ">
      <div className="flex gap-3 items-center mb-8">
        <Image image={Logo} className="w-16" svgSize="2em" />
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
      <BuyCryptoThoughts coin={coin} />
      <div className="flex flex-col mt-16">
        <div className="my-16">
          <h1 className="text-4xl font-bold mb-8">
            Price of {coin.coinSymbol} today
          </h1>
          <p>
            The live price of {coin.coinName} is ${" "}
            <strong>{handleCustomToFixed(coin.coinValue)}</strong> per (
            {coin.coinSymbol} / USD) with a current market cap of ${" "}
            <strong>{coin.coinMarketCap}</strong> USD. 24-hour trading volume is
            $ <strong>{coin.volumeInLast24Hours}</strong> USD. {coin.coinSymbol}{" "}
            to USD price is updated in real-time. Bitcoin is{" "}
            <strong>
              {coin.changeInLast24Hours > 0
                ? `+${coin.changeInLast24Hours}`
                : coin.changeInLast24Hours}{" "}
            </strong>
            in the last 24 hours with a circulating supply of{" "}
            <strong>{coin.coinSupply}</strong>.
          </p>
        </div>
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
          <p className="flex items-center gap-3">
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
          <div className="flex w-2/3 justify-between gap-3">
            <p className="w-1/4 text-nowrap">
              Low: ${" "}
              {handleCustomToFixed(coin.coinValue - coin.coinValue * 0.097)}
            </p>
            <div className="w-1/3 flex items-center">
              <div className="w-2/5 h-1/3 bg-red-400"></div>
              <div className="w-3/5 h-1/3 bg-green-400"></div>
            </div>
            <p className="w-1/4 text-nowrap">
              High: ${" "}
              {handleCustomToFixed(coin.coinValue + coin.coinValue * 0.074)}
            </p>
          </div>
          <div className="flex flex-col">
            <ul className="flex flex-wrap my-8">
              <li className="w-1/4">
                <p className="flex items-center gap-1">
                  All Time High{" "}
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
                <p className="font-bold">
                  $ {handleCustomToFixed(Number(extendedCoin.allTimeHigh))}
                </p>
              </li>
              <li className="w-1/4">
                <p className="flex items-center gap-1">
                  Price Change (1h)
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
                <p
                  className={`font-bold ${
                    priceChange1h > 0 && "text-green-400"
                  } ${priceChange1h === 0 && "text-stone-400"} ${
                    priceChange1h < 0 && "text-red-400"
                  }`}
                >
                  {priceChange1h > 0 ? `+ ${priceChange1h}` : priceChange1h} %
                </p>
              </li>
              <li className="w-1/4">
                <p className="flex items-center gap-1">
                  Price Change (24h)
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
                <p
                  className={`font-bold ${
                    coin.changeInLast24Hours > 0 && "text-green-400"
                  } ${coin.changeInLast24Hours === 0 && "text-stone-400"} ${
                    coin.changeInLast24Hours < 0 && "text-red-400"
                  }`}
                >
                  {coin.changeInLast24Hours > 0
                    ? `+ ${coin.changeInLast24Hours}`
                    : coin.changeInLast24Hours}{" "}
                  %
                </p>
              </li>
              <li className="w-1/4">
                <p className="flex items-center gap-1">
                  Price Change (7d)
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
                <p
                  className={`font-bold ${
                    priceChange7d > 0 && "text-green-400"
                  } ${priceChange7d === 0 && "text-stone-400"} ${
                    priceChange7d < 0 && "text-red-400"
                  }`}
                >
                  {priceChange7d > 0 ? `+ ${priceChange7d}` : priceChange7d} %
                </p>
              </li>
            </ul>
            <h2 className="text-2xl font-bold my-8">
              {coin.coinSymbol} Market Information
            </h2>
            <ul className="flex flex-wrap">
              <li className="w-1/4">
                <p className="flex font-bold items-center gap-1">
                  Popularity{" "}
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
                <p className="font-bold">#{coin.coinRank}</p>
              </li>
              <li className="w-1/4">
                <p className="flex items-center gap-1">
                  Market Cap
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
                <p className="font-bold">$ {coin.coinMarketCap}</p>
              </li>
              <li className="w-1/4">
                <p className="flex items-center gap-1">
                  Volume (24hours)
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
                <p className="font-bold">$ {coin.volumeInLast24Hours}</p>
              </li>
              <li className="w-1/4">
                <p className="flex items-center gap-1">
                  Circulating Supply{" "}
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
                <p className="font-bold">{coin.coinSupply}</p>
              </li>
              <li className="w-1/4">
                <p className="flex items-center gap-1">
                  Total Maximum Supply
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
                <p className="font-bold">21.00M</p>
              </li>
              <li className="w-1/4">
                <p className="flex items-center gap-1">
                  Vwap (24h)
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
                <p className="font-bold">
                  {handleCustomToFixed(Number(coin.coinVwapInLast24Hours))}
                </p>
              </li>
            </ul>
          </div>
          <h1 className="text-4xl font-bold mt-16 mb-8">
            About {coin.coinName} (<span>{coin.coinSymbol}</span>)
          </h1>
          <div className="flex flex-col gap-3">
            <p>{extendedCoin.moreInformation}</p>
            <p>{extendedCoin.moreInformation2}</p>
          </div>
          <div className="my-32">
            <h1 className="text-3xl font-bold my-8">
              {coin.coinName} Resources
            </h1>
            <div className="flex flex-col gap-3">
              <a href={coin.coinResource} className="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61"
                  />
                </svg>
                {coin.coinResource}
              </a>
              <a
                href="https://www.binance.com/"
                className="flex gap-3 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 187a113.4 113.4 0 0 1-20.39-35h40.82a116.94 116.94 0 0 1-10 20.77A108.61 108.61 0 0 1 128 207m-26.49-59a135.42 135.42 0 0 1 0-40h53a135.42 135.42 0 0 1 0 40ZM44 128a83.49 83.49 0 0 1 2.43-20h30.82a160.63 160.63 0 0 0 0 40H46.43A83.49 83.49 0 0 1 44 128m84-79a113.4 113.4 0 0 1 20.39 35h-40.8a116.94 116.94 0 0 1 10-20.77A108.61 108.61 0 0 1 128 49m50.73 59h30.82a83.52 83.52 0 0 1 0 40h-30.8a160.63 160.63 0 0 0 0-40Zm20.77-24h-25.79a140.82 140.82 0 0 0-15.5-34.36A84.51 84.51 0 0 1 199.52 84ZM97.79 49.64A140.82 140.82 0 0 0 82.29 84H56.48a84.51 84.51 0 0 1 41.31-34.36M56.48 172h25.81a140.82 140.82 0 0 0 15.5 34.36A84.51 84.51 0 0 1 56.48 172m101.73 34.36a140.82 140.82 0 0 0 15.5-34.36h25.81a84.51 84.51 0 0 1-41.31 34.36"
                  />
                </svg>
                Go to Binance
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

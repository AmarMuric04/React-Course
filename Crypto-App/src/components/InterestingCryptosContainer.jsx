import { useContext, useState } from "react";
import { CryptoContext } from "../store/crypto-context";

export default function InterestingCryptosContainer({ filterBy }) {
  const { coinsList, handleFormatNumber, handlePreventDefault } =
    useContext(CryptoContext);

  const [filteredCoins, setFilteredCoins] = useState([]);

  let coins = [...coinsList];

  let message, reverse;

  if (filterBy === "volume") {
    coins = [...coins].sort(
      (a, b) => Number(b.volumeUsd24Hr) - Number(a.volumeUsd24Hr)
    );
    message = "Most volume last 24hr";
    reverse = "Check lowest";
  }
  if (filterBy === "change") {
    coins = [...coins].sort(
      (a, b) => Number(b.changePercent24Hr) - Number(a.changePercent24Hr)
    );
    message = "Best performing last 24hr";
    reverse = "Check worst";
  }
  if (filterBy === "marketcap") {
    coins = [...coins].sort(
      (a, b) => Number(b.marketCapUsd) - Number(a.marketCapUsd)
    );
    message = "Highest Market Cap";
    reverse = "Check lowest";
  }

  function handleReverseFilter() {
    if (filterBy === "volume" && reverse === "Check lowest") {
      coins = [...coins].sort(
        (a, b) => Number(a.volumeUsd24Hr) - Number(b.volumeUsd24Hr)
      );
      message = "Lowest volume last 24hr";
      reverse = "Check highest";
    }
  }

  return (
    <div className="h-auto  w-[30%] min-w-64">
      <header className="flex justify-between">
        <h2>{message}</h2>
        <p
          onClick={handleReverseFilter}
          className="text-xs cursor-pointer hover:underline flex gap-1"
        >
          {reverse}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9 3L5 6.99h3V14h2V6.99h3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99z"
            />
          </svg>
        </p>
      </header>
      <ul key={coins} className="flex flex-col gap-3 h-full">
        {coins.splice(0, 4).map((coin) => {
          const coinRank = coin.rank;
          const coinSymbol = coin.symbol;
          const coinName =
            coin.id.slice(0, 1).toUpperCase() +
            coin.id.slice(1, coin.id.length).replace("-", " ");
          const coinValue = Number(coin.priceUsd).toFixed(2);
          const coinMarketCap = handleFormatNumber(
            Number(coin.marketCapUsd).toFixed(0)
          );
          const changeInLast24Hours = Number(coin.changePercent24Hr).toFixed(2);
          const volumeInLast24Hours = handleFormatNumber(
            Number(coin.volumeUsd24Hr).toFixed(0)
          );

          return (
            <a
              key={coin.id}
              href={`${coin.explorer}`}
              onClick={handlePreventDefault}
            >
              <ul className="flex bg-white rounded-lg items-center px-8 py-2 relative h-20 hover:scale-[1.02] transition-all delay-50">
                <li className="w-3 font-normal absolute bottom-2 left-2 text-xs">
                  {coinRank}.
                </li>
                <li className="w-48 text-xs">
                  <span className="">{coinName} </span>(
                  <span className="font-extrabold text-sm">{coinSymbol}</span>)
                </li>
                <li className="w-32 text-xs">{coinValue}$</li>
                <li className="w-32 text-xs">{coinMarketCap}$</li>
                <li className="w-32 text-xs">{volumeInLast24Hours}$</li>
                <li
                  className={`w-32 flex items-center justify-end ${
                    changeInLast24Hours < 0 ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {changeInLast24Hours}%{" "}
                  {changeInLast24Hours < 0 ? (
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
                  ) : (
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
                </li>
              </ul>
            </a>
          );
        })}
      </ul>
    </div>
  );
}

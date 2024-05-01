import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";

export default function InterestingCryptosContainer({ filterBy }) {
  const { coinsList, handleFormatNumber } = useContext(CryptoContext);

  let coins = [...coinsList];
  let message;
  if (filterBy === "volume") {
    coins = [...coins].sort(
      (a, b) => Number(b.volumeUsd24Hr) - Number(a.volumeUsd24Hr)
    );
    message = "Most volume last 24hr";
  }

  if (filterBy === "change") {
    coins = [...coins].sort(
      (a, b) => Number(b.changePercent24Hr) - Number(a.changePercent24Hr)
    );
    message = "Best performing last 24hr";
  }
  if (filterBy === "marketcap") {
    coins = [...coins].sort(
      (a, b) => Number(b.marketCapUsd) - Number(a.marketCapUsd)
    );
    message = "Highest Market Cap";
  }

  return (
    <div className="h-auto  w-[30%] min-w-64">
      <h2>{message} </h2>
      <ul key={coins} className="flex flex-col gap-3 h-full">
        {coins.splice(0, 4).map((coin) => {
          const coinRank = coin.rank;
          const coinSymbol = coin.symbol;
          const coinName =
            coin.id.slice(0, 1).toUpperCase() +
            coin.id.slice(1, coin.id.length).replace("-", " ");
          const coinValue = Number(coin.priceUsd).toFixed(2);
          const changeInLast24Hours = coin.changePercent24Hr;
          const volumeInLast24Hours = handleFormatNumber(
            Number(coin.volumeUsd24Hr).toFixed(0)
          );

          return (
            <a
              key={coin.id}
              href={`${coin.explorer}`}
              // onClick={handlePreventDefault}
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
                <li className="w-48 text-xs">
                  Volume (24h): {volumeInLast24Hours}$
                </li>
                <li className="w-16 text-xs">
                  {Number(changeInLast24Hours).toFixed(2)}%
                </li>
              </ul>
            </a>
          );
        })}
      </ul>
    </div>
  );
}

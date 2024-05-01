import { useContext } from "react";

import { CryptoContext } from "../store/crypto-context";

export default function CryptoList() {
  const { coinsList, buyCoin, handleFormatNumber } = useContext(CryptoContext);

  function handlePreventDefault(event) {
    if (event.target.closest("a")) {
      event.preventDefault();
    }
  }

  return (
    <ul key={coinsList} className="flex flex-col gap-3">
      {coinsList.map((coin) => {
        const coinRank = coin.rank;
        const coinSymbol = coin.symbol;
        const coinName =
          coin.id.slice(0, 1).toUpperCase() +
          coin.id.slice(1, coin.id.length).replace("-", " ");
        const coinValue = Number(coin.priceUsd).toFixed(2);
        const coinMarketCap = handleFormatNumber(
          Number(coin.marketCapUsd).toFixed(0)
        );
        const changeInLast24Hours = coin.changePercent24Hr;
        const volumeInLast24Hours = handleFormatNumber(
          Number(coin.volumeUsd24Hr).toFixed(0)
        );

        return (
          <a
            key={coin.id}
            href={`${coin.explorer}`}
            onClick={handlePreventDefault}
          >
            <ul className="preventdefault flex items-center bg-white py-8 text-2xl px-16 rounded-xl relative hover:scale-[1.02] transition-all delay-50">
              <li className="w-3 font-normal absolute bottom-2 left-2 text-sm">
                {coinRank}.
              </li>
              <li className="w-72">
                <span className="">{coinName} </span>(
                <span className="font-extrabold text-lg">{coinSymbol}</span>)
              </li>
              <li className="w-48">{coinValue}$</li>
              <li className="w-64">Market Cap: {coinMarketCap}$</li>
              <li className="w-64">Volume (24h): {volumeInLast24Hours}$</li>
              <li className="w-48">
                {Number(changeInLast24Hours).toFixed(2)}%
              </li>
              <button
                className="bg-green-400 px-4 py-2 cursor-pointer text-white rounded-xl absolute right-16"
                onClick={() =>
                  buyCoin({
                    id: coin.id,
                    symbol: coin.symbol,
                    rank: coin.rank,
                    value: Number(coin.priceUsd).toFixed(2),
                    marketCap: Number(coin.marketCapUsd).toFixed(0),
                  })
                }
              >
                Buy
              </button>
            </ul>
          </a>
        );
      })}
    </ul>
  );
}

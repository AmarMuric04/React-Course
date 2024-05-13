import { useContext, useState } from "react";
import { CryptoContext } from "../../store/crypto-context";

export default function InterestingCryptos({ filterBy, classes, amount }) {
  const {
    _mainCoinsList,
    handleFormatNumber,
    handlePreventDefault,
    handleCustomToFixed,
  } = useContext(CryptoContext);
  const [reverseFilter, setReverseFilter] = useState(false);

  if (!_mainCoinsList || _mainCoinsList.length === 0) {
    return (
      <div className="h-96  w-[30%] min-w-64 grid place-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
          className="text-yellow-400"
        >
          <rect width="2.8" height="12" x="1" y="6" fill="currentColor">
            <animate
              id="svgSpinnersBarsScale0"
              attributeName="y"
              begin="0;svgSpinnersBarsScale1.end-0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="0;svgSpinnersBarsScale1.end-0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="5.8" y="6" fill="currentColor">
            <animate
              attributeName="y"
              begin="svgSpinnersBarsScale0.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScale0.begin+0.1s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="10.6" y="6" fill="currentColor">
            <animate
              attributeName="y"
              begin="svgSpinnersBarsScale0.begin+0.2s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScale0.begin+0.2s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="15.4" y="6" fill="currentColor">
            <animate
              attributeName="y"
              begin="svgSpinnersBarsScale0.begin+0.3s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScale0.begin+0.3s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="12;22;12"
            />
          </rect>
          <rect width="2.8" height="12" x="20.2" y="6" fill="currentColor">
            <animate
              id="svgSpinnersBarsScale1"
              attributeName="y"
              begin="svgSpinnersBarsScale0.begin+0.4s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="6;1;6"
            />
            <animate
              attributeName="height"
              begin="svgSpinnersBarsScale0.begin+0.4s"
              calcMode="spline"
              dur="0.6s"
              keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
              values="12;22;12"
            />
          </rect>
        </svg>
      </div>
    );
  }
  let newCoins = [..._mainCoinsList];

  if (!newCoins) {
    return (
      <div className="h-96 w-[30%] min-w-64 flex justify-center items-center flex-col">
        Hmm... Something went wrong...
      </div>
    );
  }

  let message, reverse;
  if (filterBy === "volume") {
    newCoins = [...newCoins].sort(
      (a, b) => Number(b.volumeUsd24Hr) - Number(a.volumeUsd24Hr)
    );
    message = !reverseFilter
      ? "Most volume last 24hr"
      : "Lowest volume last 24hr";
    reverse = !reverseFilter ? "Check lowest" : "Check most";
  }
  if (filterBy === "change") {
    newCoins = [...newCoins].sort(
      (a, b) => Number(b.changePercent24Hr) - Number(a.changePercent24Hr)
    );
    message = !reverseFilter
      ? "Best performing last 24hr"
      : "Worst performing last 24hr";
    reverse = !reverseFilter ? "Check worst" : "Check best";
  }
  if (filterBy === "marketcap") {
    newCoins = [...newCoins].sort(
      (a, b) => Number(b.marketCapUsd) - Number(a.marketCapUsd)
    );
    message = !reverseFilter ? "Highest Market Cap" : "Lowest Market cap";
    reverse = !reverseFilter ? "Check lowest" : "Check highest";
  }

  if (reverseFilter) newCoins = [...newCoins].splice(-Number(amount)).reverse();
  else if (!reverseFilter) newCoins = [...newCoins].splice(0, Number(amount));

  function handleReverseFilter() {
    setReverseFilter(!reverseFilter);
  }

  return (
    <div
      className={`${classes} h-auto md:min-w-64 border-[0.1rem] border-[#23272Eff] py-4 rounded-lg`}
    >
      <header className="flex justify-between md:px-8">
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
      <ul key={newCoins} className="flex flex-col md:gap-3 h-full">
        {newCoins.map((coin) => {
          const coinRank = coin.rank;
          const coinSymbol = coin.symbol;
          const coinName =
            coin.id.slice(0, 1).toUpperCase() +
            coin.id.slice(1, coin.id.length).replace("-", " ");
          const coinValue = handleCustomToFixed(Number(coin.priceUsd));
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
              <ul className="flex rounded-lg items-center gap-2 md:gap-5 md:px-8 py-2 relative h-20 transition-all delay-50 hover:bg-[#23272Eff]">
                <li className="w-3 font-normal text-xs">{coinRank}.</li>
                <li className="w-40 md:w-48 text-xs   overflow-hidden truncate whitespace-nowrap">
                  <span className="">{coinName} </span>(
                  <span className="font-extrabold text-sm">{coinSymbol}</span>)
                </li>
                <li className="w-24 md:w-32  text-xs overflow-hidden truncate whitespace-nowraptext-xs">
                  {coinValue}$
                </li>
                <li className="w-20 md:w-32 text-xs   overflow-hidden truncate whitespace-nowraptext-xs">
                  {coinMarketCap}$
                </li>
                <li className="w-16 md:w-32 text-xs  overflow-hidden truncate whitespace-nowraptext-xs ">
                  {volumeInLast24Hours}$
                </li>
                <li
                  className={`w-32 flex items-center justify-end gap-2  overflow-hidden truncate whitespace-nowrap ${
                    changeInLast24Hours < -0.2 && "text-red-400"
                  }  ${changeInLast24Hours > 0.2 && "text-green-400"} ${
                    changeInLast24Hours > -0.2 &&
                    changeInLast24Hours < 0.2 &&
                    "text-stone-500"
                  }`}
                >
                  {changeInLast24Hours}%{" "}
                  {changeInLast24Hours > -0.2 && changeInLast24Hours < 0.2 && (
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
                  {changeInLast24Hours < -0.2 && (
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
                  {changeInLast24Hours > 0.2 && (
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

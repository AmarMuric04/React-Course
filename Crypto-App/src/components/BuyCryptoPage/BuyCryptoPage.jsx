import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";
import Header from "../Single Components/Header";

import BuyCryptoLeftSide from "./BuyCryptoLeftSide/BuyCryptoLeftSide";
import BuyCryptoRightSide from "./BuyCryptoRightSide/BuyCryptoRightSide";
import { useParams, Link } from "react-router-dom";
import Footer from "../Single Components/Footer";

import { extendedCryptoObject } from "../../assets/extendedCryptoObject";

export default function BuyCryptoPage() {
  const { _mainCoinsList, handleFormatNumber } = useContext(CryptoContext);
  const { id } = useParams();

  window.scrollTo(0, 0);

  if (!_mainCoinsList || _mainCoinsList.length === 0) {
    return (
      <div className="w-screen h-screen bg-stone-300 grid place-content-center">
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

  const buyCryptoPageCoin = _mainCoinsList.find((item) => item.id === id);

  if (!buyCryptoPageCoin) {
    return (
      <div className="w-screen h-screen bg-stone-300 flex justify-center items-center flex-col">
        <p className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M6.697 6.697a7.5 7.5 0 0 1 12.794 4.927A4.002 4.002 0 0 1 18.5 19.5h-12a5 5 0 0 1-1.667-9.715a7.47 7.47 0 0 1 1.864-3.088m4.01 3.596a1 1 0 0 0-1.414 1.414L10.586 13l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 14.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 13l1.293-1.293a1 1 0 0 0-1.414-1.414L12 11.586z"
              clip-rule="evenodd"
            />
          </svg>
          Page not found...
        </p>
        <p className="text-sm">Are you sure you are in the right place?</p>
        <Link className="flex items-center gap-2 mt-8" to="/crypto-list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.78em"
            height="1em"
            viewBox="0 0 16 9"
          >
            <path
              fill="currentColor"
              d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
            />
            <path
              fill="currentColor"
              d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
            />
          </svg>
          Go back
        </Link>
      </div>
    );
  }

  const extendedCoin = extendedCryptoObject.find((coin) => coin.id === id);

  const coinId = buyCryptoPageCoin.id;
  const coinName =
    buyCryptoPageCoin.id.slice(0, 1).toUpperCase() +
    buyCryptoPageCoin.id
      .slice(1, buyCryptoPageCoin.id.length)
      .replace("-", " ");
  const coinValue = Number(buyCryptoPageCoin.priceUsd);
  const changeInLast24Hours = Number(
    buyCryptoPageCoin.changePercent24Hr
  ).toFixed(2);
  const coinSymbol = buyCryptoPageCoin.symbol.toUpperCase();
  const coinRank = buyCryptoPageCoin.rank;
  const coinMarketCap = handleFormatNumber(
    Number(buyCryptoPageCoin.marketCapUsd)
  );
  const volumeInLast24Hours = handleFormatNumber(
    Number(buyCryptoPageCoin.volumeUsd24Hr).toFixed(0)
  );
  const coinSupply = handleFormatNumber(Number(buyCryptoPageCoin.supply));
  const coinVwapInLast24Hours = Number(buyCryptoPageCoin.vwap24Hr);
  const coinResource = buyCryptoPageCoin.explorer;

  return (
    <main className="bg-stone-300 h-full min-h-screen w-full min-w-screen flex flex-col items-center">
      <Header />
      <div className="w-[80rem] mt-16">
        <p className="flex items-center gap-3 text-md font-bold text-gray-600 my-8">
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
          <Link to="/crypto-list" className="cursor-pointer hover:underline">
            Crypto List
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
          {coinName} Price
        </p>
        <div className="flex w-full min-h-screen h-full gap-5">
          <BuyCryptoLeftSide
            coin={{
              coinName,
              coinValue,
              changeInLast24Hours,
              coinSymbol,
              extendedCoin,
              coinRank,
              coinMarketCap,
              volumeInLast24Hours,
              coinSupply,
              coinVwapInLast24Hours,
              coinResource,
              coinId,
            }}
            extendedCoin={extendedCoin}
          />
          <BuyCryptoRightSide
            coin={{
              coinName,
              coinValue,
              changeInLast24Hours,
              coinSymbol,
              extendedCoin,
              coinRank,
              coinMarketCap,
              volumeInLast24Hours,
              coinSupply,
              coinVwapInLast24Hours,
              coinResource,
              coinId,
            }}
            extendedCoin={extendedCoin}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}

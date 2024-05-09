import { useContext } from "react";
import { CryptoContext } from "../../../../store/crypto-context";
import { useParams } from "react-router-dom";
import Logo from "/public/btcLogo.png";
import Image from "../../../Single Components/Image";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowHorizontalIcon,
} from "../../../../assets/icons";

export default function CoinPrice() {
  const { _mainCoinsList, handleCustomToFixed } = useContext(CryptoContext);

  const { id } = useParams();

  if (!_mainCoinsList || _mainCoinsList.length === 0) {
    return (
      <div className="mt-8 w-full h-16 bg-[#1A1C22ff] grid place-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
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

  const coin = _mainCoinsList.find((mainCoin) => mainCoin.id === id);

  const coinName =
    coin.id.slice(0, 1).toUpperCase() +
    coin.id.slice(1, coin.id.length).replace("-", " ");
  const coinValue = Number(coin.priceUsd);
  const changeInLast24Hours = Number(coin.changePercent24Hr).toFixed(2);
  const coinSymbol = coin.symbol.toUpperCase();

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-3 items-center mb-8">
        <Image image={Logo} className="w-16" svgSize="2em" />
        <h1 className="text-4xl flex gap-2 items-end">
          {coinName} Price
          <span className="text-lg">
            (
            <span className="text-lg font-extrabold uppercase">
              {coinSymbol}
            </span>
            )
          </span>
        </h1>
      </div>
      <div className="flex gap-3 items-end">
        <h2 className="text-white font-extrabold text-3xl">
          $ {handleCustomToFixed(Number(coinValue))}
        </h2>
        <p
          className={`flex items-center justify-end text-xl ${
            changeInLast24Hours < -0.2 && "text-red-400"
          }  ${changeInLast24Hours > 0.2 && "text-green-400"} ${
            changeInLast24Hours >= -0.2 &&
            changeInLast24Hours <= 0.2 &&
            "text-stone-500"
          }`}
        >
          {changeInLast24Hours}%{" "}
          {changeInLast24Hours >= -0.2 && changeInLast24Hours <= 0.2 && (
            <ArrowHorizontalIcon svgSize="1" />
          )}
          {changeInLast24Hours < -0.2 && <ArrowDownIcon svgSize="1.5" />}
          {changeInLast24Hours > 0.2 && <ArrowUpIcon svgSize="1.5" />}
        </p>
        <p className="text-stone-400 font-bold">24hr</p>
      </div>
    </div>
  );
}

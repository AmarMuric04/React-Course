import FavoriteCryptoList from "../DifferentCryptoLists/FavoriteCryptoList";
import CryptoList from "../DifferentCryptoLists/CryptoList";
import Performers from "../Single Components/Performers";
import FilterCryptoList from "../DifferentCryptoLists/FilterCryptoList";
import SearchedCryptoList from "../DifferentCryptoLists/SearchedCryptoList";
import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";

export default function CryptoListContainer() {
  const { showCryptoList, _mainCoinsList } = useContext(CryptoContext);

  console.log(_mainCoinsList);

  if (!_mainCoinsList || _mainCoinsList.length === 0) {
    return (
      <div className="w-auto h-96 grid place-content-center">
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

  return (
    <div className="mb-64">
      <FilterCryptoList />

      <ul className="flex gap-16 px-8 relative text-sm text-stone-700">
        <li className="w-24">Favorite</li>
        <li className="w-72">Name</li>
        <li className="w-40">Value</li>
        <li className="w-40">Market cap</li>
        <li className="w-40">Volume (24hr)</li>
        <li className="w-48">Change (24hr)</li>
        <li className="w-40">Trade</li>
      </ul>
      {(showCryptoList === "gp" || showCryptoList === "bp") && (
        <Performers type={showCryptoList} />
      )}
      {showCryptoList === "favorite" && <FavoriteCryptoList />}
      {showCryptoList === "main" && <CryptoList />}
      {showCryptoList === "search" && <SearchedCryptoList />}
    </div>
  );
}

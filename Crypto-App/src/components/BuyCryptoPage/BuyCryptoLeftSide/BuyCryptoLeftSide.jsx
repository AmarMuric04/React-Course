import { useContext } from "react";
import { CryptoContext } from "../../../store/crypto-context";
import BuyCryptoThoughts from "./components/BuyCryptoThoughts";
import CryptoInfoTable from "./components/CryptoInfoTable";
import CryptoStat from "./components/CryptoStat";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import Table from "../../Single Components/Table";
import TableRow from "../../Single Components/TableRow";
import TableColumn from "../../Single Components/TableColumn";
import FAQ from "./components/FAQ";
import { extendedCryptoObject } from "../../../assets/extendedCryptoObject";

import { BookIcon, GlobeIcon, InfoIcon } from "../../../assets/icons";

export default function BuyCryptoLeftSide({ id }) {
  const {
    handleCustomToFixed,
    handleGetRandomNumber,
    handleFormatNumber,
    _mainCoinsList,
  } = useContext(CryptoContext);

  if (!_mainCoinsList || _mainCoinsList.length === 0) {
    return (
      <div className="w-screen h-screen bg-[#1A1C22ff] grid place-content-center">
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
      <div className="w-screen h-screen bg-[#1A1C22ff] flex justify-center items-center flex-col">
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

  const priceChange1h = handleGetRandomNumber(0.02, 0.03).toFixed(2);
  const priceChange7d = handleGetRandomNumber(0.06, 0.07).toFixed(2);

  let coin = {
    priceChange1h,
    priceChange7d,
    coinSupply,
    coinId,
    coinName,
    coinMarketCap,
    coinSymbol,
    volumeInLast24Hours,
    coinVwapInLast24Hours,
    coinResource,
    changeInLast24Hours,
    coinValue,
  };

  document.title = `${coinSymbol} Price | ${coinName} Index | ${coinName} Popularity`;

  return (
    <div className="flex w-[95%] sm:w-[75%] md:w-[50%] lg:w-3/5  flex-col">
      <BuyCryptoThoughts coin={coin} />
      <div className="flex flex-col mt-16">
        <div className="my-16">
          <SubTitle
            title={`
            Price of ${coinSymbol} today
          `}
          />
          <p>
            The live price of {coinName} is ${" "}
            <strong>{handleCustomToFixed(coinValue)}</strong> per ({coinSymbol}{" "}
            / USD) with a current market cap of ${" "}
            <strong>{coinMarketCap}</strong> USD. 24-hour trading volume is ${" "}
            <strong>{volumeInLast24Hours}</strong> USD. {coinSymbol} to USD
            price is updated in real-time. Bitcoin is{" "}
            <strong>
              {changeInLast24Hours > 0
                ? `+${changeInLast24Hours}`
                : changeInLast24Hours}{" "}
            </strong>
            % in the last 24 hours with a circulating supply of{" "}
            <strong>{coinSupply}</strong>.
          </p>
        </div>
        <SubTitle title={`${coinSymbol} Price History USD`} />
        <CryptoInfoTable coin={coin} />
        <div className="flex flex-col">
          <SubTitle title={`${coinSymbol} Price Information`} />
          <p className="flex items-center gap-3">
            24h Low & High <InfoIcon svgSize="1" />
          </p>
          <div className="flex w-full lg:w-2/3 flex-col justify-between gap-3">
            <p className="w-1/4 text-nowrap ">
              Low: $ {handleCustomToFixed(coinValue - coinValue * 0.097)}
            </p>
            <div className="w-1/3 flex items-center">
              <div className="w-2/5 h-1/3 min-h-2 bg-red-400"></div>
              <div className="w-3/5 h-1/3 min-h-2 bg-green-400"></div>
            </div>
            <p className="w-1/4 text-nowrap">
              High: $ {handleCustomToFixed(coinValue + coinValue * 0.074)}
            </p>
          </div>
          <ul className="flex flex-wrap my-8">
            <CryptoStat
              title="All Time High"
              value={
                <p className="font-bold">
                  $ {handleCustomToFixed(Number(extendedCoin.allTimeHigh))}
                </p>
              }
            />
            <CryptoStat
              title="Price Change (1h)"
              value={
                <p
                  className={`font-bold ${
                    priceChange1h > 0 && "text-green-400"
                  } ${priceChange1h === 0 && "text-stone-400"} ${
                    priceChange1h < 0 && "text-red-400"
                  }`}
                >
                  {priceChange1h > 0 ? `+ ${priceChange1h}` : priceChange1h} %
                </p>
              }
            />
            <CryptoStat
              title="Price Change(24h)"
              value={
                <p
                  className={`font-bold ${
                    changeInLast24Hours > 0 && "text-green-400"
                  } ${changeInLast24Hours === 0 && "text-stone-400"} ${
                    changeInLast24Hours < 0 && "text-red-400"
                  }`}
                >
                  {changeInLast24Hours > 0
                    ? `+ ${changeInLast24Hours}`
                    : changeInLast24Hours}{" "}
                  %
                </p>
              }
            />
            <CryptoStat
              title="Price Change (7d)"
              value={
                <p
                  className={`font-bold ${
                    priceChange7d > 0 && "text-green-400"
                  } ${priceChange7d === 0 && "text-stone-400"} ${
                    priceChange7d < 0 && "text-red-400"
                  }`}
                >
                  {priceChange7d > 0 ? `+ ${priceChange7d}` : priceChange7d} %
                </p>
              }
            />
          </ul>
          <SubTitle
            title={`
              ${coinSymbol} Market Information
            `}
          />
          <ul className="flex flex-wrap">
            <CryptoStat
              title="Popularity"
              value={<p className="font-bold">#{coinRank}</p>}
            />
            <CryptoStat
              title="Market Cap"
              value={<p className="font-bold">$ {coinMarketCap}</p>}
            />{" "}
            <CryptoStat
              title="Volume (24hr)"
              value={<p className="font-bold">$ {volumeInLast24Hours}</p>}
            />
            <CryptoStat
              title="Circulating Supply"
              value={<p className="font-bold">{coinSupply}</p>}
            />
            <CryptoStat
              title="Vwap (24h)"
              value={
                <p className="font-bold">
                  $ {handleCustomToFixed(Number(coinVwapInLast24Hours))}
                </p>
              }
            />
          </ul>
        </div>
        <div className="flex flex-col">
          <Title title={`About ${coinName}`} extra={`(${coinSymbol})`} />
          <div className="flex flex-col gap-3">
            <p>{extendedCoin.moreInformation}</p>
            <p>{extendedCoin.moreInformation2}</p>
          </div>
        </div>
        <div className="my-32 flex flex-col">
          <h1 className="text-3xl font-bold my-8">{coinName} Resources</h1>
          <div className="flex flex-col gap-3 overflow-hidden truncate whitespace-nowrap">
            <a href={coinResource} className="flex gap-3 items-center">
              <BookIcon svgSize="1.5" />
              {coinResource}
            </a>
            <a
              href="https://www.binance.com/"
              className="flex gap-3 items-center"
            >
              <GlobeIcon svgSize="1.5" />
              Go to Binance
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <Title title={`People Also Ask: Other Questions About ${coinName}`} />
          <FAQ questions={extendedCoin.frequentlyAskedQuestions} />
        </div>
        <div className="flex items-center lg:items-start flex-col mb-16">
          <Title title={`${coinSymbol} to Local Currency`} />
          <Table classes="w-[98%] lg:w-2/3 text-lg">
            <TableRow classes="bg-[#23272Eff] text-white">
              <TableColumn classes="py-2 px-4">
                1 {coinSymbol} to TRY
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                ₺ {handleCustomToFixed(Number(coinValue) * 32.35)}
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn classes="py-2 px-4">
                1 {coinSymbol} to RUB
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                ₽ {handleCustomToFixed(Number(coinValue) * 91.6)}
              </TableColumn>
            </TableRow>{" "}
            <TableRow classes="bg-[#23272Eff] text-white">
              <TableColumn classes="py-2 px-4">
                1 {coinSymbol} to EUR
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                € {handleCustomToFixed(Number(coinValue) * 0.93)}
              </TableColumn>
            </TableRow>{" "}
            <TableRow>
              <TableColumn classes="py-2 px-4">
                1 {coinSymbol} to AED
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                {handleCustomToFixed(Number(coinValue) * 3.67)} د.إ{" "}
              </TableColumn>
            </TableRow>{" "}
            <TableRow classes="bg-[#23272Eff] text-white">
              <TableColumn classes="py-2 px-4">
                1 {coinSymbol} to AUD
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                A$
                {handleCustomToFixed(Number(coinValue) * 1.57)}
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn classes="py-2 px-4">
                1 {coinSymbol} to BRL
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                R$
                {handleCustomToFixed(Number(coinValue) * 5.07)}
              </TableColumn>
            </TableRow>
            <TableRow classes="bg-[#23272Eff] text-white">
              <TableColumn classes="py-2 px-4">
                1 {coinSymbol} to VND
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                ₫ {handleCustomToFixed(Number(coinValue) * 25415)}
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn classes="py-2 px-4">
                1 {coinSymbol} to IDR
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                Rp {handleCustomToFixed(Number(coinValue) * 15968.7)}
              </TableColumn>
            </TableRow>
          </Table>
          <p className="text-sm text-gray-400">
            Last updated 2024/05/05 01:09AM (CEST)
          </p>
        </div>
      </div>
    </div>
  );
}

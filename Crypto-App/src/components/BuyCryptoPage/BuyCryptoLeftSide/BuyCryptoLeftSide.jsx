import { useContext } from "react";
import Image from "../../Single Components/Image";
import Logo from "/btcLogo.png";
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
import {
  ArrowDownIcon,
  ArrowHorizontalIcon,
  ArrowUpIcon,
  BookIcon,
  GlobeIcon,
  InfoIcon,
} from "../../../assets/icons";

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
              <ArrowHorizontalIcon svgSize="1" />
            )}
          {coin.changeInLast24Hours < -0.2 && <ArrowDownIcon svgSize="1.5" />}
          {coin.changeInLast24Hours > 0.2 && <ArrowUpIcon svgSize="1.5" />}
        </p>
        <p className="text-stone-400 font-bold">24hr</p>
      </div>
      <BuyCryptoThoughts coin={coin} />
      <div className="flex flex-col mt-16">
        <div className="my-16">
          <SubTitle
            title={`
            Price of ${coin.coinSymbol} today
          `}
          />
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
            % in the last 24 hours with a circulating supply of{" "}
            <strong>{coin.coinSupply}</strong>.
          </p>
        </div>
        <SubTitle title={`${coin.coinSymbol} Price History USD`} />
        <CryptoInfoTable coin={coin} />
        <div className="flex flex-col">
          <SubTitle title={`${coin.coinSymbol} Price Information`} />
          <p className="flex items-center gap-3">
            24h Low & High <InfoIcon svgSize="1" />
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
              ${coin.coinSymbol} Market Information
            `}
          />
          <ul className="flex flex-wrap">
            <CryptoStat
              title="Popularity"
              value={<p className="font-bold">#{coin.coinRank}</p>}
            />
            <CryptoStat
              title="Market Cap"
              value={<p className="font-bold">$ {coin.coinMarketCap}</p>}
            />{" "}
            <CryptoStat
              title="Volume (24hr)"
              value={<p className="font-bold">$ {coin.volumeInLast24Hours}</p>}
            />
            <CryptoStat
              title="Circulating Supply"
              value={<p className="font-bold">{coin.coinSupply}</p>}
            />
            <CryptoStat
              title="Vwap (24h)"
              value={
                <p className="font-bold">
                  {handleCustomToFixed(Number(coin.coinVwapInLast24Hours))}
                </p>
              }
            />
          </ul>
        </div>
        <div className="flex flex-col">
          <Title
            title={`About ${coin.coinName}`}
            extra={`(${coin.coinSymbol})`}
          />
          <div className="flex flex-col gap-3">
            <p>{extendedCoin.moreInformation}</p>
            <p>{extendedCoin.moreInformation2}</p>
          </div>
        </div>
        <div className="my-32 flex flex-col">
          <h1 className="text-3xl font-bold my-8">{coin.coinName} Resources</h1>
          <div className="flex flex-col gap-3">
            <a href={coin.coinResource} className="flex gap-3 items-center">
              <BookIcon svgSize="1.5" />
              {coin.coinResource}
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
          <Title
            title={`People Also Ask: Other Questions About ${coin.coinName}`}
          />
          <FAQ questions={extendedCoin.frequentlyAskedQuestions} />
        </div>
        <div className="flex flex-col mb-16">
          <Title title={`${coin.coinSymbol} to Local Currency`} />
          <Table classes="w-2/3 text-lg">
            <TableRow classes="bg-stone-800 text-white">
              <TableColumn classes="py-2 px-4">
                1 {coin.coinSymbol} to TRY
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                ₺ {handleCustomToFixed(Number(coin.coinValue) * 32.35)}
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn classes="py-2 px-4">
                1 {coin.coinSymbol} to RUB
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                ₽ {handleCustomToFixed(Number(coin.coinValue) * 91.6)}
              </TableColumn>
            </TableRow>{" "}
            <TableRow classes="bg-stone-800 text-white">
              <TableColumn classes="py-2 px-4">
                1 {coin.coinSymbol} to EUR
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                € {handleCustomToFixed(Number(coin.coinValue) * 0.93)}
              </TableColumn>
            </TableRow>{" "}
            <TableRow>
              <TableColumn classes="py-2 px-4">
                1 {coin.coinSymbol} to AED
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                {handleCustomToFixed(Number(coin.coinValue) * 3.67)} د.إ{" "}
              </TableColumn>
            </TableRow>{" "}
            <TableRow classes="bg-stone-800 text-white">
              <TableColumn classes="py-2 px-4">
                1 {coin.coinSymbol} to AUD
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                A$
                {handleCustomToFixed(Number(coin.coinValue) * 1.57)}
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn classes="py-2 px-4">
                1 {coin.coinSymbol} to BRL
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                R$
                {handleCustomToFixed(Number(coin.coinValue) * 5.07)}
              </TableColumn>
            </TableRow>
            <TableRow classes="bg-stone-800 text-white">
              <TableColumn classes="py-2 px-4">
                1 {coin.coinSymbol} to VND
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                ₫ {handleCustomToFixed(Number(coin.coinValue) * 25415)}
              </TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn classes="py-2 px-4">
                1 {coin.coinSymbol} to IDR
              </TableColumn>
              <TableColumn classes="py-2 px-4 text-end">
                Rp {handleCustomToFixed(Number(coin.coinValue) * 15968.7)}
              </TableColumn>
            </TableRow>
          </Table>
          <p className="text-sm text-stone-700">
            Last updated 2024/05/05 01:09AM (CEST)
          </p>
        </div>
      </div>
    </div>
  );
}

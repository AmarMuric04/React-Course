import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";

import Crypto from "./Crypto";

export default function Performers({ type }) {
  const { coinsList } = useContext(CryptoContext);

  const newCoins = coinsList;
  let coins = [];
  coins =
    type === "bp"
      ? newCoins.filter((coin) => Number(coin.changePercent24Hr) < -0.2)
      : newCoins.filter((coin) => Number(coin.changePercent24Hr) > 0.2);

  console.log(coins.length);

  return (
    <ul className="flex flex-col gap-3">
      {coins.length === 0 ? (
        <p className="text-4xl text-center m-8">
          {type === "gp"
            ? "The market is not doing great today!"
            : "The market is doing great today"}
        </p>
      ) : (
        coins.map((coin) => <Crypto key={coin.id} coin={coin} />)
      )}
    </ul>
  );
}

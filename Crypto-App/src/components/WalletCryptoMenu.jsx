import { useContext } from "react";
import { CryptoWalletContext } from "../store/cryptoWallet-context";

export default function WalletCryptoMenu() {
  const { handleChangeWalletList, cryptoWalletList } =
    useContext(CryptoWalletContext);

  return (
    <div className="text-xs md:text-lg w-full flex gap-2 md:gap-10 mb-8">
      <ul className="flex w-full gap-3 justify-between md:justify-start md:gap-10 text-xs md:text-lg px-2 md:px-12">
        <li
          className={`cursor-pointer border-b-[0.2rem] border-transparent py-2 ${
            cryptoWalletList === "main" && "border-yellow-400"
          }`}
          onClick={() => handleChangeWalletList("main")}
        >
          Wallet
        </li>
        <li
          className={`cursor-pointer border-b-[0.2rem] border-transparent py-2 ${
            cryptoWalletList === "transactions" && "border-yellow-400"
          }`}
          onClick={() => handleChangeWalletList("transactions")}
        >
          Transactions
        </li>
        <li
          className={`cursor-pointer flex gap-2 border-b-[0.2rem] border-transparent py-2 ${
            cryptoWalletList === "activetrades" && "border-yellow-400"
          }`}
          onClick={() => handleChangeWalletList("activetrades")}
        >
          <span className="hidden md:block">Active</span> Trades
        </li>
        <li
          className={`cursor-pointer flex gap-2 border-b-[0.2rem] border-transparent py-2 ${
            cryptoWalletList === "tradehistory" && "border-yellow-400"
          }`}
          onClick={() => handleChangeWalletList("tradehistory")}
        >
          Trade History
        </li>
      </ul>
    </div>
  );
}

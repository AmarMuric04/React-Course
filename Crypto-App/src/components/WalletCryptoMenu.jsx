import { useContext } from "react";
import { CryptoWalletContext } from "../store/cryptoWallet-context";

export default function WalletCryptoMenu() {
  const { handleChangeWalletList, cryptoWalletList } =
    useContext(CryptoWalletContext);

  const buttonClass = "p-0 sm:py-2 md:px-4";

  return (
    <div className="text-xs md:text-lg w-full flex gap-2 md:gap-10 mb-8">
      <button
        className={`${buttonClass} border-b-[0.2rem] border-transparent ${
          cryptoWalletList === "main" && "border-yellow-400"
        }`}
        onClick={() => handleChangeWalletList("main")}
      >
        Cryptos
      </button>
      <button
        className={`${buttonClass} border-b-[0.2rem] border-transparent ${
          cryptoWalletList === "transactions" && "border-yellow-400"
        }`}
        onClick={() => handleChangeWalletList("transactions")}
      >
        Transactions
      </button>
      <button
        className={`${buttonClass} border-b-[0.2rem] border-transparent ${
          cryptoWalletList === "activetrades" && "border-yellow-400"
        }`}
        onClick={() => handleChangeWalletList("activetrades")}
      >
        Active Trades
      </button>
      <button
        className={`${buttonClass} border-b-[0.2rem] border-transparent ${
          cryptoWalletList === "tradehistory" && "border-yellow-400"
        }`}
        onClick={() => handleChangeWalletList("tradehistory")}
      >
        Trade History
      </button>
    </div>
  );
}

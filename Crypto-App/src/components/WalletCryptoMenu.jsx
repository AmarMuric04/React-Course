import { useContext } from "react";
import { CryptoWalletContext } from "../store/cryptoWallet-context";

export default function WalletCryptoMenu() {
  const { handleChangeWalletList, cryptoWalletList } =
    useContext(CryptoWalletContext);

  return (
    <div className="text-xs md:text-lg w-full flex gap-2 md:gap-10 mb-8">
      <button
        className={`py-2 px-4 border-b-[0.2rem] border-transparent ${
          cryptoWalletList === "main" && "border-yellow-400"
        }`}
        onClick={() => handleChangeWalletList("main")}
      >
        Cryptos
      </button>
      <button
        className={`py-2 px-4 border-b-[0.2rem] border-transparent ${
          cryptoWalletList === "transactions" && "border-yellow-400"
        }`}
        onClick={() => handleChangeWalletList("transactions")}
      >
        Transactions
      </button>
      <button
        className={`py-2 px-4 border-b-[0.2rem] border-transparent ${
          cryptoWalletList === "activetrades" && "border-yellow-400"
        }`}
        onClick={() => handleChangeWalletList("activetrades")}
      >
        Active Trades
      </button>
      <button
        className={`py-2 px-4 border-b-[0.2rem] border-transparent ${
          cryptoWalletList === "tradehistory" && "border-yellow-400"
        }`}
        onClick={() => handleChangeWalletList("tradehistory")}
      >
        Trade History
      </button>
    </div>
  );
}

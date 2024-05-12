import { useContext } from "react";
import { CryptoWalletContext } from "../store/cryptoWallet-context";

export default function WalletCryptoTellers() {
  const { cryptoWalletList } = useContext(CryptoWalletContext);

  return (
    <>
      {cryptoWalletList === "main" && (
        <ul className="flex gap-2 md:gap-5 relative text-xs md:text-sm text-gray-400 text-center">
          <li className="w-1/6 text-start">Name</li>
          <li className="w-1/6 text-start">
            <span className="hidden md:block">Avg. Buying Price</span>
            <span className="md:hidden">Buy price</span>
          </li>
          <li className="w-1/6 flex gap-2">
            <p>Amount of coins</p>
          </li>
          <li className="w-1/6 flex gap-2">
            <span>Money Spent</span>
          </li>
          <li className="w-1/6 text-start">
            <p>Change</p>
          </li>
          <li className="w-16 text-end">Action</li>
        </ul>
      )}
      {cryptoWalletList === "transactions" && (
        <ul className="flex gap-2 md:gap-5 relative text-xs md:text-sm text-gray-400 text-center">
          <li className="w-32 text-start">Transaction type</li>
          <li className="w-32 text-start">
            <span className="hidden md:block">Transaction</span>
          </li>
          <li className="w-48 flex gap-2">
            <p>Got</p>
          </li>
          <li className="w-48 flex gap-2">
            <span>Spent</span>
          </li>
          <li className="w-20 text-start">
            <p>Date</p>
          </li>
          <li className="w-20 text-start">Time</li>
          <li className="w-20 text-end">Change</li>
        </ul>
      )}
    </>
  );
}

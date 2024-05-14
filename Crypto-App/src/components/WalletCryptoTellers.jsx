import { useContext } from "react";
import { CryptoWalletContext } from "../store/cryptoWallet-context";
import { CryptoContext } from "../store/crypto-context";

export default function WalletCryptoTellers() {
  const { cryptoWalletList } = useContext(CryptoWalletContext);
  const { userAccount } = useContext(CryptoContext);

  if (!userAccount) return;

  if (cryptoWalletList === "main" && userAccount.wallet.length === 0) {
    return;
  }
  if (
    cryptoWalletList === "transactions" &&
    userAccount.purchaseHistory.length === 0
  ) {
    return;
  }

  return (
    <>
      {cryptoWalletList === "main" && (
        <ul className="flex gap-2 md:gap-5 relative text-xs md:text-md lg:text-xs xl:text-md text-gray-400 text-center">
          <li className="w-1/6 text-start">Name</li>
          <li className="w-1/6 text-start">
            <span className="hidden md:block">Avg. Buying Price</span>
            <span className="md:hidden">Buy price</span>
          </li>
          <li className="w-1/6 flex gap-2">
            <p>Amount</p> <p className="hidden md:block">of Coins</p>
          </li>
          <li className="w-1/6 flex gap-2">
            <span className="hidden md:block">Money</span> Spent
          </li>
          <li className="w-1/6 text-start">
            <span className="hidden md:block">Price Change</span>
            <span className="md:hidden">Changed</span>
          </li>
          <li className="w-16 text-end">Action</li>
        </ul>
      )}
      {cryptoWalletList === "transactions" && (
        <ul className="flex gap-2 md:gap-5 relative text-xs md:text-sm text-gray-400 text-center">
          <li className="w-32 text-start">
            <span className="hidden md:block">Transaction type</span>
            <span className="md:hidden">Type</span>
          </li>
          <li className="w-32 text-start">
            <span>Transaction</span>
          </li>
          <li className="w-32 md:w-48 flex gap-2">
            <p>Got</p>
          </li>
          <li className="w-32 md:w-1/6 flex gap-2">
            <span>Spent</span>
          </li>
          <li className="w-20 text-start">
            <p>Date</p>
          </li>
          <li className="w-20 text-start hidden md:block">Time</li>
          <li className="w-20 text-end">Change</li>
        </ul>
      )}
    </>
  );
}

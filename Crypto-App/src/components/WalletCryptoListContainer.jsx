import { useContext } from "react";
import { CryptoWalletContext } from "../store/cryptoWallet-context";
import WalletCryptoList from "./WalletCryptoList";
import TransactionsList from "./TransactionsList";

export default function WalletCryptoListContainer() {
  const { cryptoWalletList } = useContext(CryptoWalletContext);

  console.log(cryptoWalletList);

  return (
    <>
      {cryptoWalletList === "main" && <WalletCryptoList />}
      {cryptoWalletList === "transactions" && <TransactionsList />}
    </>
  );
}

import { useContext } from "react";

import { CryptoContext } from "../../store/crypto-context";
import Crypto from "../Single Components/Crypto";

export default function MyWalletCryptoList() {
  const { userAccount } = useContext(CryptoContext);

  const walletCryptos = [...userAccount.wallet];

  return (
    <ul className="flex flex-col gap-3">
      {walletCryptos.length === 0 ? (
        <p className="text-4xl text-center m-8">
          You do not have any cryptos in your wallet...
        </p>
      ) : (
        walletCryptos.map((coin) => <Crypto key={coin.id} coin={coin} />)
      )}
    </ul>
  );
}

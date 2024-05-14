import { useContext } from "react";
import { CryptoContext } from "../../../store/crypto-context";

export default function WalletWorth() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);

  return (
    <div className="flex flex-col gap-2 items-center lg:items-start">
      <p>Your Estimated Balance</p>
      <p className="truncate-[0.2rem] text-xl font-bold">
        $ {userAccount ? handleCustomToFixed(userAccount.balance) : "*****"}
      </p>
      <p>
        Wallet worth: ${" "}
        {userAccount
          ? handleCustomToFixed(
              Number(
                userAccount.wallet.reduce((accumulator, currentValue) => {
                  const coin = _mainCoinsList.find(
                    (coin) => coin.id === currentValue.id
                  );
                  return (
                    accumulator +
                    Number(currentValue.amountOfCoins) * Number(coin.priceUsd)
                  );
                }, 0)
              )
            )
          : "*****"}
      </p>
    </div>
  );
}

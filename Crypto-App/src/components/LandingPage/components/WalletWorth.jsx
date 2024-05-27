import { useContext } from "react";
import { CryptoContext } from "../../../store/crypto-context";
import { LoaderIcon } from "../../../assets/icons";

export default function WalletWorth() {
  const { userAccount, handleCustomToFixed, _mainCoinsList } =
    useContext(CryptoContext);

  if (!_mainCoinsList || _mainCoinsList.length === 0) {
    return (
      <div
        className="w-1/3 h-full flex items-center justify-center
       bg-[#1A1C22ff]"
      >
        <LoaderIcon svgSize="2em" />
      </div>
    );
  }

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

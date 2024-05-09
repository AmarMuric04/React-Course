import { useContext } from "react";
import { CryptoContext } from "../../../store/crypto-context";

export default function WalletWorth() {
  const { userAccount, handleCustomToFixed } = useContext(CryptoContext);
  return (
    <div className="flex flex-col gap-2 ">
      <p>Your Estimated Balance</p>
      <p className="truncate-[0.2rem] text-xl font-bold">
        $ {handleCustomToFixed(userAccount.balance)}
      </p>
      <p>
        Wallet worth: ${" "}
        {handleCustomToFixed(
          userAccount.wallet.reduce((accumulator, currentValue) => {
            return (
              accumulator + currentValue.amountOfCoins * currentValue.moneySpent
            );
          }, 0)
        )}
      </p>
    </div>
  );
}

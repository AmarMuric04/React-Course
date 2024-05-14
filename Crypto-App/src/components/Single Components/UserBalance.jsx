import { useContext } from "react";
import { CryptoContext } from "../../store/crypto-context";

export default function UserBalance() {
  const { userAccount, handleCustomToFixed } = useContext(CryptoContext);

  return (
    <p className="text-2xl tracking-[0.1rem]">
      ${userAccount ? handleCustomToFixed(userAccount.balance) : "******"}
    </p>
  );
}

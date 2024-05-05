import BuyCryptoContainer from "../BuyCryptoRightSide/components/BuyCryptoContainer";
import InterestingCryptos from "../../Single Components/InterestingCryptos";

export default function BuyCryptoRightSide({ coin }) {
  return (
    <div className="flex flex-col w-1/3 ">
      <BuyCryptoContainer coin={coin} />
      <div className="w-full flex flex-col gap-16 mt-32">
        <InterestingCryptos filterBy="volume" />
        <InterestingCryptos filterBy="marketcap" />
        <InterestingCryptos filterBy="change" />
      </div>
    </div>
  );
}

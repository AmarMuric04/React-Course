import BuyCryptoContainer from "./BuyCryptoContainer";

export default function BuyCryptoRightSide({ coin }) {
  return (
    <div className="flex flex-col w-1/3 ">
      <BuyCryptoContainer coin={coin} />
    </div>
  );
}

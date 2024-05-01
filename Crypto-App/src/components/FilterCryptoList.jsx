import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context.jsx";

export default function FilterCryptoList() {
  let { formatList } = useContext(CryptoContext);

  return (
    <div className="w-full flex justify-end gap-5 px-10 py-5 items-center">
      <p>Filter</p>
      <select
        onChange={formatList}
        className="px-2 py-1 rounded-md focus:outline-none cursor-pointer"
      >
        <option value="rank">By rank</option>
        <option value="rank-reversed">By rank reversed</option>
        <option value="cost">By Cost</option>
        <option value="cost-reversed">By Cost reversed</option>
        <option value="marketcap">By Market Cap</option>
        <option value="marketcap-reversed">By Market Cap reversed</option>
        <option value="volume">By 24h volume</option>
        <option value="volume-reversed">By 24h volume reversed</option>
        <option value="change">By 24h change</option>
        <option value="change-reversed">By 24h change reversed</option>
      </select>
    </div>
  );
}

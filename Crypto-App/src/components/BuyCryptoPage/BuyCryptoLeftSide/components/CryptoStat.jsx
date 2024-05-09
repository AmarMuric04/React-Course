import { InfoIcon } from "../../../../assets/icons.jsx";

export default function CryptoStat({ title, value }) {
  return (
    <li className="min-w-[10rem] w-1/4 mb-8">
      <p className="flex items-center gap-1">
        {title}
        <InfoIcon svgSize="1" />
      </p>

      {value}
    </li>
  );
}

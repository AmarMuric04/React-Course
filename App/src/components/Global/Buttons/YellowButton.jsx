import { SolidRightArrow } from "../../../icons/Icons";

export default function YellowButton({ text, icon = null }) {
  return (
    <button className="px-6 py-3 gap-2 text-black hover:bg-yellow-600 bg-yellow-500 text-sm font-bold flex items-center justify-center">
      {text}
      {icon && icon}
    </button>
  );
}

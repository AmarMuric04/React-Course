import { Link } from "react-router-dom";
import Logo from "/public/FinalLogo.png";
import Image from "./Image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 bg-[#1A1C22ff] px-16 h-16 items-center flex justify-between">
      <div className="flex items-center h-full gap-3 cursor-pointer">
        <Image image={Logo} className="w-10" svgSize="1.5" />
        <h1 className="text-2xl text-yellow-400 tracking-[0.3rem]">
          B<span className="text-stone-700 text-2xl">LAJV</span>
          INANCE
        </h1>
      </div>
      <ul className="flex text-white gap-5 text-lg items-center">
        <li className="cursor-pointer">Buy Crypto</li>
        <li className="cursor-pointer">My Wallet</li>
        <li className="cursor-pointer">Earn</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">Sell Crypto</li>
      </ul>
      <div className="flex gap-4 text-[#1A1C22ff]">
        <Link
          className="bg-yellow-400 py-2 px-4 rounded-md hover:bg-yellow-500 transition-all font-bold"
          to="/login"
        >
          Log in
        </Link>
        <Link
          className="bg-yellow-400 py-2 px-4 rounded-md hover:bg-yellow-500 transition-all font-bold"
          to="/signup"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}

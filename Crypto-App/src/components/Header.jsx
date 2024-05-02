import Logo from "../../public/YellowLogoNoTextMain.png";

export default function Header({ onChangeMainPage }) {
  return (
    <header className="absolute top-0 left-0 right-0 bg-stone-800 px-16 h-16 items-center flex justify-between">
      <div className="flex items-center h-full gap-3 cursor-pointer">
        <img className="h-3/4" src={Logo} alt="" />
        <h1 className="text-4xl text-yellow-400 font-extrabold">
          B<span className="text-stone-700 text-2xl">LAJV</span>
          INANCE
        </h1>
      </div>
      <ul className="flex text-white gap-5 text-lg items-center">
        <li className="cursor-pointer">Buy Crypto</li>
        <li className="cursor-pointer">My Wallet</li>
        <li className="cursor-pointer">*Earn</li>
        <li className="cursor-pointer">Information</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-4">
        <button
          onClick={() => onChangeMainPage("credentials", "login")}
          className="bg-yellow-400 py-2 px-4 rounded-md hover:bg-yellow-500 transition-all font-bold"
        >
          Log in
        </button>
        <button
          onClick={() => onChangeMainPage("credentials", "signup")}
          className="bg-yellow-400 py-2 px-4 rounded-md hover:bg-yellow-500 transition-all font-bold"
        >
          Sign up
        </button>
      </div>
    </header>
  );
}

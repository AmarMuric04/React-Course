import Logo from "../../../public/MainLogo.png";
import BG from "../../../public/LoginBGmain.jpg";

export default function LogIn({ onChange }) {
  return (
    <div className="bg-white rounded-lg w-[28rem] h-[40rem] flex flex-col items-start px-20 py-8 gap-6 shadow-2xl">
      <h1 className="text-yellow-400 text-3xl mb-8">Log in</h1>
      <div className="flex flex-col w-full">
        <label htmlFor="email">E-MAIL</label>
        <input
          type="email"
          name=""
          id="email"
          className="bg-stone-100 px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
        />
      </div>
      <div className="w-full relative">
        <label htmlFor="password" className="uppercase text-sm">
          password
        </label>
        <input
          type="password"
          name=""
          id="password"
          className="bg-stone-100 px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
        />
        <p className="text-blue-400 hover:underline text-sm cursor-pointer absolute right-0">
          Forgot password?
        </p>
      </div>
      <button className="bg-yellow-400 px-4 py-2 w-auto text-white font-bold rounded-md focus:outline-none hover:bg-yellow-500 transition-all">
        Sign up
      </button>
      <p>
        Don't have an account?{" "}
        <span
          onClick={() => onChange("signup")}
          className="text-yellow-400 hover:underline cursor-pointer font-bold"
        >
          Create one!
        </span>
      </p>
    </div>
  );
}

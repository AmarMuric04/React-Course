import Logo from "../../public/BLAJVINANCE.png";

export default function SignUp() {
  return (
    <main className="bg-stone-800 w-screen h-screen grid place-items-center">
      <div className="bg-stone-900 rounded-3xl w-1/3 h-2/3 flex flex-col items-center p-16 gap-6">
        <img src={Logo} alt="" className="h-32" />
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white uppercase text-sm">
            E-MAIL
          </label>
          <input
            className="border-b-2 border-yellow-400 bg-transparent focus:outline-none text-white w-64"
            type="email"
            name=""
            id="email"
          />
        </div>
        <div className="flex w-full gap-5">
          <div>
            <label htmlFor="password" className="text-white uppercase text-sm">
              password
            </label>
            <input
              className="border-b-2 border-yellow-400 bg-transparent focus:outline-none text-white w-full"
              type="password"
              name=""
              id="password"
            />
          </div>{" "}
          <div>
            <label
              htmlFor="confirm-password"
              className="text-white uppercase text-sm"
            >
              confirm password
            </label>
            <input
              className="border-b-2 border-yellow-400 bg-transparent focus:outline-none text-white w-full"
              type="password"
              name=""
              id="confirm-password"
            />
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}

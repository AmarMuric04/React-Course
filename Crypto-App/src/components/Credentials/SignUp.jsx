export default function SignUp({ onChange }) {
  return (
    <div className="bg-white rounded-lg w-[28rem] h-[40rem] flex flex-col items-start px-20 py-8 gap-6 shadow-2xl">
      <h1 className="text-yellow-400 text-3xl mb-8">Sign up</h1>
      <div className="flex w-full gap-5">
        <div className="w-1/2">
          <label htmlFor="first-name" className="uppercase text-sm w-full">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="bg-stone-100 px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
          />
        </div>{" "}
        <div className="w-1/2">
          <label htmlFor="last-name" className=" uppercase text-sm">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="bg-stone-100 px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="email">E-MAIL</label>
        <input
          type="email"
          name=""
          id="email"
          className="bg-stone-100 px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
        />
      </div>
      <div className="flex flex-wrap w-full gap-5">
        <div className="w-full">
          <label htmlFor="password" className="uppercase text-sm">
            password
          </label>
          <input
            type="password"
            name=""
            id="password"
            className="bg-stone-100 px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
          />
        </div>{" "}
        <div className="w-full">
          <label htmlFor="confirm-password" className=" uppercase text-sm">
            confirm password
          </label>
          <input
            type="password"
            name=""
            id="confirm-password"
            className="bg-stone-100 px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
          />
        </div>
      </div>
      <button className="bg-yellow-400 px-4 py-2 w-auto text-white font-bold rounded-md focus:outline-none hover:bg-yellow-500 transition-all">
        Sign up
      </button>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => onChange("login")}
          className="text-yellow-400 hover:underline cursor-pointer font-bold"
        >
          Log in!
        </span>
      </p>
    </div>
  );
}

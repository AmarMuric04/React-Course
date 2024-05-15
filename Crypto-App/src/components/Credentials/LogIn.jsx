import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CryptoContext } from "../../store/crypto-context";
import Modal from "../Single Components/Modal";

export default function LogIn({ onChange }) {
  const {
    handleSetUserAccount,
    handleCustomToFixed,
    _mainCoinsList,
    userAccount,
  } = useContext(CryptoContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [modal, setModal] = useState("");

  const userAccounts = JSON.parse(
    localStorage.getItem("Blajvinance-User-Accounts")
  );

  function handleSetEmailAndPassword(event, type) {
    type === "email"
      ? setEmail(event.target.value)
      : setPassword(event.target.value);
  }

  function handleLogIn() {
    setTimeout(() => {
      setError(false);
    }, 1500);

    if (!email || !password) {
      setError("Invalid inputs.");
      return;
    }

    if (
      userAccount &&
      email === userAccount.email &&
      password === userAccount.password
    ) {
      setError("Already logged into this account.");
      return;
    }

    if (
      !userAccounts.find(
        (account) => account.email === email && account.password === password
      )
    ) {
      setError("Inputs don't match an account.");
      return;
    }

    const loggedAccount = userAccounts.find(
      (account) => account.email === email && account.password === password
    );

    setModal(
      <Modal height="h-[30rem]" width="w-[25rem]">
        <div className="border-[0.1rem] border-[#23272Eff] w-full p-8 rounded-xl h-full flex gap-5 items-center justify-center flex-col">
          <p className="uppercase tracking-[0.1rem]">SUCCESSFULLY LOGGED IN!</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5em"
            height="5em"
            viewBox="0 0 24 24"
            className="text-green-400"
          >
            <g
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <g fill-opacity="0">
                <path
                  stroke-dasharray="20"
                  stroke-dashoffset="20"
                  d="M10 5C11.66 5 13 6.34 13 8C13 9.65685 11.6569 11 10 11C8.3431 11 7 9.65685 7 8C7 6.34315 8.3431 5 10 5z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="20;0"
                  />
                </path>
                <path
                  stroke-dasharray="36"
                  stroke-dashoffset="36"
                  d="M10 15C14 15 17 17 17 18V19H3V18C3 17 6 15 10 15z"
                  opacity="0"
                >
                  <set attributeName="opacity" begin="0.5s" to="1" />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.4s"
                    values="36;0"
                  />
                </path>
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.9s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </g>
              <path
                stroke-dasharray="6"
                stroke-dashoffset="6"
                d="M18 11h4"
                opacity="0"
              >
                <set attributeName="opacity" begin="1.1s" to="1" />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="1.1s"
                  dur="0.2s"
                  values="6;0"
                />
              </path>
              <path
                stroke-dasharray="6"
                stroke-dashoffset="6"
                d="M20 9v4"
                opacity="0"
              >
                <set attributeName="opacity" begin="1.3s" to="1" />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="1.3s"
                  dur="0.2s"
                  values="6;0"
                />
              </path>
            </g>
          </svg>
          <p className="mb-8">Account details:</p>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-start text-sm ">
              First name: {loggedAccount.firstName}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="text-green-400"
              >
                <defs>
                  <mask id="lineMdCheckAll0">
                    <g
                      fill="none"
                      stroke="#fff"
                      stroke-dasharray="22"
                      stroke-dashoffset="22"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M2 13.5l4 4l10.75 -10.75">
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                      <path
                        stroke="#000"
                        stroke-width="4"
                        d="M7.5 13.5l4 4l10.75 -10.75"
                        opacity="0"
                      >
                        <set attributeName="opacity" begin="0.4s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                      <path d="M7.5 13.5l4 4l10.75 -10.75" opacity="0">
                        <set attributeName="opacity" begin="0.4s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                    </g>
                  </mask>
                </defs>
                <rect
                  width="24"
                  height="24"
                  fill="currentColor"
                  mask="url(#lineMdCheckAll0)"
                />
              </svg>
            </li>
            <li className="flex gap-2 items-start text-sm ">
              Last name: {loggedAccount.lastName}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="text-green-400"
              >
                <defs>
                  <mask id="lineMdCheckAll0">
                    <g
                      fill="none"
                      stroke="#fff"
                      stroke-dasharray="22"
                      stroke-dashoffset="22"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M2 13.5l4 4l10.75 -10.75">
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                      <path
                        stroke="#000"
                        stroke-width="4"
                        d="M7.5 13.5l4 4l10.75 -10.75"
                        opacity="0"
                      >
                        <set attributeName="opacity" begin="0.4s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                      <path d="M7.5 13.5l4 4l10.75 -10.75" opacity="0">
                        <set attributeName="opacity" begin="0.4s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                    </g>
                  </mask>
                </defs>
                <rect
                  width="24"
                  height="24"
                  fill="currentColor"
                  mask="url(#lineMdCheckAll0)"
                />
              </svg>
            </li>
            <li className="flex gap-2 items-start text-sm ">
              Email: {loggedAccount.email}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
                className="text-green-400"
              >
                <defs>
                  <mask id="lineMdCheckAll0">
                    <g
                      fill="none"
                      stroke="#fff"
                      stroke-dasharray="22"
                      stroke-dashoffset="22"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M2 13.5l4 4l10.75 -10.75">
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                      <path
                        stroke="#000"
                        stroke-width="4"
                        d="M7.5 13.5l4 4l10.75 -10.75"
                        opacity="0"
                      >
                        <set attributeName="opacity" begin="0.4s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                      <path d="M7.5 13.5l4 4l10.75 -10.75" opacity="0">
                        <set attributeName="opacity" begin="0.4s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                    </g>
                  </mask>
                </defs>
                <rect
                  width="24"
                  height="24"
                  fill="currentColor"
                  mask="url(#lineMdCheckAll0)"
                />
              </svg>
            </li>
            <li className="flex gap-2 items-start text-sm ">
              Balance:{" "}
              <span className="tracking-[0.1rem]">
                $ {handleCustomToFixed(Number(loggedAccount.balance))}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="text-green-400"
              >
                <defs>
                  <mask id="lineMdCheckAll0">
                    <g
                      fill="none"
                      stroke="#fff"
                      stroke-dasharray="22"
                      stroke-dashoffset="22"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M2 13.5l4 4l10.75 -10.75">
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                      <path
                        stroke="#000"
                        stroke-width="4"
                        d="M7.5 13.5l4 4l10.75 -10.75"
                        opacity="0"
                      >
                        <set attributeName="opacity" begin="0.4s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                      <path d="M7.5 13.5l4 4l10.75 -10.75" opacity="0">
                        <set attributeName="opacity" begin="0.4s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                    </g>
                  </mask>
                </defs>
                <rect
                  width="24"
                  height="24"
                  fill="currentColor"
                  mask="url(#lineMdCheckAll0)"
                />
              </svg>
            </li>
            <li className="flex gap-2 items-start text-sm ">
              Wallet worth:{" "}
              <span className="tracking-[0.1rem]">
                ${" "}
                {handleCustomToFixed(
                  Number(
                    loggedAccount.wallet.reduce((accumulator, currentValue) => {
                      const coin = _mainCoinsList.find(
                        (coin) => coin.id === currentValue.id
                      );
                      return (
                        accumulator +
                        Number(currentValue.amountOfCoins) *
                          Number(coin.priceUsd)
                      );
                    }, 0)
                  )
                )}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="text-green-400"
              >
                <defs>
                  <mask id="lineMdCheckAll0">
                    <g
                      fill="none"
                      stroke="#fff"
                      stroke-dasharray="22"
                      stroke-dashoffset="22"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M2 13.5l4 4l10.75 -10.75">
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                      <path
                        stroke="#000"
                        stroke-width="4"
                        d="M7.5 13.5l4 4l10.75 -10.75"
                        opacity="0"
                      >
                        <set attributeName="opacity" begin="0.4s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                      <path d="M7.5 13.5l4 4l10.75 -10.75" opacity="0">
                        <set attributeName="opacity" begin="0.4s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.4s"
                          values="22;0"
                        />
                      </path>
                    </g>
                  </mask>
                </defs>
                <rect
                  width="24"
                  height="24"
                  fill="currentColor"
                  mask="url(#lineMdCheckAll0)"
                />
              </svg>
            </li>
            <li className="flex gap-2 items-center text-sm ">
              Good luck with your crypto journey!
            </li>
          </ul>
        </div>
      </Modal>
    );

    setEmail("");
    setPassword("");

    handleSetUserAccount(loggedAccount);
    setLoggedIn(true);

    setTimeout(() => {
      setLoggedIn(false);
    }, 15000);
  }

  return (
    <>
      {loggedIn && modal}
      <div className="bg-[#23272Eff] text-white rounded-lg w-full sm:w-[28rem] h-full sm:h-[40rem] flex flex-col items-start px-10 sm:px-20 py-8 gap-6 shadow-2xl ">
        <h1 className="text-yellow-400 text-3xl mb-8">Log in</h1>
        <div className="flex flex-col w-full">
          <label
            htmlFor="email"
            className={`uppercase text-sm w-full ${
              error ? "text-red-400" : "text-white"
            }`}
          >
            E-MAIL
          </label>
          <input
            type="email"
            name=""
            value={email}
            onChange={() => handleSetEmailAndPassword(event, "email")}
            id="email"
            className={`bg-stone-100 border-[0.1rem] text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none ${
              error ? "border-red-400" : "border-transparent"
            }`}
          />
        </div>
        <div className="w-full relative">
          <label
            htmlFor="password"
            className={`uppercase text-sm w-full ${
              error ? "text-red-400" : "text-white"
            }`}
          >
            password
          </label>
          <input
            type="password"
            onChange={() => handleSetEmailAndPassword(event, "password")}
            name=""
            value={password}
            id="password"
            className={`bg-stone-100 border-[0.1rem] text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none ${
              error ? "border-red-400" : "border-transparent"
            }`}
          />
          <p className="text-blue-400 hover:underline text-sm cursor-pointer absolute right-0">
            Forgot password?
          </p>
        </div>
        <button
          onClick={handleLogIn}
          className="bg-yellow-400 px-4 py-2 w-auto text-[#1A1C22ff] font-bold rounded-md focus:outline-none hover:bg-yellow-500 transition-all"
        >
          Log in
        </button>
        <p>
          Don't have an account?{" "}
          <Link
            to="/signup"
            onClick={() => onChange("signup")}
            className="text-yellow-400 hover:underline cursor-pointer font-bold"
          >
            Create one!
          </Link>
        </p>
        {error && <p className="text-red-400">{error}</p>}
      </div>
    </>
  );
}

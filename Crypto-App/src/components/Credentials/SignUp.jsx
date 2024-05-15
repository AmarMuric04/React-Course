import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CryptoCredentialsContext } from "../../store/cryptoCredentials-context";
import { CryptoContext } from "../../store/crypto-context";
import Modal from "../Single Components/Modal";

export default function SignUp({ onChange }) {
  const { handleCreateAccount } = useContext(CryptoCredentialsContext);
  const { userAccounts } = useContext(CryptoContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createdAccount, setCreatedAccount] = useState(false);
  const [modal, setModal] = useState("");

  function handleNameInputs(event, type) {
    type === "first"
      ? setFirstName(event.target.value)
      : setLastName(event.target.value);
  }

  function handleEmailPasswordInputs(event, type) {
    type === "email"
      ? setEmail(event.target.value)
      : setPassword(event.target.value);
  }

  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  function handleCheckForErrors() {
    setTimeout(() => {
      setError("");
    }, 1500);

    if (!firstName || !lastName || !email || !password) {
      setError("Invalid inputs");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const newEmail = email;

    if (
      !newEmail.includes("@") ||
      !newEmail.slice(0, newEmail.indexOf("@")).length > 5
    ) {
      setError("Invalid email input");
      return;
    }

    if (
      userAccounts &&
      userAccounts.length > 0 &&
      userAccounts.some((account) => account.email === email)
    ) {
      setError("Email taken.");
      return;
    }

    setModal(
      <Modal height="h-[30rem]" width="w-[25rem]">
        <div className="border-[0.1rem] border-[#23272Eff] w-full p-8 rounded-xl h-full flex gap-5 items-center justify-center flex-col">
          <p className="uppercase tracking-[0.1rem]">ACCOUNT CREATED!</p>
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
              First name: {firstName}
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
              Last name: {lastName}
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
              Email: {email}
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
              Starting balance:{" "}
              <span className="tracking-[0.1rem]">$ 150,000.00</span>
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
    setConfirmPassword("");
    setFirstName("");
    setLastName("");

    handleCreateAccount(firstName, lastName, email, password);

    setCreatedAccount(true);

    setTimeout(() => {
      setCreatedAccount(false);
    }, 15000);
  }

  return (
    <>
      {createdAccount && modal}
      <div className="bg-[#23272Eff] text-white rounded-lg w-full sm:w-[28rem] h-full sm:h-[40rem] flex flex-col items-start px-10 sm:px-20 py-8 gap-6 shadow-2xl ">
        <h1 className="text-yellow-400 text-3xl mb-8">Sign up</h1>
        <div className="flex w-full gap-5">
          <div className="w-1/2">
            <label
              htmlFor="first-name"
              className={`uppercase text-sm w-full ${
                error ? "text-red-400" : "text-white"
              }`}
            >
              First Name
            </label>
            <input
              onChange={() => {
                handleNameInputs(event, "first");
              }}
              type="text"
              value={firstName}
              id="first-name"
              className={`bg-stone-100 border-[0.1rem] text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none ${
                error ? "border-red-400" : "border-transparent"
              }`}
            />
          </div>{" "}
          <div className="w-1/2">
            <label
              htmlFor="last-name"
              className={`uppercase text-sm w-full ${
                error ? "text-red-400" : "text-white"
              }`}
            >
              Last Name
            </label>
            <input
              onChange={() => {
                handleNameInputs(event, "second");
              }}
              type="text"
              value={lastName}
              id="last-name"
              className={`bg-stone-100 border-[0.1rem] text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none ${
                error ? "border-red-400" : "border-transparent"
              }`}
            />
          </div>
        </div>
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
            onChange={() => {
              handleEmailPasswordInputs(event, "email");
            }}
            type="email"
            name=""
            value={email}
            id="email"
            className={`bg-stone-100 border-[0.1rem] text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none ${
              error ? "border-red-400" : "border-transparent"
            }`}
          />
        </div>
        <div className="flex flex-wrap w-full gap-5">
          <div className="w-full">
            <label
              htmlFor="password"
              className={`uppercase text-sm w-full ${
                error ? "text-red-400" : "text-white"
              }`}
            >
              password
            </label>
            <input
              onChange={() => {
                handleEmailPasswordInputs(event, "password");
              }}
              type="password"
              name=""
              value={password}
              id="password"
              className={`bg-stone-100 border-[0.1rem] text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none ${
                error ? "border-red-400" : "border-transparent"
              }`}
            />
          </div>{" "}
          <div className="w-full">
            <label
              htmlFor="confirm-password"
              className={`uppercase text-sm w-full ${
                error ? "text-red-400" : "text-white"
              }`}
            >
              confirm password
            </label>
            <input
              onChange={handleConfirmPassword}
              type="password"
              name=""
              value={confirmPassword}
              id="confirm-password"
              className={`bg-stone-100 border-[0.1rem] text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none ${
                error ? "border-red-400" : "border-transparent"
              }`}
            />
          </div>
        </div>
        <button
          onClick={handleCheckForErrors}
          className="bg-yellow-400 px-4 py-2 w-auto text-[#1A1C22ff] font-bold rounded-md focus:outline-none hover:bg-yellow-500 transition-all"
        >
          Sign up
        </button>
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            onClick={() => onChange("login")}
            className="text-yellow-400 hover:underline cursor-pointer font-bold"
          >
            Log in!
          </Link>
        </p>
        {error && <p className="text-red-400">{error}</p>}
      </div>
    </>
  );
}

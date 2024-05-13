import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CryptoCredentialsContext } from "../../store/cryptoCredentials-context";

export default function SignUp({ onChange }) {
  const { handleCreateAccount, userAccounts } = useContext(
    CryptoCredentialsContext
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  console.log(error);

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
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!firstName || !lastName || !email || !password) {
      setError("Invalid inputs");
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
      userAccounts.length > 0 &&
      userAccounts.some((account) => account.email === email)
    ) {
      setError("Email taken.");
      return;
    }

    handleCreateAccount(firstName, lastName, email, password);
  }

  return (
    <div className="bg-[#23272Eff] rounded-lg text-white w-[28rem] h-[40rem] flex flex-col items-start px-20 py-8 gap-6 shadow-2xl">
      <h1 className="text-yellow-400 text-3xl mb-8">Sign up</h1>
      <div className="flex w-full gap-5">
        <div className="w-1/2">
          <label htmlFor="first-name" className="uppercase text-sm w-full">
            First Name
          </label>
          <input
            onChange={() => {
              handleNameInputs(event, "first");
            }}
            type="text"
            id="first-name"
            className="bg-stone-100 text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
          />
        </div>{" "}
        <div className="w-1/2">
          <label htmlFor="last-name" className=" uppercase text-sm">
            Last Name
          </label>
          <input
            onChange={() => {
              handleNameInputs(event, "second");
            }}
            type="text"
            id="last-name"
            className="bg-stone-100 text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="email">E-MAIL</label>
        <input
          onChange={() => {
            handleEmailPasswordInputs(event, "email");
          }}
          type="email"
          name=""
          id="email"
          className="bg-stone-100 text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
        />
      </div>
      <div className="flex flex-wrap w-full gap-5">
        <div className="w-full">
          <label htmlFor="password" className="uppercase text-sm">
            password
          </label>
          <input
            onChange={() => {
              handleEmailPasswordInputs(event, "password");
            }}
            type="password"
            name=""
            id="password"
            className="bg-stone-100 text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
          />
        </div>{" "}
        <div className="w-full">
          <label htmlFor="confirm-password" className=" uppercase text-sm">
            confirm password
          </label>
          <input
            onChange={handleConfirmPassword}
            type="password"
            name=""
            id="confirm-password"
            className="bg-stone-100 text-black px-4 rounded-md h-8 w-full focus:bg-stone-200 focus:outline-none"
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
    </div>
  );
}

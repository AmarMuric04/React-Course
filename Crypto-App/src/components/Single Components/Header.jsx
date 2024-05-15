import { Link } from "react-router-dom";
import Logo from "/public/FinalLogo.png";
import Image from "./Image";
import { useContext, useEffect, useState } from "react";
import { CryptoContext } from "../../store/crypto-context";

export default function Header() {
  const { userAccount, handleLogOut } = useContext(CryptoContext);

  const [openHeader, setOpenHeader] = useState("");

  useEffect(() => {
    if (openHeader === "open") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openHeader]);

  function handleHeader(identifier) {
    setOpenHeader(identifier);
  }

  return (
    <>
      <header className="hidden lg:flex absolute top-0 left-0 right-0 bg-[#1A1C22ff] px-16 h-16 items-center justify-between flex-wrap">
        <div className="flex items-center h-full gap-3">
          <Image image={Logo} className="w-10" svgSize="1.5" />
          <h1 className="text-2xl text-yellow-400 tracking-[0.3rem]">
            B<span className="text-stone-700 text-2xl">LAJV</span>
            INANCE
          </h1>
          <ul className="hidden lg:flex text-xs xl:text-lg text-white gap-5 items-center ml-8 font-bold ">
            <Link
              to="/"
              className="cursor-pointer hover:text-yellow-400 transition-all"
            >
              Home
            </Link>
            <Link
              to="/crypto-list"
              className="cursor-pointer hover:text-yellow-400 transition-all"
            >
              List of Cryptos
            </Link>
            <Link
              to="/buy-crypto"
              className="cursor-pointer hover:text-yellow-400 transition-all"
            >
              Buy Crypto
            </Link>
            <Link
              to="/my-wallet"
              className="cursor-pointer hover:text-yellow-400 transition-all"
            >
              My Wallet
            </Link>
            <Link
              to="/earn"
              className="cursor-pointer hover:text-yellow-400 transition-all"
            >
              Earn
            </Link>
            <Link
              to="/contact"
              className="cursor-pointer hover:text-yellow-400 transition-all"
            >
              Contact
            </Link>
            <Link
              to="/sell-crypto"
              className="cursor-pointer hover:text-yellow-400 transition-all"
            >
              Sell Crypto
            </Link>
          </ul>
        </div>

        {!userAccount ? (
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
        ) : (
          <button
            onClick={handleLogOut}
            className="text-[#1A1C22ff] bg-yellow-400 py-2 px-4 rounded-md hover:bg-yellow-500 transition-all font-bold"
          >
            Log out
          </button>
        )}
      </header>
      <header className="lg:hidden absolute top-0 left-0 w-full h-16 bg-[#1A1C22ff] flex items-center text-white justify-between px-4 pl-8">
        <div className="flex items-center h-full gap-1 z-50">
          <Image image={Logo} className="w-5" svgSize="1.5" />
          <h1 className="text-xs text-yellow-400 tracking-[0.3rem]">
            B<span className="text-stone-700 text-xs">LAJV</span>
            INANCE
          </h1>
        </div>
        {!openHeader && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.8em"
            height="1.8em"
            viewBox="0 0 24 24"
            className="z-50"
            onClick={() => handleHeader("open")}
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-dasharray="24"
              stroke-dashoffset="24"
              stroke-linecap="round"
              stroke-width="2"
            >
              <path d="M5 5H19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.2s"
                  values="24;0"
                />
              </path>
              <path d="M5 12H19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.2s"
                  dur="0.2s"
                  values="24;0"
                />
              </path>
              <path d="M5 19H19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.2s"
                  values="24;0"
                />
              </path>
            </g>
          </svg>
        )}
        {openHeader === "closed" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.8em"
            height="1.8em"
            viewBox="0 0 24 24"
            className="z-50"
            onClick={() => handleHeader("open")}
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
            >
              <path d="M5 5L19 19">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.2s"
                  values="M5 5L19 19;M5 5L19 5"
                />
              </path>
              <path d="M12 12H12" opacity="0">
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.1s"
                  dur="0.2s"
                  values="M12 12H12;M5 12H19"
                />
                <set attributeName="opacity" begin="0.2s" to="1" />
              </path>
              <path d="M5 19L19 5">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.2s"
                  values="M5 19L19 5;M5 19L19 19"
                />
              </path>
            </g>
          </svg>
        )}
        {openHeader === "open" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.8em"
            height="1.8em"
            viewBox="0 0 24 24"
            className="z-50"
            onClick={() => handleHeader("closed")}
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
            >
              <path d="M5 5L19 5">
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.1s"
                  dur="0.2s"
                  values="M5 5L19 5;M5 5L19 19"
                />
              </path>
              <path d="M5 12H19">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.2s"
                  values="M5 12H19;M12 12H12"
                />
                <set attributeName="opacity" begin="0.4s" to="0" />
              </path>
              <path d="M5 19L19 19">
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.1s"
                  dur="0.2s"
                  values="M5 19L19 19;M5 19L19 5"
                />
              </path>
            </g>
          </svg>
        )}
        <div
          className={`fixed top-0 bottom-0 z-10 flex items-center justify-center ${
            openHeader === "open" ? "left-4" : "left-full"
          } bg-[#23272Eff] w-full h-screen transition-all`}
        >
          <ul className="mt-32 flex flex-col w-[90%] h-[90%] gap-5 text-lg font-semibold">
            <Link to="/" className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-opacity="0"
                  d="M5 8.5L12 3L19 8.5V21H15V13L14 12H10L9 13V21H5V8.5Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.9s"
                    dur="0.15s"
                    values="0;0.3"
                  />
                </path>
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    stroke-dasharray="15"
                    stroke-dashoffset="15"
                    d="M4.5 21.5h15"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.2s"
                      values="15;0"
                    />
                  </path>
                  <path
                    stroke-dasharray="15"
                    stroke-dashoffset="15"
                    d="M4.5 21.5V8M19.5 21.5V8"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.2s"
                      dur="0.2s"
                      values="15;0"
                    />
                  </path>
                  <path
                    stroke-dasharray="24"
                    stroke-dashoffset="24"
                    d="M9.5 21.5V12.5H14.5V21.5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.4s"
                      dur="0.4s"
                      values="24;0"
                    />
                  </path>
                  <path
                    stroke-dasharray="30"
                    stroke-dashoffset="30"
                    stroke-width="2"
                    d="M2 10L12 2L22 10"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.5s"
                      dur="0.4s"
                      values="30;0"
                    />
                  </path>
                </g>
              </svg>
              Home
            </Link>
            <Link to="/crypto-list" className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M10 6h18v2H10zm0 18h18v2H10zm0-9h18v2H10zm-6 0h2v2H4zm0-9h2v2H4zm0 18h2v2H4z"
                />
              </svg>
              List of Cryptos
            </Link>
            <Link to="/buy-crypto" className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.24 10.56c-.31 1.24-2.24.61-2.84.44l.55-2.18c.62.18 2.61.44 2.29 1.74m-3.11 1.56l-.6 2.41c.74.19 3.03.92 3.37-.44c.36-1.42-2.03-1.79-2.77-1.97m10.57 2.3c-1.34 5.36-6.76 8.62-12.12 7.28S.963 14.94 2.3 9.58A9.996 9.996 0 0 1 14.42 2.3c5.35 1.34 8.61 6.76 7.28 12.12m-7.49-6.37l.45-1.8l-1.1-.25l-.44 1.73c-.29-.07-.58-.14-.88-.2l.44-1.77l-1.09-.26l-.45 1.79c-.24-.06-.48-.11-.7-.17l-1.51-.38l-.3 1.17s.82.19.8.2c.45.11.53.39.51.64l-1.23 4.93c-.05.14-.21.32-.5.27c.01.01-.8-.2-.8-.2L6.87 15l1.42.36c.27.07.53.14.79.2l-.46 1.82l1.1.28l.45-1.81c.3.08.59.15.87.23l-.45 1.79l1.1.28l.46-1.82c1.85.35 3.27.21 3.85-1.48c.5-1.35 0-2.15-1-2.66c.72-.19 1.26-.64 1.41-1.62c.2-1.33-.82-2.04-2.2-2.52"
                />
              </svg>
              Buy Cryptos
            </Link>
            <Link to="/earn" className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M1 4.25C1 3.56 1.56 3 2.25 3h9.5c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-9.5C1.56 11 1 10.44 1 9.75zm3 .25V4H3v.5a.5.5 0 0 1-.5.5H2v1h.5A1.5 1.5 0 0 0 4 4.5M9 7a2 2 0 1 0-4 0a2 2 0 0 0 4 0m2-3h-1v.5A1.5 1.5 0 0 0 11.5 6h.5V5h-.5a.5.5 0 0 1-.5-.5zM4 9.5A1.5 1.5 0 0 0 2.5 8H2v1h.5a.5.5 0 0 1 .5.5v.5h1zm7 .5v-.5a.5.5 0 0 1 .5-.5h.5V8h-.5A1.5 1.5 0 0 0 10 9.5v.5zm-6.5 3a1.5 1.5 0 0 1-1.427-1.036Q3.281 12 3.5 12h8.25A2.25 2.25 0 0 0 14 9.75V5.085A1.5 1.5 0 0 1 15 6.5v3.25A3.25 3.25 0 0 1 11.75 13z"
                />
              </svg>
              Earn
            </Link>
            <Link to="/my-wallet" className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 4H2v16h20zm-6.25 10.09L4 11.22V10h16v.53zM4 6h16v2H4z"
                />
              </svg>
              My Wallet
            </Link>
            <Link to="/contact" className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 14q.825 0 1.413-.587T14 12t-.587-1.412T12 10t-1.412.588T10 12t.588 1.413T12 14m-4 4h8v-.575q0-.6-.325-1.1t-.9-.75q-.65-.275-1.35-.425T12 15t-1.425.15t-1.35.425q-.575.25-.9.75T8 17.425zm12 4H4V2h10l6 6z"
                />
              </svg>
              Contact
            </Link>
            <Link to="/sell-crypto" className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m21.4 14.25l-7.15 7.15q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45l-8.825-8.825q-.275-.275-.425-.637T2 11.175V4q0-.825.588-1.412T4 2h7.175q.4 0 .775.163t.65.437l8.8 8.825q.3.3.438.675t.137.75t-.137.738t-.438.662M6.5 8q.625 0 1.063-.437T8 6.5t-.437-1.062T6.5 5t-1.062.438T5 6.5t.438 1.063T6.5 8"
                />
              </svg>
              Sell Cryptos
            </Link>
            {!userAccount ? (
              <div className="flex gap-3 w-full flex-col">
                <Link to="/login" className="w-full flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="46"
                        stroke-dashoffset="46"
                        d="M8 5V4C8 3.44772 8.44772 3 9 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H9C8.44771 21 8 20.5523 8 20V19"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.5s"
                          values="46;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="12"
                        stroke-dashoffset="12"
                        d="M4 12h11"
                        opacity="0"
                      >
                        <set attributeName="opacity" begin="0.6s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.6s"
                          dur="0.2s"
                          values="12;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="6"
                        stroke-dashoffset="6"
                        d="M15 12l-3.5 -3.5M15 12l-3.5 3.5"
                        opacity="0"
                      >
                        <set attributeName="opacity" begin="0.8s" to="1" />
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.8s"
                          dur="0.2s"
                          values="6;0"
                        />
                      </path>
                    </g>
                  </svg>
                  Log in
                </Link>
                <Link to="/signup" className="w-full flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="20"
                        stroke-dashoffset="20"
                        d="M3 21H21"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.3s"
                          values="20;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="44"
                        stroke-dashoffset="44"
                        d="M7 17V13L17 3L21 7L11 17H7"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.4s"
                          dur="0.6s"
                          values="44;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="8"
                        stroke-dashoffset="8"
                        d="M14 6L18 10"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="1s"
                          dur="0.2s"
                          values="8;0"
                        />
                      </path>
                    </g>
                  </svg>{" "}
                  Sign up
                </Link>
              </div>
            ) : (
              <Link
                onClick={handleLogOut}
                className="w-full flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <path
                      stroke-dasharray="46"
                      stroke-dashoffset="46"
                      d="M16 5V4C16 3.44772 15.5523 3 15 3H6C5.44771 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H15C15.5523 21 16 20.5523 16 20V19"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.5s"
                        values="46;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="12"
                      stroke-dashoffset="12"
                      d="M10 12h11"
                      opacity="0"
                    >
                      <set attributeName="opacity" begin="0.6s" to="1" />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.6s"
                        dur="0.2s"
                        values="12;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="6"
                      stroke-dashoffset="6"
                      d="M21 12l-3.5 -3.5M21 12l-3.5 3.5"
                      opacity="0"
                    >
                      <set attributeName="opacity" begin="0.8s" to="1" />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.8s"
                        dur="0.2s"
                        values="6;0"
                      />
                    </path>
                  </g>
                </svg>
                Sign out
              </Link>
            )}
          </ul>
          <p className="absolute top-[95%] flex gap-2 text-gray-400 items-center text-xs text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-32-88a32 32 0 0 0 57.6 19.2a8 8 0 0 1 12.8 9.61a48 48 0 1 1 0-57.62a8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128"
              />
            </svg>
            Created by Murga. All rights reserved.
          </p>
        </div>
      </header>
    </>
  );
}

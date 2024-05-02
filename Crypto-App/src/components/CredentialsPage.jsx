import Logo from "../../public/YellowLogoMain.png";
import BG from "../../public/LoginBGmain.jpg";

import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { useState } from "react";

export default function CredentialsPage({ page, onChangeMainPage }) {
  const [showPage, setShowPage] = useState(page);

  function handleChangePage(identifier) {
    setShowPage(identifier);
  }

  return (
    <main
      id="signup"
      className="bg-stone-200 w-screen h-screen grid place-items-center"
    >
      <p
        onClick={() => onChangeMainPage("home")}
        className="flex gap-3 absolute top-3 right-10 items-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.78em"
          height="1em"
          viewBox="0 0 16 9"
        >
          <path
            fill="currentColor"
            d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
          />
          <path
            fill="currentColor"
            d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
          />
        </svg>
        Back to site
      </p>
      <div
        id="signup-inner"
        className="w-[95%] h-[90%] rounded-xl flex justify-between px-8 pt-16 pb-32 flex-wrap"
      >
        <div className="flex flex-col gap-3 w-[40rem] ml-16">
          <img src={Logo} className="w-32 mb-16 ml-16" alt="" />
          <h1 id="signup-text" className="text-5xl font-thin text-yellow-400">
            Your Path to Financial Freedom
          </h1>
          <p className="text-stone-500">
            Discover the power of cryptocurrency with Blajvinance, your premier
            platform for secure financial transactions. Whether you're intrigued
            by Bitcoin, Ethereum, or any other digital currency, our
            user-friendly interface and robust security protocols make
            navigating the world of crypto investing a breeze. Join our
            community today and unlock the potential of digital assets to
            reshape your financial future.
          </p>
          <p className="text-stone-500">
            At Blajvinance, safeguarding your financial data is our top
            priority. With state-of-the-art encryption and stringent security
            measures, we ensure your information remains protected at all times.
            Trust in our commitment to transparency and integrity as you embark
            on your journey into the exciting realm of cryptocurrency. Sign up
            now and take the first step towards a more secure and prosperous
            tomorrow!
          </p>
        </div>
        {showPage === "login" ? (
          <LogIn onChange={handleChangePage} />
        ) : (
          <SignUp onChange={handleChangePage} />
        )}
      </div>
    </main>
  );
}

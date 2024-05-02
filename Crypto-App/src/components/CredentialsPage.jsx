import Logo from "../../public/MainLogo.png";
import BG from "../../public/LoginBGmain.jpg";

import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { useState } from "react";

export default function CredentialsPage({ page }) {
  const [showPage, setShowPage] = useState(page);

  function handleChangePage(identifier) {
    setShowPage(identifier);
  }

  console.log(page);

  return (
    <main
      id="signup"
      className="bg-white w-screen h-screen grid place-items-center"
    >
      <div
        id="signup-inner"
        className="w-[95%] h-[90%] rounded-xl flex justify-between px-8 pt-16 pb-32 flex-wrap"
      >
        <div className="flex flex-col gap-3 w-[40rem] ml-16">
          <img src={Logo} className="w-32 mb-16 ml-16" alt="" />
          <h1 id="signup-text" className="text-5xl font-thin text-yellow-500">
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
          <LogIn onChange={() => handleChangePage("login")} />
        ) : (
          <SignUp onChange={() => handleChangePage("signup")} />
        )}
      </div>
    </main>
  );
}

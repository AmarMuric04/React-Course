import { useState } from "react";
import InterestingCryptos from "../Single Components/InterestingCryptos";

export default function InterestingCryptosContainer() {
  const [hide, setHide] = useState(false);

  function handleToggleHide() {
    setHide(!hide);
  }

  return (
    <>
      <div className="flex justify-between px-4">
        <h1 className="text-md md:pl-0 md:text-[3rem] tracking-[0.2rem] uppercase mb-8">
          Market overview
        </h1>
        <p
          onClick={handleToggleHide}
          className="text-xs md:hidden hover:underline"
        >
          {hide ? "Show" : "Hide"}
        </p>
      </div>
      <section
        className={`flex flex-wrap w-full ${
          hide ? "h-0" : "h-[72rem] md:h-auto"
        } overflow-hidden justify-center gap-2 mb-16 transition-all`}
      >
        <InterestingCryptos
          classes="w-[98%] md:w-[30rem]"
          filterBy="volume"
          amount="4"
        />
        <InterestingCryptos
          classes="w-[98%] md:w-[30rem]"
          filterBy="change"
          amount="4"
        />
        <InterestingCryptos
          classes="w-[98%] md:w-[30rem]"
          filterBy="marketcap"
          amount="4"
        />
      </section>
    </>
  );
}

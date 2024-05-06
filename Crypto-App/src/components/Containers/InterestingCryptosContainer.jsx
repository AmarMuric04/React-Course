import InterestingCryptos from "../Single Components/InterestingCryptos";

export default function InterestingCrypto() {
  return (
    <>
      <h1 className="text-[3rem] tracking-[0.2rem] uppercase mb-8">
        Market overview
      </h1>
      <section className="flex flex-wrap w-auto justify-between mb-16">
        <InterestingCryptos classes="w-[33%]" filterBy="volume" amount="4" />
        <InterestingCryptos classes="w-[33%]" filterBy="change" amount="4" />
        <InterestingCryptos classes="w-[33%]" filterBy="marketcap" amount="4" />
      </section>
    </>
  );
}

import InterestingCryptos from "../Single Components/InterestingCryptos";

export default function InterestingCrypto() {
  return (
    <>
      <h1 className="text-4xl font-bold uppercase mb-8">Market overview</h1>
      <section className="flex flex-wrap w-ful justify-between px-16 mb-16">
        <InterestingCryptos classes="w-[30%]" filterBy="volume" />
        <InterestingCryptos classes="w-[30%]" filterBy="change" />
        <InterestingCryptos classes="w-[30%]" filterBy="marketcap" />
      </section>
    </>
  );
}

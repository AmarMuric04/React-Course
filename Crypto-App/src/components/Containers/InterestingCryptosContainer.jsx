import InterestingCryptos from "../Single Components/InterestingCryptos";

export default function InterestingCrypto() {
  return (
    <>
      <h1 className="text-4xl font-bold uppercase mb-8">Market overview</h1>
      <section className="flex flex-wrap w-ful justify-between px-16 mb-16">
        <InterestingCryptos filterBy="volume" />
        <InterestingCryptos filterBy="change" />
        <InterestingCryptos filterBy="marketcap" />
      </section>
    </>
  );
}

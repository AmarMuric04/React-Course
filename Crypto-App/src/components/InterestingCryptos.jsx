import InterestingCryptosContainer from "./InterestingCryptosContainer";

export default function InterestingCrypto() {
  return (
    <>
      <h1 className="text-4xl font-bold uppercase mb-8">Market overview</h1>
      <section className="flex flex-wrap w-ful justify-between px-16 mb-16">
        <InterestingCryptosContainer filterBy="volume" />
        <InterestingCryptosContainer filterBy="change" />
        <InterestingCryptosContainer filterBy="marketcap" />
      </section>
    </>
  );
}

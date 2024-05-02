import InterestingCryptosContainer from "./InterestingCryptosContainer";

export default function InterestingCrypto() {
  return (
    <section className="flex flex-wrap w-ful justify-between px-16 mb-16">
      <InterestingCryptosContainer filterBy="volume" />
      <InterestingCryptosContainer filterBy="change" />
      <InterestingCryptosContainer filterBy="marketcap" />
    </section>
  );
}

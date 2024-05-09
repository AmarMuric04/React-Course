import Header from "../Single Components/Header";

import BuyCryptoLeftSide from "./BuyCryptoLeftSide/BuyCryptoLeftSide";
import BuyCryptoRightSide from "./BuyCryptoRightSide/BuyCryptoRightSide";
import { useParams } from "react-router-dom";
import Footer from "../Single Components/Footer";
import CoinPrice from "./BuyCryptoRightSide/components/CoinPrice";

import Navigation from "./BuyCryptoLeftSide/components/Navigation";

export default function BuyCryptoPage() {
  const { id } = useParams();

  window.scrollTo(0, 0);

  return (
    <main className="bg-[#1A1C22ff] text-white h-full min-h-screen w-full min-w-screen flex flex-col items-center">
      <Header />
      <div className="w-[100%] xl:w-[80rem] mt-16">
        <Navigation />
        <CoinPrice />
        <div className="flex w-full min-h-screen h-full flex-wrap flex-col-reverse items-center lg:items-start lg:flex-row">
          <BuyCryptoLeftSide id={id} />
          <BuyCryptoRightSide id={id} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

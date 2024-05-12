import { useContext } from "react";
import Image from "../../Single Components/Image";
import image1 from "/public/main1.jpeg";
import image2 from "/public/main2.jpg";
import image3 from "/public/main3.png";
import image4 from "/public/main4.jpg";
import { CryptoContext } from "../../../store/crypto-context";

export default function CardsContainer() {
  const { handleCustomToFixed, _mainCoinsList } = useContext(CryptoContext);

  return (
    <div className="w-full flex justify-around flex-col items-center gap-10 lg:gap-4 lg:flex-row flex:items-start">
      <div className="w-[50%] lg:w-1/4 min-w-64 h-96  border-[0.1rem] border-[#23272Eff] bg-[#1A1C22ff]  rounded-lg flex flex-col items-center p-8 justify-center hover:bg-[#23272Eff] hover:scale-[1.1] transition-all">
        <Image image={image1} className="h-32" />
        <span className="flex font-bold text-3xl tracking-[0.2rem] text-nowrap">
          ${" "}
          {handleCustomToFixed(
            _mainCoinsList.reduce(
              (accumulator, currentValue) =>
                accumulator + Number(currentValue.volumeUsd24Hr),
              0
            ) / 1000000
          ) + "B"}{" "}
        </span>
        <h1 className="text-lg text-center text-gray-400 mt-4">
          Was invested into crypto in the last 24 hours
        </h1>
      </div>
      <div className="w-[50%] lg:w-1/4 min-w-64 h-96 justify-center  border-[0.1rem] border-[#23272Eff] bg-[#1A1C22ff]  rounded-lg flex flex-col items-center p-8 hover:bg-[#23272Eff] hover:scale-[1.1] transition-all">
        {handleCustomToFixed(
          _mainCoinsList.reduce(
            (accumulator, currentValue) =>
              accumulator + Number(currentValue.changePercent24Hr),
            0
          )
        ) > 0 ? (
          <Image image={image3} className="h-32" />
        ) : (
          <Image image={image4} className="h-32" />
        )}
        <span className="text-4xl tracking-[0.2rem] font-bold  text-nowrap">
          {handleCustomToFixed(
            _mainCoinsList.reduce(
              (accumulator, currentValue) =>
                accumulator + Number(currentValue.changePercent24Hr),
              0
            )
          )}
          %{" "}
        </span>
        <h1 className="text-gray-400 text-lg mt-4 text-center">
          Status of Crypto in the last 24 hours
        </h1>
      </div>{" "}
      <div className="w-[50%] lg:w-1/4 min-w-64 h-96 justify-center  border-[0.1rem] border-[#23272Eff] bg-[#1A1C22ff]  rounded-lg flex flex-col items-center p-8 hover:bg-[#23272Eff] hover:scale-[1.1] transition-all">
        <Image image={image2} className="h-32" />
        <span className="text-4xl font-bold tracking-[0.2rem] truncate-[0.2rem] w-full text-center">
          590 Trillion
        </span>
        <h1 className="mt-4 text-lg text-center text-gray-400">
          Worth of crypto supply ready to be bought
        </h1>
      </div>
    </div>
  );
}

import { useState } from "react";
import SubTitle from "./SubTitle";
import { LikeIcon, DislikeIcon, InfoIcon } from "../../../../assets/icons";

export default function BuyCryptoThoughts({ coin }) {
  const [clickedGood, setClickedGood] = useState(false);
  const [clickedBad, setClickedBad] = useState(false);

  function handleClickedFeeling(identifier) {
    if (identifier === "good") {
      setClickedGood(true);
      setClickedBad(false);
    } else {
      setClickedBad(true);
      setClickedGood(false);
    }
  }
  return (
    <>
      <div className="flex items-center justify-between mt-16">
        <SubTitle
          title={`
          How do you feel about ${coin.coinName} today?
        `}
        />
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleClickedFeeling("good")}
            className="flex items-center gap-1 bg-[#23272Eff] px-2 py-1 rounded-md focus:outline-none"
          >
            <LikeIcon svgSize="1" />
            <span className="text-white font-bold">Good</span>
          </button>
          <button
            onClick={() => handleClickedFeeling("bad")}
            className="flex items-center gap-1 bg-[#23272Eff] px-2 py-1 rounded-md focus:outline-none"
          >
            <DislikeIcon svgSize="1" />
            <span className="text-white font-bold">Bad</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col h-16 gap-3 justify-between rounded-md mt-8 px-2 py-1 bg-[#23272Eff]">
        <div className="flex w-full h-full justify-between">
          <div className="flex items-center gap-3 w-1/3 md:w-1/6 justify-start">
            <LikeIcon svgSize="1" />
            <p className="flex gap-2">
              Good{" "}
              <span className="text-green-400 font-bold">
                {clickedGood ? "2" : "1"}
              </span>
            </p>
          </div>
          <div className="flex w-1/3 md:w-4/6 gap-2 h-full items-center justify-center">
            <div
              className={`h-1/2 skew-x-[-45deg] transition-all w-${
                clickedGood ? "2/3" : clickedBad ? "1/3" : "1/2"
              } bg-green-400`}
            ></div>
            <div
              className={`h-1/2 skew-x-[-45deg] transition-all w-${
                clickedBad ? "2/3" : clickedGood ? "1/3" : "1/2"
              } bg-red-400`}
            ></div>
          </div>
          <div className="flex items-center gap-3 w-1/3 md:w-1/6 justify-end">
            <DislikeIcon svgSize="1" />
            <p className="flex gap-2">
              Bad{" "}
              <span className="text-red-400 font-bold">
                {clickedBad ? "2" : "1"}
              </span>
            </p>
          </div>
        </div>
        <p className="flex items-center gap-2 text-sm text-stone-600">
          <InfoIcon svgSize="1" />
          Note: This information is for reference only.
        </p>
      </div>
    </>
  );
}

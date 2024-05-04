import { useState } from "react";

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
        <h2 className="font-bold text-2xl">
          How do you feel about {coin.coinName} today?
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleClickedFeeling("good")}
            className="flex items-center gap-1 bg-stone-400 px-2 py-1 rounded-md focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"
              />
            </svg>
            <span className="text-white font-bold">Good</span>
          </button>
          <button
            onClick={() => handleClickedFeeling("bad")}
            className="flex items-center gap-1 bg-stone-400 px-2 py-1 rounded-md focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2"
              />
            </svg>
            <span className="text-white font-bold">Bad</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-between rounded-md mt-8 px-2 py-1 bg-stone-400">
        <div className="flex w-full h-full">
          <div className="flex items-center gap-3 w-1/6 justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"
              />
            </svg>
            <p className="flex gap-2">
              Good{" "}
              <span className="text-green-400 font-bold">
                {clickedGood ? "2" : "1"}
              </span>
            </p>
          </div>
          <div className="flex w-4/6 gap-2 h-full items-center justify-center">
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
          <div className="flex items-center gap-3 w-1/6 justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2"
              />
            </svg>
            <p className="flex gap-2">
              Bad{" "}
              <span className="text-red-400 font-bold">
                {clickedBad ? "2" : "1"}
              </span>
            </p>
          </div>
        </div>
        <p className="flex items-center gap-2 text-sm text-stone-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
            />
          </svg>
          Note: This information is for reference only.
        </p>
      </div>
    </>
  );
}

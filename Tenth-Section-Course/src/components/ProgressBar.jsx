import { useState, useEffect, useRef } from "react";

export default function ProgressBar({ time, answered }) {
  const [remainingTime, setRemainingTime] = useState(time);

  let interval = useRef();

  useEffect(() => {
    interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
      console.log(time);
      if (remainingTime <= 0) clearInterval(interval);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      className={answered ? "answered" : ""}
      value={remainingTime}
      max={time}
    />
  );
}

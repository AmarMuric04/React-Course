import { useState, useEffect, useRef } from "react";

export default function ProgressBar({ time }) {
  const [remainingTime, setRemainingTime] = useState(time);

  let interval = useRef();

  useEffect(() => {
    clearInterval(interval);

    interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 500);
      if (remainingTime <= 0) clearInterval(interval);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={time} />;
}

import { useEffect, useState } from "react";

export default function QuestionTimer({ timer, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timeout = setTimeout(onTimeout, timer);

    return () => {
      clearTimeout(timeout);
    };
  }, [onTimeout, timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress id="question-time" value={remainingTime} max={timer} />;
}

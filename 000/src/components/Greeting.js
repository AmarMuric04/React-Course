import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState();

  const handleChangeText = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>It's good to see u</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={handleChangeText}>Change text!</button>
    </div>
  );
}

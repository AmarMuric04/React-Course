import { useState } from "react";

export default function Player() {
  const [inputName, setInputName] = useState("unknown entity");
  const [playerName, setPlayerName] = useState("unknown entity");

  function handleInputChange(event) {
    setInputName(event.target.value);
  }

  function handleGivePlayerName() {
    inputName !== "unknown entity" ? setPlayerName(`${inputName}`) : null;
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input onChange={handleInputChange} type="text" value={inputName} />
        <button onClick={handleGivePlayerName}>Set Name</button>
      </p>
    </section>
  );
}

import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [inputName, setInputName] = useState();

  function handleGivePlayerName() {
    setInputName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {inputName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleGivePlayerName}>Set Name</button>
      </p>
    </section>
  );
}

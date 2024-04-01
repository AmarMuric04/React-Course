import Logo from "./assets/quiz-logo.png";

import { useState } from "react";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState("");
  const [buttonClass, setButtonClass] = useState("");

  function handleSelect(identifier) {
    setSelectedAnswer(identifier);
    setButtonClass("selected");

    setTimeout(() => {
      setCheckAnswer(identifier);
      setButtonClass("correct");
    }, 1000);
  }
  return (
    <>
      <header>
        <img src={Logo} alt="" />
        <h1>REACTQUIZ</h1>
      </header>
      <main id="quiz">
        <div id="question">
          <progress value={100} max={150} />

          <h2>How do you typically render list content in React apps?</h2>
        </div>
        <menu id="answers">
          <div onClick={handleSelect.bind(null, "first")} className="answer">
            <button className={selectedAnswer === "first" ? buttonClass : ""}>
              Lorem ipsum dolor sit amet.
            </button>
          </div>
          <div onClick={handleSelect.bind(null, "second")} className="answer">
            <button className={selectedAnswer === "second" ? buttonClass : ""}>
              Lorem ipsum dolor sit amet.
            </button>
          </div>
          <div onClick={handleSelect.bind(null, "third")} className="answer">
            <button className={selectedAnswer === "third" ? buttonClass : ""}>
              Lorem ipsum dolor sit amet.
            </button>
          </div>
          <div onClick={handleSelect.bind(null, "fourth")} className="answer">
            <button className={selectedAnswer === "fourth" ? buttonClass : ""}>
              Lorem ipsum dolor sit amet.
            </button>
          </div>
        </menu>
      </main>
    </>
  );
}

export default App;

import Logo from "./assets/quiz-logo.png";
import QUESTIONS from "./questions.js";

import { useState } from "react";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState("");
  const [buttonClass, setButtonClass] = useState("");
  const [question, setQuestion] = useState(
    <>
      <div id="question">
        <progress value={100} max={150} />

        <h2>{QUESTIONS[0].text}</h2>
      </div>
      <menu id="answers">
        {QUESTIONS[0].answers.map((answer, index) => (
          <div
            key={index}
            onClick={handleSelect.bind(null, "first")}
            className="answer"
          >
            <button className={selectedAnswer === "first" ? buttonClass : ""}>
              {answer}
            </button>
          </div>
        ))}
      </menu>
    </>
  );

  let questionIndex = 0;

  function handleSelect(identifier) {
    setSelectedAnswer(identifier);
    setButtonClass("selected");

    setTimeout(() => {
      setCheckAnswer(identifier);
      setButtonClass("correct");
    }, 1000);

    if (questionIndex === QUESTIONS.length - 1) return;

    setTimeout(() => {
      handleShowQuestions(questionIndex);
    }, 2000);
  }

  function handleShowQuestions(index) {
    setQuestion(
      <>
        <div id="question">
          <progress value={100} max={150} />

          <h2>{QUESTIONS[index].text}</h2>
        </div>
        <menu id="answers">
          {QUESTIONS[index].answers.map((answer, i) => (
            <div
              key={i}
              onClick={handleSelect.bind(null, i)}
              className="answer"
            >
              <button className={selectedAnswer === i ? buttonClass : ""}>
                {answer}
              </button>
            </div>
          ))}
        </menu>
      </>
    );

    questionIndex++;
  }
  return (
    <>
      <header>
        <img src={Logo} alt="" />
        <h1>REACTQUIZ</h1>
      </header>
      <main id="quiz">{question}</main>
    </>
  );
}

export default App;

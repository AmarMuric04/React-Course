import Logo from "./assets/quiz-logo.png";
import QUESTIONS from "./questions.js";

import ProgressBar from "./components/ProgressBar.jsx";

import { useState, useReducer, useRef } from "react";

let progressBarElement = <ProgressBar time={4000} />;

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState("");
  const [buttonClass, setButtonClass] = useState("");

  const firstAnswer = useRef();
  const secondAnswer = useRef();
  const thirdAnswer = useRef();
  const fourthAnswer = useRef();

  const [question, questionDispatch] = useReducer(questionElementsReducer, {
    questionIndex: 0,
  });

  function questionElementsReducer(state, action) {
    setButtonClass("");
    return {
      questionIndex: state.questionIndex + 1,
    };
  }

  function handleSelect(identifier) {
    setSelectedAnswer(identifier);
    setButtonClass("selected");

    progressBarElement = <ProgressBar time={2000} />;

    setTimeout(() => {
      setCheckAnswer(identifier);
      progressBarElement = <p>penis</p>;
      if (
        identifier === "first" &&
        firstAnswer.current.textContent ===
          QUESTIONS[question.questionIndex].answers[0]
      )
        setButtonClass("correct");
      else setButtonClass("wrong");
    }, 3000);

    if (question.questionIndex === QUESTIONS.length - 1) return;

    setTimeout(() => {
      handleShowQuestions();
    }, 5000);
  }

  function handleShowQuestions(index) {
    questionDispatch();
  }
  return (
    <>
      <header>
        <img src={Logo} alt="" />
        <h1>REACTQUIZ</h1>
      </header>
      <main id="quiz">
        <div id="question">
          {progressBarElement}

          <h2>{QUESTIONS[question.questionIndex].text}</h2>
        </div>
        <menu id="answers">
          <div
            ref={firstAnswer}
            onClick={handleSelect.bind(null, "first")}
            className="answer"
          >
            <button className={selectedAnswer === "first" ? buttonClass : ""}>
              {QUESTIONS[question.questionIndex].answers[0]}
            </button>
          </div>
          <div
            ref={secondAnswer}
            onClick={handleSelect.bind(null, "second")}
            className="answer"
          >
            <button className={selectedAnswer === "second" ? buttonClass : ""}>
              {QUESTIONS[question.questionIndex].answers[1]}
            </button>
          </div>
          <div
            ref={thirdAnswer}
            onClick={handleSelect.bind(null, "third")}
            className="answer"
          >
            <button className={selectedAnswer === "third" ? buttonClass : ""}>
              {QUESTIONS[question.questionIndex].answers[2]}
            </button>
          </div>
          <div
            ref={fourthAnswer}
            onClick={handleSelect.bind(null, "fourth")}
            className="answer"
          >
            <button className={selectedAnswer === "fourth" ? buttonClass : ""}>
              {QUESTIONS[question.questionIndex].answers[3]}
            </button>
          </div>
        </menu>
      </main>
    </>
  );
}

export default App;

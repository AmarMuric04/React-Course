import Logo from "./assets/quiz-logo.png";
import QUESTIONS from "./questions.js";

import ProgressBar from "./components/ProgressBar.jsx";

import { useState, useReducer, useRef, useEffect } from "react";

export function App() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checkAnswer, setCheckAnswer] = useState("");
  const [buttonClass, setButtonClass] = useState("");
  const [progressBar, setProgressBar] = useState(<ProgressBar time={4000} />);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCheckAnswer(identifier);

      if (
        identifier === "first" &&
        firstAnswer.current.textContent ===
          QUESTIONS[question.questionIndex].answers[0]
      )
        setButtonClass("correct");
      else setButtonClass("wrong");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [selectedAnswer]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgressBar(<ProgressBar time={4000} />);
      handleShowQuestions();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  function handleSelect(identifier) {
    setSelectedAnswer(identifier);
    setButtonClass("selected");
    setProgressBar(<ProgressBar answered={true} time={2000} />);

    if (question.questionIndex === QUESTIONS.length - 1) return;
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
          {progressBar}

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

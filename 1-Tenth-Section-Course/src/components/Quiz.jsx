import { useState } from "react";
import QUESTIONS from "./questions";

import quizEndedImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizEnded = activeQuestionIndex === QUESTIONS.length;

  function handleAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }

  if (quizEnded)
    return (
      <div id="summary">
        <img src={quizEndedImg} alt="Trophy" />
        <h2>Quiz completed</h2>
      </div>
    );

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, index) => (
            <li key={answer} className="answer">
              <button onClick={handleAnswer.bind(null, answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

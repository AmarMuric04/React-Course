import { useState, useCallback } from "react";
import QUESTIONS from "./questions";

import quizEndedImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizEnded = activeQuestionIndex === QUESTIONS.length;

  const handleAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(handleAnswer.bind(null, null), [
    handleAnswer,
  ]);

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
        <QuestionTimer
          key={activeQuestionIndex}
          timer={7500}
          onTimeout={handleAnswer.bind(null, null)}
        />
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

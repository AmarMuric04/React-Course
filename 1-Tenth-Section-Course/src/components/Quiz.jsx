import { useState, useCallback } from "react";
import QUESTIONS from "./questions";

import quizEndedImg from "../assets/quiz-complete.png";
import Question from "./Question";

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

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

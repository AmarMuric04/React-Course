import { useState } from "react";

export default function FAQquestion({ question, props }) {
  const [showAnswer, setShowAnswer] = useState(false);

  function handleShowAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div {...props} className="flex flex-col gap-2 text-lg">
      <p
        className="font-bold py-6 px-2 cursor-pointer flex items-center justify-between"
        onClick={handleShowAnswer}
      >
        {question.question}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0.8em"
          height="0.8em"
          viewBox="0 0 24 24"
          className={`${showAnswer ? "rotate-180" : ""} transition-all`}
        >
          <path
            fill="currentColor"
            d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z"
          />
        </svg>
      </p>
      <p
        className={`${
          showAnswer ? "h-36 py-2" : "h-0 py-0"
        } pl-8 text-md transition-all overflow-hidden border-b-[0.1rem] border-stone-800`}
      >
        {question.answer}
      </p>
    </div>
  );
}

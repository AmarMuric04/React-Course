import FAQquestion from "./FAQquestion";

export default function FAQ({ questions }) {
  return (
    <div className="min-h-96 h-auto">
      {questions.map((question) => (
        <FAQquestion key={question.question} question={question} />
      ))}
    </div>
  );
}

export default function UnderlinedButton({ text, color }) {
  return (
    <p
      className={`text-${color}-400 underline cursor-pointer text-md font-bold flex items-center gap-2`}
    >
      {text}
    </p>
  );
}

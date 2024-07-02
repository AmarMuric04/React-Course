export default function CircleButton({ icon, extraClasses, ...props }) {
  return (
    <button
      {...props}
      className={`w-10 h-10 rounded-full grid place-items-center transition-all bg-yellow-500 hover:bg-yellow-600 shadow-md hover:shadow-xl ${extraClasses}`}
    >
      {icon}
    </button>
  );
}

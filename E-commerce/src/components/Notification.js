export default function Notification() {
  return (
    <div
      className="fixed z-50 top-4 left-1/2 flex items-center gap-4
     pr-16 pl-8 py-8 shadow-2xl bg-white rounded-xl poppins moveInAnimation"
    >
      <div className="h-16 w-16 rounded-full border-2 border-green-400 grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.3em"
          height="2.3em"
          viewBox="0 0 24 24"
          className="text-green-400"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-dasharray="80"
            stroke-dashoffset="80"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 11L12 3L15 4L14 10H21V13L18 20H7H3V11H7V20"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.8s"
              values="80;0"
            />
          </path>
        </svg>
      </div>
      <p className="m-0 text-green-400 text-lg">Successfully added!</p>
    </div>
  );
}

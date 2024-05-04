import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-stone-800 text-white w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m18.9 21l-5.475-5.475l2.1-2.1L21 18.9zM5.1 21L3 18.9L9.9 12l-1.7-1.7l-.7.7l-1.275-1.275v2.05l-.7.7L2.5 9.45l.7-.7h2.05L4 7.5l3.55-3.55q.5-.5 1.075-.725T9.8 3t1.175.225t1.075.725l-2.3 2.3L11 7.5l-.7.7L12 9.9l2.25-2.25q-.1-.275-.162-.575t-.063-.6q0-1.475 1.013-2.488t2.487-1.012q.375 0 .713.075t.687.225L16.45 5.75l1.8 1.8l2.475-2.475q.175.35.238.687t.062.713q0 1.475-1.012 2.488t-2.488 1.012q-.3 0-.6-.05t-.575-.175z"
          />
        </svg>
        Landing page under construction
      </h1>
      <p>
        Go to{" "}
        <Link className="font-bold" to="crypto-list">
          localhost:5173/crypto-list
        </Link>{" "}
        for now
      </p>
    </div>
  );
}

import Image from "./Image";
import Logo from "/public/FinalLogo.png";

export default function Footer() {
  return (
    <footer className="w-full h-64 relativeflex items-center flex-col justify-center text-white">
      <div className=" bg-[#23272Eff] flex flex-col items-center py-16">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg md:text-3xl text-yellow-400 flex gap-2 items-center text-center uppercase tracking-[0.3rem]">
            Invest in crypto{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="-2 -1.5 24 24"
            >
              <path
                fill="currentColor"
                d="M9 13.858h-.051A.949.949 0 0 1 8 12.909a1 1 0 1 0-2 0a2.949 2.949 0 0 0 2.949 2.949H9v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 0-6v-2h.022c.54 0 .978.438.978.978a1 1 0 0 0 2 0a2.978 2.978 0 0 0-2.978-2.978H11v-1a1 1 0 0 0-2 0v1a3 3 0 1 0 0 6zm2 0v-2a1 1 0 0 1 0 2m-2-6v2a1 1 0 1 1 0-2m1 13c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"
              />
            </svg>
          </h2>
          <p className="text-md md:text-2xl uppercase tracking-[0.1rem]">
            Be financially free
          </p>
        </div>
        <Image image={Logo} className="w-20 my-4 mt-8" svgSize="2"></Image>
        <div className="flex gap-8 mt-8 items-center flex-wrap justify-center">
          <h1 className="font-bold text-yellow-400">BLAJVINANCE</h1>
          <p>muricamar2004@gmail.com</p>
          <button
            onClick={() => {
              window.open("mailto:muricamar2004@gmail.com");
            }}
            className="text-yellow-400 p-1 border-[0.1rem] border-yellow-400 rounded-full hover:bg-stone-700 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 15V9h8V4.16L19.84 12L12 19.84V15z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-[#1A1C22ff] h-24 flex flex-col gap-2 items-center justify-center">
        <p className="flex items-center gap-3">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-32-88a32 32 0 0 0 57.6 19.2a8 8 0 0 1 12.8 9.61a48 48 0 1 1 0-57.62a8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128"
            />
          </svg>
          Created by Murga. All rights reserved.
        </p>
        <div className="flex gap-3 text-black">
          <a href="https://github.com/AmarMuric04" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.7em"
              height="1.7em"
              viewBox="0 0 24 24"
              className="cursor-pointer hover:text-yellow-400 transition-all"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/amar-muri%C4%87-52564b2a2/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.7em"
              height="1.7em"
              viewBox="0 0 24 24"
              className="cursor-pointer hover:text-yellow-400 transition-all"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

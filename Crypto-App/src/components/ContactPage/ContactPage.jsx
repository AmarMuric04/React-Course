import Header from "../Single Components/Header";
import Footer from "../Single Components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="w-full h-full lg:h-screen max-h-full bg-[#1A1C22ff] mt-16 text-white">
        <div className="h-[25rem] lg:h-1/2 w-full">
          <div className="w-full h-full flex justify-center gap-5 items-center flex-col">
            <h1 className="font-extrabold text-4xl">Contact</h1>
            <p className="text-gray-400 text-center">
              We're here to serve you with answers to any of your crypto
              exchange related inquiries.
              <br />
              How can we help?
            </p>
          </div>
        </div>
        <div className="w-full bg-[#23272Eff]">
          <div className="flex w-full justify-center gap-5 translate-y-[-5rem] flex-col items-center lg:flex-row lg:items-start">
            <div className="relative w-[80%]  sm:w-72 h-96 bg-white rounded-md flex flex-col items-center justify-start gap-3 p-5 text-black">
              <div className="p-4 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <g stroke-width="2">
                      <path
                        stroke-dasharray="66"
                        stroke-dashoffset="66"
                        d="M12 3H19V21H5V3H12Z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          values="66;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="5"
                        stroke-dashoffset="5"
                        d="M9 10H12"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="1s"
                          dur="0.2s"
                          values="5;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="6"
                        stroke-dashoffset="6"
                        d="M9 13H14"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="1.2s"
                          dur="0.2s"
                          values="6;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="7"
                        stroke-dashoffset="7"
                        d="M9 16H15"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="1.4s"
                          dur="0.2s"
                          values="7;0"
                        />
                      </path>
                    </g>
                    <path
                      stroke-dasharray="12"
                      stroke-dashoffset="12"
                      d="M14.5 3.5V6.5H9.5V3.5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.2s"
                        values="12;0"
                      />
                    </path>
                  </g>
                </svg>
              </div>
              <h1 className="font-bold text-xl">Call us</h1>
              <p className="text-gray-600 text-center mt-8">
                For any issue, probleo or any general questions you can email us
                at muricamar2004@gmail.com and start your email subject with
                "Message:"
              </p>
              <a
                className="absolute bottom-2 right-2 px-4 rounded-md shadow-lg hover:bg-gray-200 transition-all"
                href="mailto:muricamar2004@gmail.com?subject=Message:"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g transform="translate(24 0) scale(-1 1)">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="14"
                        stroke-dashoffset="14"
                        d="M19 12H5.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.3s"
                          values="14;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="8"
                        stroke-dashoffset="8"
                        d="M5 12L10 17M5 12L10 7"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.3s"
                          dur="0.2s"
                          values="8;0"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="relative w-[80%] sm:w-72 h-96 bg-white rounded-md flex flex-col items-center justify-start gap-3 p-5 text-black">
              <div className="p-4 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path
                      stroke-dasharray="64"
                      stroke-dashoffset="64"
                      d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="64;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="4"
                      stroke-dashoffset="4"
                      d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723"
                      opacity="0"
                    >
                      <set attributeName="opacity" begin="0.7s" to="1" />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.2s"
                        values="4;8"
                      />
                    </path>
                    <path
                      stroke-dasharray="10"
                      stroke-dashoffset="10"
                      d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535"
                      opacity="0"
                    >
                      <set attributeName="opacity" begin="1s" to="1" />
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="1s"
                        dur="0.2s"
                        values="10;20"
                      />
                    </path>
                  </g>
                </svg>
              </div>
              <h1 className="font-bold text-xl">Call us</h1>
              <p className="text-gray-600 text-center mt-8">
                For any verbal inquiries you can email us at
                muricamar2004@gmail.com and start your email subject with
                "Call:"
              </p>
              <a
                className="absolute bottom-2 right-2 px-4 rounded-md shadow-lg hover:bg-gray-200 transition-all"
                href="mailto:muricamar2004@gmail.com?subject=Call:"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g transform="translate(24 0) scale(-1 1)">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="14"
                        stroke-dashoffset="14"
                        d="M19 12H5.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.3s"
                          values="14;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="8"
                        stroke-dashoffset="8"
                        d="M5 12L10 17M5 12L10 7"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.3s"
                          dur="0.2s"
                          values="8;0"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="relative w-[80%] sm:w-72 h-96 bg-white rounded-md flex flex-col items-center justify-start gap-3 p-5 text-black">
              <div className="p-4 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                  >
                    <rect
                      width="18"
                      height="14"
                      x="3"
                      y="5"
                      stroke-dasharray="64"
                      stroke-dashoffset="64"
                      rx="1"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="64;0"
                      />
                    </rect>
                    <path
                      stroke-dasharray="24"
                      stroke-dashoffset="24"
                      d="M3 6.5L12 12L21 6.5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.6s"
                        dur="0.4s"
                        values="24;0"
                      />
                    </path>
                  </g>
                </svg>
              </div>
              <h1 className="font-bold text-xl">Email us</h1>
              <p className="text-gray-600 text-center mt-8">
                For any business related inquiries you can email us at
                muricamar2004@gmail.com and start your email subject with
                "Business:"
              </p>
              <a
                className="absolute bottom-2 right-2 px-4 rounded-md shadow-lg hover:bg-gray-200 transition-all"
                href="mailto:muricamar2004@gmail.com?subject=Business:"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g transform="translate(24 0) scale(-1 1)">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="14"
                        stroke-dashoffset="14"
                        d="M19 12H5.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.3s"
                          values="14;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="8"
                        stroke-dashoffset="8"
                        d="M5 12L10 17M5 12L10 7"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.3s"
                          dur="0.2s"
                          values="8;0"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

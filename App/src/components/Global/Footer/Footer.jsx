import { useState } from "react";

import Logo from "/Logo.png";

import { motion } from "framer-motion";

import AnimatedList from "@Animations/AnimatedList";

import SlideAndFadeIn from "@Animations/SlideAndFadeIn";
import FooterItem from "../Items/FooterItem";

export default function Footer() {
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="w-full lg:h-[40rem] h-[70rem] md:h-[60rem]">
      <motion.footer
        initial="hidden"
        animate={isInView ? "visible" : "outOfView"}
        whileInView={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
        variants={{
          hidden: { opacity: 0, y: 300 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              stiffness: 100,
            },
          },
          outOfView: { opacity: 0, y: 300 },
        }}
        className="w-full h-full bg-[#141210] flex flex-col items-center"
      >
        <AnimatedList className="w-full flex h-[13rem]">
          <FooterItem>
            <img
              className="object-cover w-full h-[5rem] lg:h-full"
              src="https://img.freepik.com/premium-photo/highquality-food-photography-grilled-meat-vegetables-dark-background-4k-resolution_561855-2896.jpg"
            />
          </FooterItem>
          <FooterItem>
            <img
              className="object-cover w-full h-[5rem] lg:h-full"
              src="https://c4.wallpaperflare.com/wallpaper/1016/938/374/food-high-resolution-desktop-backgrounds-wallpaper-preview.jpg"
            />
          </FooterItem>
          <FooterItem>
            <img
              className="object-cover w-full h-[5rem] lg:h-full"
              src="https://s.yimg.com/ny/api/res/1.2/rNXnLchmc4VHCIH02hfd8w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1OA--/https://media.zenfs.com/en/insidermonkey.com/64a63f085247830169a35b5b3d279198"
            />
          </FooterItem>
          <FooterItem>
            <img
              className="object-cover w-full h-[5rem] lg:h-full"
              src="https://e0.pxfuel.com/wallpapers/240/265/desktop-wallpaper-delicious-food-high-quality-resolution-japanese-cute-foods.jpg"
            />
          </FooterItem>
          <FooterItem>
            <img
              className="object-cover w-full h-[5rem] lg:h-full"
              src="https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/famous-food-photographers-1.jpg"
            />
          </FooterItem>
        </AnimatedList>
        <div className="w-[95%] md:w-[640px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] flex flex-col lg:flex-row lg:items-start items-center text-start gap-10 lg:text-start pt-8">
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center xl:items-start gap-4 xl:gap-0">
            <SlideAndFadeIn
              starting="-150"
              end="0"
              className="flex flex-col w-full xl:w-1/2"
            >
              <div className="flex text-yellow-400 items-center">
                <img className="h-20" src={Logo} />
                <p className="use-playwrite text-3xl text-yellow-400">
                  DineDivine
                </p>
              </div>
              <p className="use-poppins text-white my-4 text-sm">
                Your gateway to a culinary odyssey that celebrates the rich and
                diverse flavors from around the world.
              </p>
              <AnimatedList className="flex flex-col text-white use-poppins gap-4">
                <FooterItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    className="text-yellow-400"
                  >
                    <g fill="currentColor">
                      <path d="M22 12A10.002 10.002 0 0 0 12 2v2a8.003 8.003 0 0 1 7.391 4.938A8 8 0 0 1 20 12zM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10" />
                      <path d="M17.543 9.704A5.99 5.99 0 0 1 18 12h-1.8A4.199 4.199 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704" />
                    </g>
                  </svg>
                  <p>(+381) 063 000 000</p>
                </FooterItem>{" "}
                <FooterItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 36 36"
                    className="text-yellow-400"
                  >
                    <path
                      fill="currentColor"
                      d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z"
                      class="clr-i-solid clr-i-solid-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z"
                      class="clr-i-solid clr-i-solid-path-2"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                  <p>muricamar2004@gmail.com</p>
                </FooterItem>{" "}
                <FooterItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 20 20"
                    className="text-yellow-400"
                  >
                    <path
                      fill="currentColor"
                      d="M19.367 18.102L18 14h-1.5l.833 4H2.667l.833-4H2L.632 18.102C.285 19.146.9 20 2 20h16c1.1 0 1.715-.854 1.367-1.898M15 5A5 5 0 1 0 5 5c0 4.775 5 10 5 10s5-5.225 5-10m-7.7.06A2.699 2.699 0 0 1 10 2.361a2.699 2.699 0 1 1 0 5.399a2.7 2.7 0 0 1-2.7-2.7"
                    />
                  </svg>
                  <p>Serbia, Novi Pazar, 36300</p>
                </FooterItem>
              </AnimatedList>
            </SlideAndFadeIn>
            <div className="flex flex-col lg:flex-row xl:flex-col w-full gap-10 xl:gap-0 xl:w-1/2 text-white xl:pl-10">
              <h1 className="use-playfair text-lg xl:mb-8 font-bold text-green-400">
                Quick Link
              </h1>
              <AnimatedList className="flex flex-row md:flex-col lg:flex-row xl:flex-col gap-4 items-end">
                <FooterItem>Home</FooterItem>
                <FooterItem>About Us</FooterItem>
                <FooterItem>Shop</FooterItem>
                <FooterItem>Blog</FooterItem>
                <FooterItem>Licensing</FooterItem>
              </AnimatedList>
            </div>
          </div>{" "}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 xl:gap-0">
            <div className="flex flex-col w-full xl:w-1/2 text-white">
              <h1 className="use-playfair text-lg mb-8 font-bold text-green-400">
                Opening Hours
              </h1>
              <AnimatedList className="flex flex-row md:flex-col lg:flex-row xl:flex-col justify-between gap-8  w-full">
                <div>
                  <FooterItem extraClasses="use-poppins font-bold mb-4 h-4">
                    Sunday to Friday
                  </FooterItem>
                  <FooterItem extraClasses="use-poppins">
                    9:30 AM to 12:00PM
                  </FooterItem>
                </div>
                <div>
                  <FooterItem extraClasses="use-poppins font-bold mb-4 h-4">
                    Saturday
                  </FooterItem>
                  <FooterItem extraClasses="use-poppins">
                    12:30PM to 6:00PM
                  </FooterItem>
                </div>
              </AnimatedList>
            </div>
            <SlideAndFadeIn
              className="flex flex-col w-full xl:w-1/2 text-white"
              starting="150"
              end="0"
            >
              <h1 className="use-playfair text-lg mb-8">
                Newsletter Subscribe
              </h1>
              <p className="use-poppins font-thin text-xs xl:text-sm mb-4">
                Explore the rich and diverse flavors from around the world,
                celebrating the heritage and artistry behind global cuisines.
                Uncover the stories and recipes that make each dish a unique and
                memorable experience.
              </p>
              <div className="flex items-center relative">
                <motion.input
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#ffffdd",
                  }}
                  type="email"
                  placeholder="Your email..."
                  className="w-full py-2 px-4 outline-none text-black"
                />
                <button className="bg-yellow-400 outline-none px-4 h-[90%] absolute right-1 hover:bg-yellow-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      fill="currentColor"
                      d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11"
                    />
                  </svg>
                </button>
              </div>
              <AnimatedList className="flex items-center gap-4 my-4">
                <FooterItem extraClasses="text-gray-400 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-all cursor-pointer max-w-10 min-h-10 rounded-full border-[0.1rem] border-gray-400 grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                    />
                  </svg>
                </FooterItem>{" "}
                <FooterItem extraClasses="text-gray-400 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-all cursor-pointer max-w-10 min-h-10 rounded-full border-[0.1rem] border-gray-400 grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"
                      />
                    </g>
                  </svg>
                </FooterItem>{" "}
                <FooterItem extraClasses="text-gray-400 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-all cursor-pointer max-w-10 min-h-10 rounded-full border-[0.1rem] border-gray-400 grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                    />
                  </svg>
                </FooterItem>{" "}
                <FooterItem extraClasses="text-gray-400 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-all cursor-pointer max-w-10 min-h-10 rounded-full border-[0.1rem] border-gray-400 grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                    />
                  </svg>
                </FooterItem>
              </AnimatedList>
            </SlideAndFadeIn>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

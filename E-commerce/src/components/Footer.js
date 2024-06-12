import { CopyrightIcon, GithubIcon, LinkedinIcon } from "../assets/icons";
import { Link, useRouteLoaderData } from "react-router-dom";

export default function Footer({ iterable }) {
  const categories = useRouteLoaderData("root");

  const linkCSS =
    "uppercase text-xs text-end no-underline hover:underline cursor-pointer";

  return (
    <footer className="w-full h-auto flex justify-center items-center text-white">
      <div className="w-[80rem] h-full green-gradient flex flex-col pt-8 pb-2 px-4  rounded-t-3xl">
        <div className="flex w-full justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <h1 className="text-sm font-bold uppercase">Categories</h1>
              <ul className="pl-2 max-h-48 flex flex-col flex-wrap">
                {iterable &&
                  iterable.map((item) => (
                    <Link
                      to={`/store/category/${item}`}
                      className="uppercase text-xs text-end ml-2 text-white no-underline
                      hover:underline"
                    >
                      {item.replace("-", " ")}
                    </Link>
                  ))}
                {!iterable &&
                  categories.map((category) => (
                    <Link
                      to={`/store/category/${category}`}
                      className="uppercase text-xs text-end ml-2 text-white no-underline
                      hover:underline"
                    >
                      {category.replace("-", " ")}
                    </Link>
                  ))}
              </ul>
            </div>
            <div className="flex flex-col items-end">
              <h1 className="text-sm font-bold uppercase">Help</h1>
              <ul className="pl-2">
                <li className={linkCSS}>contact us</li>
                <li className={linkCSS}>faq</li>
                <li className={linkCSS}>accessibility</li>
              </ul>
            </div>
            <div className="flex flex-col items-end">
              <h1 className="text-sm font-bold uppercase">About</h1>
              <ul className="pl-2">
                <li className={linkCSS}>our story</li>
                <li className={linkCSS}>products</li>
                <li className={linkCSS}>r&d</li>
                <li className={linkCSS}>careers</li>
                <li className={linkCSS}>reviews</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="m-2 font-bold text-end">
              Sign up to get 10% off your first order
            </p>
            <div className="flex gap-4">
              <input
                className="py-2 px-4 rounded-full outline-none text-black"
                type="text"
                placeholder="Your email address..."
              />
              <button className="border-2 border-white green-gradient text-white rounded-full py-2 px-4 ">
                Subscribe
              </button>
            </div>
            <div className="flex justify-end my-2 gap-4">
              <GithubIcon
                size="2em"
                className="cursor-pointer hover:text-yellow-400  transition-all"
              />
              <LinkedinIcon
                size="2em"
                className="cursor-pointer hover:text-yellow-400 transition-all"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center text-white text-xs mt-16">
          <CopyrightIcon size="1.5em" className="text-white" /> 2024 Murga. All
          rights reserved
        </div>
      </div>
    </footer>
  );
}

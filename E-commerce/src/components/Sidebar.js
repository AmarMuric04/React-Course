import Button from "@mui/material/Button";
import { useRouteLoaderData, NavLink } from "react-router-dom";

export default function Sidebar({ title, iterable }) {
  const categories = useRouteLoaderData("root");

  return (
    <div className="w-3/5 poppins green-gradient rounded-3xl h-auto py-16 p-8">
      <div className="w-full flex items-center flex-col text-white">
        {title}
      </div>
      <div className="w-full flex flex-col items-center mt-8">
        {iterable && iterable.length !== 0 && (
          <div className="w-4/5 h-4 border-b-[0.1rem] mb-4 border-white relative">
            <p
              className="text-white uppercase text-sm absolute
           bottom-[-1.65rem] px-2 left-1/2 translate-x-[-50%] bg-green-400"
            >
              Categories
            </p>
          </div>
        )}
        <ul className="m-0 thin-scrollbar p-0 flex pb-4 w-4/5 justify-evenly items-end overflow-auto gap-3">
          {iterable &&
            iterable.map((item) => (
              <li
                key={item}
                className="min-h-32 min-w-32 overflow-hidden rounded-[2em]
             grid place-items-center font-bold"
              >
                <Button
                  className="w-full h-full uppercase rounded-[2em]
              text-black p-0 m-0"
                >
                  <NavLink
                    className={({ isActive }) =>
                      `no-underline hover:bg-red-400 transition-all rounded-[2rem] text-black h-full w-full
                     grid place-items-center border-2 border-white ${
                       isActive ? "green-gradient text-white" : "bg-white"
                     }`
                    }
                    to={`/store/category/${item}`}
                    end
                  >
                    {item.replaceAll("-", " ")}
                  </NavLink>
                </Button>
              </li>
            ))}
          {!iterable &&
            categories.map((category) => (
              <li
                key={category}
                className="min-h-32 min-w-32 overflow-hidden rounded-[2em]
             grid place-items-center font-bold"
              >
                <Button
                  className="w-full h-full uppercase rounded-[2em]
              text-black p-0 m-0"
                >
                  <NavLink
                    className={({ isActive }) =>
                      `no-underline hover:bg-red-400 transition-all rounded-[2rem] text-black h-full w-full
                     grid place-items-center border-2 border-white ${
                       isActive ? "green-gradient text-white" : "bg-white"
                     }`
                    }
                    to={`/store/category/${category}`}
                    end
                  >
                    {category.replaceAll("-", " ")}
                  </NavLink>
                </Button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

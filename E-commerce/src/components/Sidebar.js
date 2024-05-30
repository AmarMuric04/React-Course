import { useRouteLoaderData } from "react-router-dom";
import { transformString } from "../util/dataModifiers";
import MainDropDown from "./Dropdown";
import Button from "@mui/material/Button";

export default function Sidebar() {
  const categories = useRouteLoaderData("root");

  return (
    <aside className="flex flex-col w-[15%] px-2 bg-zinc-200 pt-16">
      <h1 className="uppercase tracking-[0.1rem] font-bold text-xl">Options</h1>
      <main className="flex flex-col my-8">
        <div className="flex gap-3 ml-8">
          <p>Sort by:</p> <MainDropDown list={["Title", "Price"]} />
        </div>
        <div className="flex flex-col mt-8">
          <p className="font-bold uppercase tracking-[0.1rem] text-xl mb-4">
            Categories:
          </p>
          <ul className="ml-8">
            {categories.map((category) => (
              <li className="w-full" key={category}>
                <Button
                  variant="text"
                  className="w-full flex items-start focus:bg-green-400 cursor-pointer
                 ml-8 py-2 px-4 rounded-mx hover:bg-zinc-400 transition-all"
                >
                  {" "}
                  <p className="w-full text-start text-black">
                    {transformString(category)}
                  </p>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </aside>
  );
}

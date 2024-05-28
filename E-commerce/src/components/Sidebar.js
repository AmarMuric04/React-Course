import { useRouteLoaderData } from "react-router-dom";
import { transformString } from "../util/dataModifiers";

export default function Sidebar() {
  const categories = useRouteLoaderData("root");

  return (
    <aside className="flex flex-col w-1/5 mt-16 px-2">
      <h1 className="uppercase tracking-[0.1rem] font-bold text-xl">Options</h1>
      <main className="flex flex-col my-8">
        <div className="flex gap-3 ml-8">
          <p>Sort by:</p>{" "}
          <select className="text-black">
            <option>Title</option>
            <option>Price</option>
            <option>Description</option>
            <option>...</option>
          </select>
        </div>
        <div className="flex flex-col mt-8">
          <p className="font-bold uppercase tracking-[0.1rem] text-xl mb-4">
            Categories:
          </p>
          <ul>
            {categories.map((category) => (
              <li className="ml-8" key={category}>
                {transformString(category)}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </aside>
  );
}

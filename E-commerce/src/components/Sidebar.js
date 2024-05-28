import { useRouteLoaderData } from "react-router-dom";
import { transformString } from "../util/dataModifiers";

export default function Sidebar() {
  const categories = useRouteLoaderData("root");

  console.log(categories);

  return (
    <aside className="text-white flex flex-col w-1/5">
      <h1 className="uppercase tracking-[0.1rem] font-bold text-xl">Options</h1>
      <main className="flex flex-col">
        <p>Sort by:</p>{" "}
        <select>
          <option>Title</option>
          <option>Price</option>
          <option>Description</option>
          <option>...</option>
        </select>
        <p>Categories:</p>
        <ul>
          {categories.map((category) => (
            <li key={category}>{transformString(category)}</li>
          ))}
        </ul>
      </main>
    </aside>
  );
}

import { useState } from "react";
import { Form } from "react-router-dom";

export default function Searchbar() {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState();

  const handleFocus = () => setIsFocused(true);
  const handleNotFocus = () => setIsFocused(false);
  const handleChangeInput = (event) => setSearch(event.target.value);

  return (
    <div
      className="flex gap-2 items-center border-1 border-green-400 
      rounded-full py-1 px-2"
    >
      <Form
        method="post"
        action={`/store/search/${search}`}
        className="flex items-center"
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 256 256"
            className="hover:bg-zinc-200 text-green-400 rounded-full transition-all cursor-pointer h-full"
          >
            <path
              fill="currentColor"
              d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"
            />
          </svg>
        </button>
        <input
          onFocus={handleFocus}
          onBlur={handleNotFocus}
          value={search}
          onChange={handleChangeInput}
          name="search"
          type="text"
          placeholder="Search for items..."
          className={`text-green-400 rounded-full transition-all outline-none ${
            isFocused ? "w-64" : "w-32"
          }`}
        />
      </Form>
      <svg
        onClick={() => setSearch("")}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 21 21"
        className="cursor-pointer hover:text-red-400"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m15.5 15.5l-10-10zm0-10l-10 10"
        />
      </svg>
    </div>
  );
}

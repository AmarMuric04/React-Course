import Button from "@mui/material/Button";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col items-center h-screen poppins">
      <div className="w-3/5 green-gradient rounded-3xl h-auto py-16 p-8">
        <div className="w-full flex items-center flex-col text-white">
          <h1 className="uppercase font-bold text-[3rem]">Discover</h1>
          <h2 className="uppercase text-4xl">Your dream products</h2>
          <p>Explore & Buy Your Favorites to Suit Your Style & Preferences</p>
        </div>
        <div className="w-full flex justify-center items-center mt-8">
          <ul className="m-0 flex w-4/5 justify-evenly items-end">
            <li className="blue-gradient h-32 w-32 overflow-hidden rounded-[2em] grid place-items-center font-bold">
              <Button className="w-full h-full rounded-[2em] text-white">
                Furniture
              </Button>
            </li>
            <li
              className="bg-white h-32 w-32 overflow-hidden rounded-[2em]
             grid place-items-center font-bold"
            >
              <Button className="w-full h-full rounded-[2em] text-black">
                Groceries
              </Button>
            </li>
            <li className="purple-gradient h-32 w-32 overflow-hidden rounded-[2em] grid place-items-center font-bold">
              <Button className="w-full h-full rounded-[2em] text-white">
                Kitchen Accessories
              </Button>
            </li>
            <li className="bg-white h-32 w-32 overflow-hidden rounded-[2em] grid place-items-center font-bold">
              <Button className="w-full h-full rounded-[2em] text-black">
                Technology
              </Button>
            </li>
            <li className="yellow-gradient h-32 w-32 overflow-hidden rounded-[2em] grid place-items-center font-bold">
              <Button className="w-full h-full rounded-[2em] text-white">
                Sports
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

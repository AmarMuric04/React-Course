export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 bg-stone-800 py-4 px-16 flex justify-between">
      <h1 className="text-4xl text-yellow-400 font-extrabold cursor-pointer">
        B<span className="text-stone-700 text-2xl">LAJV</span>
        INANCE
      </h1>
      <div className="flex gap-4">
        <button className="bg-yellow-400 py-2 px-4 rounded-xl">Log in</button>
        <button className="bg-yellow-400 py-2 px-4 rounded-xl">Sign up</button>
      </div>
    </header>
  );
}

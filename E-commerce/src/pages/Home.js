import image from "../assets/homeimg.jpeg";

export default function HomePage() {
  return (
    <main className="w-full h-screen poppins">
      <div className="h-screen w-full flex justify-around align-center">
        <section className="w-1/2 flex flex-col my-16 px-16">
          <h1 className="tracking-[0.2rem] text-4xl font-bold text-green-400">
            E-commerce
          </h1>
          <p className="text-zinc-200 text-md foont-bold">
            Buy whatever you want
          </p>
        </section>
        <section className="w-1/2 h-full flex items-center justify-center">
          <img className="w-1/2 h-1/2 object-contain" src={image} />
        </section>
      </div>
    </main>
  );
}

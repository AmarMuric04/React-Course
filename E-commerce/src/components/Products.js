import { convertToCurrency } from "../util/dataModifiers";

export default function Products({ products }) {
  console.log(products);

  return (
    <ul className="flex flex-wrap w-full h-full gap-8">
      {products.map((product) => (
        <li
          className="w-64 h-[30rem] flex flex-col items-center bg-zinc-100
          border-b-[0.4rem] border-transparent rounded-md
        even:hover:border-green-400 odd:hover:border-purple-400
          hover:pb-[0.4rem] hover:translate-y-[-0.4rem] transition-all
          justify-between relative"
          key={product.id}
        >
          <p
            className="font-bold text-xl pt-4 px-4 w-full truncate
           overflow-hidden whitespace-nowrap"
          >
            {product.title}
          </p>
          <img
            className="w-32 h-32 object-contain"
            src={product.images[0]}
            alt="Product"
          />
          <p className="bg-green-400 w-full text-center domine mt-4">
            {convertToCurrency(product.price)}
          </p>
          <p className="px-4 text-sm">{product.description}</p>
          {product.discountPercentage > 1 && (
            <p
              className="absolute top-[-1rem] right-[-1rem]
           bg-red-400 py-[0.2rem] px-4 font-bold text-white rounded-md"
            >
              {product.discountPercentage.toFixed(0) + " % OFF"}
            </p>
          )}
          <button className="uppercase monsterrat text-white tracking-[0.1rem] font-bold mr-2 py-2 px-8 self-end bg-green-400 rounded-md hover:bg-green-600 transition-all">
            Buy
          </button>
        </li>
      ))}
    </ul>
  );
}

import { convertToCurrency } from "../util/dataModifiers";

export default function Products({ products }) {
  console.log(products);

  return (
    <ul className="flex flex-wrap w-full h-full gap-8">
      {products.map((product) => (
        <li
          className="text-white w-64 h-96 flex flex-col items-center"
          key={product.id}
        >
          <p className="font-bold text-xl">{product.title}</p>
          <img
            className="w-32 h-32 object-contain"
            src={product.images[0]}
            alt="Product"
          />
          <p>{convertToCurrency(product.price)}</p>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
}

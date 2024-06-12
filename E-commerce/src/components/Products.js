import Product from "./Product";

export default function Products({ products }) {
  return (
    <ul className="p-0 flex flex-wrap w-full h-full gap-[2.66rem]">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </ul>
  );
}

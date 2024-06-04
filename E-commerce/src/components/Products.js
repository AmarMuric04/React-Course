import Product from "./Product";

export default function Products({ products }) {
  return (
    <ul className="p-0 flex flex-wrap w-full h-full justify-between gap-4">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </ul>
  );
}

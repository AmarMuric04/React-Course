import Product from "./Product";

export default function Products({ products }) {
  return (
    <ul className="flex flex-wrap w-full h-full gap-8">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </ul>
  );
}

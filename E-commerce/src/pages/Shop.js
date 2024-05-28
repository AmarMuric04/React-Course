import { useLoaderData } from "react-router-dom";
import Products from "../components/Products";

export default function ShopPage() {
  const { products } = useLoaderData();

  return (
    <main className="w-4/5">
      <h1
        className="uppercase monsterrat tracking-[0.1rem] font-thin text-4xl
       my-16 text-green-400"
      >
        Available products
      </h1>
      <Products products={products} />
    </main>
  );
}

export const loader = () => {
  return fetch("https://dummyjson.com/products");
};

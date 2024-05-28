import { useLoaderData } from "react-router-dom";
import Products from "../components/Products";

export default function ShopPage() {
  const { products } = useLoaderData();

  return (
    <main className="w-4/5">
      <Products products={products} />
    </main>
  );
}

export const loader = () => {
  return fetch("https://dummyjson.com/products");
};

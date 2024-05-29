import { useLoaderData, Await } from "react-router-dom";
import Products from "../components/Products";
import { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import { Suspense } from "react";

export default function ShopPage() {
  const { products } = useLoaderData();

  return (
    <Fragment>
      <Sidebar />
      <main className="w-4/5">
        <h1
          className="uppercase monsterrat tracking-[0.1rem] font-thin text-4xl
       my-16 text-green-400"
        >
          Available products
        </h1>
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Await resolve={products}>
            {(loadedData) => <Products products={loadedData} />}
          </Await>
        </Suspense>
      </main>
    </Fragment>
  );
}

export const loader = async () => {
  return fetch("https://dummyjson.com/products");
};

import { Await, useRouteLoaderData } from "react-router-dom";
import Products from "../components/Products";
import { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import { Suspense } from "react";

export default function ShopPage() {
  const { products } = useRouteLoaderData("shoproot");

  return (
    <Fragment>
      <Sidebar />
      <main className="w-[85%] px-16 pt-16">
        <h1
          className="uppercase monsterrat tracking-[0.1rem] font-thin text-4xl
       mb-16 text-green-400"
        >
          Available products
        </h1>
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Await resolve={products}>
            {(loadedData) => <Products products={loadedData} />}
          </Await>
        </Suspense>
        <button>+</button>
      </main>
    </Fragment>
  );
}

export const loader = async () => {
  return fetch("https://dummyjson.com/products?limit=30&skip=60");
};

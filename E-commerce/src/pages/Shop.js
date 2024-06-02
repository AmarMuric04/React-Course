import {
  Await,
  useRouteLoaderData,
  useActionData,
  Link,
} from "react-router-dom";
import Products from "../components/Products";
import { Fragment, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Suspense } from "react";

export default function ShopPage() {
  const { products } = useRouteLoaderData("shoproot");

  const [page, setPage] = useState(1);

  return (
    <Fragment>
      <Sidebar />
      <main className="w-[85%] px-16 pt-16">
        <h1
          className="uppercase monsterrat tracking-[0.1rem] font-thin text-4xl
       mb-16 text-green-400 flex flex-col"
        >
          Available products
        </h1>
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Await resolve={products}>
            {(loadedData) => <Products products={loadedData} />}
          </Await>
        </Suspense>
        <Link to={`page=${1}`}>+21312312312321</Link>
      </main>
    </Fragment>
  );
}

export const action = async (request, params) => {};

export const loader = async () => {
  return fetch("https://dummyjson.com/products?limit=30&skip=60");
};

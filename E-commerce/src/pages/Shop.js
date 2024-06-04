import { Await, useLoaderData } from "react-router-dom";
import Products from "../components/Products";
import { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import { Suspense } from "react";

export default function ShopPage() {
  const { products } = useLoaderData();

  // const [page, setPage] = useState(1);

  return (
    <main className="w-full flex flex-col items-center">
      <Sidebar
        title={
          <Fragment>
            <h1 className="uppercase font-bold text-[3rem]">Welcome</h1>
            <h2 className="uppercase text-4xl">to the shop</h2>
            <p>Explore & Buy Your Favorites to Suit Your Style & Preferences</p>
          </Fragment>
        }
      />
      <div className="w-3/5 my-16">
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Await resolve={products}>
            {(loadedData) => <Products products={loadedData} />}
          </Await>
        </Suspense>
      </div>
      {/* <Link to={`page=${1}`}>+21312312312321</Link> */}
    </main>
  );
}

export const action = async (request, params) => {};

export const loader = async () => {
  return fetch("https://dummyjson.com/products");
};

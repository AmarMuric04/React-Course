import { Await, NavLink, Link, useLoaderData } from "react-router-dom";
import Products from "../components/Products";
import { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import { Suspense } from "react";
import store from "../redux/redux";
import { putCategory } from "../redux/misc";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";

export default function ShopPage() {
  const { products } = useLoaderData();
  const category = useSelector((state) => state.misc.category);

  window.scrollTo(0, 0);

  return (
    <main className="w-full flex flex-col items-center">
      <section className="flex gap-2 justify-start w-3/5 text-xs my-8 px-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `no-underline uppercase ${
              isActive ? "text-green-400 font-bold" : "font-thin text-black"
            }`
          }
          end
        >
          Home
        </NavLink>
        <span> - </span>
        <Link
          to={`/store/page/1`}
          className={`no-underline uppercase ${
            !category ? "text-green-400 font-bold" : "font-thin text-black"
          }`}
        >
          Store
        </Link>
        {category && (
          <Fragment>
            <span> - </span>
            <NavLink
              to={`/store/category/${category}`}
              className={({ isActive }) =>
                `no-underline uppercase ${
                  isActive ? "text-green-400 font-bold" : "font-thin text-black"
                }`
              }
              end
            >
              {category.replaceAll("-", " ")}
            </NavLink>
          </Fragment>
        )}
      </section>
      <Sidebar
        title={
          <Fragment>
            <h1 className="uppercase font-bold text-[3rem]">
              {!category && "Welcome"}
              {category && "Find your"}
            </h1>
            <h2 className="uppercase text-4xl">
              {!category && "to the store"}
              {category && `favorite ${category.replaceAll("-", " ")}`}
            </h2>
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
      {!category && <Pagination />}
    </main>
  );
}

export const loader = async ({ request, params }) => {
  const page = params.page;

  if (page < 1 || page > 10) return null;

  store.dispatch(putCategory(null));

  return fetch(
    "https://dummyjson.com/products?limit=30&skip=" + (page - 1) * 30
  );
};

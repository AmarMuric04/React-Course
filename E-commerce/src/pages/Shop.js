import { Await, NavLink, useParams, useLoaderData } from "react-router-dom";
import Products from "../components/Products";
import { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import { Suspense } from "react";
import store from "../redux/redux";
import { changePage, putCategory } from "../redux/misc";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";

export default function ShopPage() {
  const { products } = useLoaderData();
  const category = useSelector((state) => state.misc.category);
  const params = useParams();

  const page = useSelector((state) => state.misc.page);

  window.scrollTo(0, 0);

  if (params.search && (!products || products.length === 0))
    return (
      <main className="w-full poppins flex flex-col items-center mb-32">
        <section className="flex gap-2 justify-start w-3/5 text-xs my-8 px-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `no-underline uppercase ${
                isActive ? "text-green-400 font-bold" : " text-zinc-300"
              }`
            }
            end
          >
            Home
          </NavLink>
          <span> - </span>
          <NavLink
            to={"/store/page/1"}
            className={({ isActive }) =>
              `no-underline uppercase ${
                isActive ? "text-green-400 font-bold" : " text-zinc-300"
              }`
            }
          >
            Store
          </NavLink>
          {params.category && (
            <Fragment>
              <span> {category && "-"} </span>
              <NavLink
                to={`/store/category/${category}`}
                className={({ isActive }) =>
                  `no-underline uppercase ${
                    isActive ? "text-green-400 font-bold" : " text-zinc-300"
                  }`
                }
                end
              >
                {category && category.replaceAll("-", " ")}
              </NavLink>
            </Fragment>
          )}

          {params.search && (
            <Fragment>
              <span> - </span>
              <NavLink
                to={`/store/search/${params.search}`}
                className={({ isActive }) =>
                  `no-underline uppercase ${
                    isActive ? "text-green-400 font-bold" : " text-zinc-300"
                  }`
                }
                end
              >
                {params.search}
              </NavLink>
            </Fragment>
          )}
        </section>
        <Sidebar
          title={
            <Fragment>
              <h1 className="uppercase font-bold text-[3rem]">Oops!</h1>
              <h2 className="uppercase text-4xl">No products found!</h2>
              <p>Try searching up something else!</p>
            </Fragment>
          }
        />
      </main>
    );

  return (
    <main className="w-full poppins flex flex-col items-center">
      <section className="flex gap-2 justify-start w-3/5 text-xs my-8 px-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `no-underline uppercase ${
              isActive ? "text-green-400 font-bold" : " text-zinc-300"
            }`
          }
          end
        >
          Home
        </NavLink>
        <span> - </span>
        <NavLink
          to={`/store/page/${page}`}
          className={({ isActive }) =>
            `no-underline uppercase ${
              isActive ? "text-green-400 font-bold" : " text-zinc-300"
            }`
          }
        >
          Store
        </NavLink>
        {params.category && (
          <Fragment>
            <span> {category && "-"} </span>
            <NavLink
              to={`/store/category/${category}`}
              className={({ isActive }) =>
                `no-underline uppercase ${
                  isActive ? "text-green-400 font-bold" : " text-zinc-300"
                }`
              }
              end
            >
              {category && category.replaceAll("-", " ")}
            </NavLink>
          </Fragment>
        )}

        {params.search && (
          <Fragment>
            <span> - </span>
            <NavLink
              to={`/store/search/${params.search}`}
              className={({ isActive }) =>
                `no-underline uppercase ${
                  isActive ? "text-green-400 font-bold" : " text-zinc-300"
                }`
              }
              end
            >
              {params.search}
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
      <div className="w-[80rem] my-16">
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Await resolve={products}>
            {(loadedData) => <Products products={loadedData} />}
          </Await>
        </Suspense>
      </div>
      {!category && !params.search && <Pagination />}
    </main>
  );
}

export const loader = async ({ request, params }) => {
  const page = params.page;
  store.dispatch(putCategory(null));
  store.dispatch(changePage(page));

  if (page < 1 || page > 9) throw new Error();

  return fetch(
    "https://dummyjson.com/products?limit=24&skip=" + (page - 1) * 24
  );
};

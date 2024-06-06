import { useLoaderData, NavLink, defer, Await } from "react-router-dom";
import Product from "../components/Product";
import { Suspense, Fragment } from "react";
import ProductDetails from "../components/ProductDetails";
import store from "../redux/redux";
import { useSelector } from "react-redux";
import { putCategory } from "../redux/misc";
import { LoaderIcon } from "../assets/icons";

export default function ProductPage() {
  const { product, sameCategory } = useLoaderData();
  const category = useSelector((state) => state.misc.category);

  window.scrollTo(0, 0);

  return (
    <main className="w-full h-full poppins flex flex-col items-center">
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
        <NavLink
          to="/store"
          className={({ isActive }) =>
            `no-underline uppercase ${
              isActive ? "text-green-400 font-bold" : "font-thin text-black"
            }`
          }
          end
        >
          Store
        </NavLink>
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
        <span> - </span>
        <NavLink
          to={`/store/product/${product.id}`}
          className={({ isActive }) =>
            `no-underline uppercase ${
              isActive ? "text-green-400 font-bold" : "font-thin text-black"
            }`
          }
          end
        >
          {product.title}
        </NavLink>
      </section>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={product}>
          {(loadedEvent) => (
            <main className="w-3/5 h-auto mb-16 flex items-center justify-center">
              <ProductDetails product={loadedEvent} />
            </main>
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={sameCategory}>
          {(loadedEvent) => {
            return (
              <main className="w-3/5 flex justify-center flex-col">
                <h1
                  className="mt-4 text-md lg:text-2xl green-gradient
                 uppercase whitespace-nowrap text-white py-16 text-center rounded-3xl
                 mb-16"
                >
                  {category && "More from " + category.replaceAll("-", " ")}
                  {!category && "Travelling..."}
                </h1>
                <ul className="flex justify-center flex-wrap gap-4 p-0">
                  {loadedEvent.map((product) => (
                    <Product product={product} />
                  ))}
                </ul>
              </main>
            );
          }}
        </Await>
      </Suspense>
    </main>
  );
}

const loadProduct = async (id) => {
  const response = await fetch("https://dummyjson.com/products/" + id);

  const data = await response.json();

  store.dispatch(putCategory(data.category));
  console.log(store.getState().misc.category, "<- loadProduct");

  return data;
};

const loadSameCategoryProducts = async (id) => {
  const state = store.getState();
  const category = state.misc.category;

  const response = await fetch(
    "https://dummyjson.com/products/category/" + category
  );

  const data = await response.json();

  const productIndex = data.products.findIndex((product) => product.id == id);

  data.products.splice(productIndex, 1);

  return data.products;
};

export async function loader({ request, params }) {
  const id = params.id;

  return defer({
    product: await loadProduct(id),
    sameCategory: loadSameCategoryProducts(id),
  });
}

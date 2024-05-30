import { useLoaderData, defer, Await } from "react-router-dom";
import Product from "../components/Product";
import { Suspense } from "react";
import ProductDetails from "../components/ProductDetails";
import store from "../redux/redux";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const { product, sameCategory } = useLoaderData();
  const category = useSelector((state) => state.misc.category);

  return (
    <main className="w-full h-full  poppins flex justify-between">
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={product}>
          {(loadedEvent) => (
            <main className="w-4/5 h-screen max-h-screen flex items-center justify-center">
              <ProductDetails product={loadedEvent} />
            </main>
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={sameCategory}>
          {(loadedEvent) => {
            return (
              <main className="w-1/5 flex justify-center flex-col">
                <h1 className="my-4 text-md lg:text-2xl text-green-400 uppercase whitespace-nowrap">
                  More from {category}:
                </h1>
                <ul className="flex justify-center flex-wrap gap-8">
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

const loadSameCategoryProducts = async (id) => {
  const state = store.getState();
  let category = state.misc.category;

  if (!category) category = JSON.parse(localStorage.getItem("category"));

  const response = await fetch(
    "https://dummyjson.com/products/category/" + category
  );

  const data = await response.json();
  const productIndex = data.products.findIndex((product) => product.id == id);

  data.products.splice(productIndex, 1);

  return data.products;
};

const loadProduct = async (id) => {
  const response = await fetch("https://dummyjson.com/products/" + id);

  const data = await response.json();

  return data;
};

export async function loader({ request, params }) {
  const id = params.id;

  return defer({
    product: loadProduct(id),
    sameCategory: loadSameCategoryProducts(id),
  });
}

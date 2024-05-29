import { useLoaderData, defer, Await } from "react-router-dom";
import store from "../redux/redux";
import { Suspense } from "react";
import ProductDetails from "../components/ProductDetails";

export default function ProductPage() {
  const { product, sameCategory } = useLoaderData();

  return (
    <main className="w-full h-full grid place-items-center poppins">
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={product}>
          {(loadedEvent) => <ProductDetails product={loadedEvent} />}
        </Await>
      </Suspense>
    </main>
  );
}

const loadSameCategoryProducts = async (id) => {
  const state = store.getState();
  const product = state.cart.items.find((item) => item.id === id);

  const category = product.category;

  console.log(product, category);

  const response = await fetch(
    "https://dummyjson.com/products/category/" + category
  );

  const data = await response.json();

  return data;
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

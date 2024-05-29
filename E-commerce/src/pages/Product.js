import { useLoaderData, defer, Await } from "react-router-dom";
import Product from "../components/Product";
import { Suspense } from "react";
import ProductDetails from "../components/ProductDetails";

export default function ProductPage() {
  const { product, sameCategory } = useLoaderData();

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
            console.log(loadedEvent);
            return (
              <main className="w-1/5 flex justify-center flex-col">
                <h1 className="my-4 text-2xl text-green-400 uppercase">
                  More from this category:
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
  const productsResponse = await fetch("https://dummyjson.com/products");

  const { products } = await productsResponse.json();

  const product = products.find((prod) => prod.id == id);
  const category = product.category;

  const response = await fetch(
    "https://dummyjson.com/products/category/" + category
  );

  const data = await response.json();

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

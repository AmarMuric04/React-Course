import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "product-1", title: "Product1" },
  { id: "product-2", title: "Product2" },
  { id: "product-3", title: "Product3" },
  { id: "product-4", title: "Product4" },
];

function ProductsPage() {
  return (
    <>
      <h1>Products page!</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;

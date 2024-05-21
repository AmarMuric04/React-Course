import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { products } from "../../utils/products";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

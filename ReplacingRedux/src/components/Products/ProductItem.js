import Card from "../UI/Card";
import "./ProductItem.css";
import { ProductsContext } from "../../context/products-context";
import { useContext } from "react";

const ProductItem = (props) => {
  const { toggleFavorite } = useContext(ProductsContext);

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={() => toggleFavorite(props.id)}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;

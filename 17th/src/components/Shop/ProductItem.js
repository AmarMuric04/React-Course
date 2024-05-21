import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/redux";
import { formatNumber } from "../../utils/transferToCurrency";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatchFn = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    dispatchFn(cartActions.addToCart({ price, title, description }));
  };

  if (cartItems.some((item) => item.title === title)) return;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>{formatNumber(price)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

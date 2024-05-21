import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/redux";
import { formatNumber } from "../../utils/transferToCurrency";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatchFn = useDispatch();

  const handleAdd = () => {
    dispatchFn(cartActions.addToCart({ price, title }));
  };

  const handleRemove = () => {
    dispatchFn(cartActions.removeFromCart({ title }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {formatNumber(total)}{" "}
          <span className={classes.itemprice}>
            ({formatNumber(price)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemove}>-</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";

import { orderActions } from "../../store";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatchFn = useDispatch();
  const orderCost = useSelector((state) => state.order.cost);
  const orderQuantity = useSelector((state) => state.order.amount);

  const handleAdd = () => {
    dispatchFn(orderActions.increaseOrder(price));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${((orderQuantity + quantity) * price).toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{orderQuantity + quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

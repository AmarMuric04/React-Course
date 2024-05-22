import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/redux";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const toggleCart = useSelector((state) => state.cart.toggle);
  const dispatchFn = useDispatch();

  const toggleCartShowing = () => dispatchFn(cartActions.toggleCart());

  return (
    <button onClick={toggleCartShowing} className={classes.button}>
      <span>{toggleCart ? "Hide" : "Show"} Cart</span>
      <span className={classes.badge}>
        {cartItems &&
          cartItems.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity,
            0
          )}
      </span>
    </button>
  );
};

export default CartButton;

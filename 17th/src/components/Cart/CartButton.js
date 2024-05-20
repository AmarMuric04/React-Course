import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
};

export default CartButton;

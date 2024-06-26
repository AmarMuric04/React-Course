import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const toggleCart = useSelector((state) => state.cart.toggle);

  if (!toggleCart) return;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems &&
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.title}
                item={{
                  title: item.title,
                  quantity: item.quantity,
                  total: item.total,
                  price: item.price,
                }}
              />
            );
          })}
      </ul>
    </Card>
  );
};

export default Cart;

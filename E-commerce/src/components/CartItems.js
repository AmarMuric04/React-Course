import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartItems() {
  const cart = useSelector((state) => state.cart.items);

  return (
    <table className="w-full">
      <tr className="flex justify-between">
        <th className="w-48">Description</th>
        <th>Quantity</th>
        <th>Remove</th>
        <th className="w-32 text-end">Price</th>
      </tr>
      {cart.map((product) => (
        <CartItem product={product} />
      ))}
    </table>
  );
}

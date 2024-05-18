import Cart from "./Cart";
import Control from "./Control";
import Success from "./Success";
import { useCart } from "../hooks/useCart";

export default function ControlledModal() {
  const { modalState } = useCart();

  return (
    <>
      {modalState === "cart" && <Cart />}
      {modalState === "control" && <Control />}
      {modalState === "endMessage" && <Success />}
    </>
  );
}

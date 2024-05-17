import { useContext } from "react";
import Image from "/public/logo.jpg";
import { CartContext } from "../store/cartContext";

export default function Header() {
  const { handleChangeModalState, cart } = useContext(CartContext);

  return (
    <header id="main-header">
      <button onClick={() => handleChangeModalState("cart")} className="button">
        Cart <span>({cart.length})</span>
      </button>

      <h1 id="title">
        Foodify
        <img src={Image} alt="" />
      </h1>
    </header>
  );
}

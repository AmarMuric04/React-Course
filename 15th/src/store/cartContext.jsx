import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
  modalState: Boolean,
  handleUpdateCart: () => {},
  handleChangeQuantity: () => {},
  handleChangeModalState: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [modalState, setModalState] = useState("");

  /* useEffect... => click on Cart, modalState = "cart", click proceed
   => modalState = "control", click proceed => modalState = "endMessage",
    click Ok => modalState = ""<div className=""></div>
   
   Every time modalState changes, useEffect returns a different modal?
   */

  function handleUpdateCart(newCart) {
    setCart(newCart);
  }

  function handleChangeQuantity(meal, direction) {
    const newCart = [...cart];

    const thatMeal = newCart.find((cartMeal) => cartMeal.id === meal.id);
    const thatMealIndex = newCart.findIndex(
      (cartMeal) => cartMeal.id === meal.id
    );

    if (direction === "down" && thatMeal.quantity === 1) {
      newCart.splice(thatMealIndex, 1);
      setCart(newCart);

      return;
    }

    direction === "up" && newCart[thatMealIndex].quantity++;
    direction === "down" && newCart[thatMealIndex].quantity--;

    setCart(newCart);
  }

  function handleChangeModalState(newModalState) {
    setModalState(newModalState);
  }

  const cartContextValue = {
    cart,
    modalState,
    handleUpdateCart,
    handleChangeQuantity,
    handleChangeModalState,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

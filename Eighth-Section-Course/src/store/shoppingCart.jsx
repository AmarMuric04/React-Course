import { createContext } from "react";

export const CartContext = createContext({
  cart: {},
  items: [],
  addItemToCart: () => {},
  updateCartQuantity: () => {},
});

import { useContext } from "react";
import { CartContext } from "../store/cartContext";

export const useCart = () => useContext(CartContext);

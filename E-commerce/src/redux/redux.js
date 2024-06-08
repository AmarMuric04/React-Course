import { createSlice, configureStore } from "@reduxjs/toolkit";
import { miscSlice } from "./misc";

const initialCartState = {
  items: [],
  changed: false,
  toggle: false,
  discount: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    putDiscount(state, action) {
      state.discount = action.payload;
    },

    toggleCart(state) {
      state.toggle = !state.toggle;
    },

    replaceCart(state, action) {
      state.items = action.payload;
    },

    increaseQuantity(state, action) {
      const newItem = action.payload.item;

      const thatItem = state.items.find((item) => item.title === newItem.title);

      state.changed = true;

      if (thatItem) {
        const thatItemIndex = state.items.findIndex(
          (item) => item.title === newItem.title
        );

        state.items[thatItemIndex].quantity += action.payload.quantityIncrease;
        state.items[thatItemIndex].total += newItem.price;
        state.items[thatItemIndex].delivery +=
          newItem.price / 10 < 0.99 ? 0 : newItem.price.toFixed(0) / 10;
      } else
        state.items.push({
          ...newItem,
          quantity: action.payload.quantityIncrease,
          total: newItem.price * action.payload.quantityIncrease,
          delivery:
            newItem.price / 10 < 0.99
              ? 0
              : (newItem.price * action.payload.quantityIncrease).toFixed(0) /
                10,
        });
    },

    decreaseQuantity(state, action) {
      const thatItem = state.items.find(
        (item) => item.title === action.payload.title
      );

      const thatItemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      state.changed = true;

      if (thatItem.quantity === 1)
        state.items = state.items.filter(
          (item) => item.title !== action.payload.title
        );
      else {
        const thatItem = state.items[thatItemIndex];

        thatItem.quantity--;
        thatItem.total -= thatItem.price;
        thatItem.delivery -=
          thatItem.price / 10 < 0.99 ? 0 : thatItem.price.toFixed(0) / 10;
      }
    },

    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.items.splice(itemIndex, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    misc: miscSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;

export default store;

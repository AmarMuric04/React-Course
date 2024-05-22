import { createSlice, configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";

const initialCartState = {
  items: [
    {
      title: "Test item",
      price: 6,
      quantity: 3,
      total: 18,
    },
  ],
  changed: false,
  toggle: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.toggle = !state.toggle;
    },

    replaceCart(state, action) {
      console.log(action.payload.items);

      state.items = action.payload.items;
    },

    addToCart(state, action) {
      const newItem = action.payload;
      const thatItem = state.items.find(
        (item) => item.title === action.payload.title
      );

      state.changed = true;

      if (thatItem) {
        const thatItemIndex = state.items.findIndex(
          (item) => item.title === action.payload.title
        );

        state.items[thatItemIndex].quantity++;
        state.items[thatItemIndex].total += newItem.price;
      } else
        state.items.push({
          title: newItem.title,
          price: newItem.price,
          total: newItem.price,
          description: newItem.description
            ? newItem.description
            : "No descrption",
          quantity: 1,
        });
    },

    removeFromCart(state, action) {
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
        thatItem.total = thatItem.total - thatItem.price;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;

export default store;

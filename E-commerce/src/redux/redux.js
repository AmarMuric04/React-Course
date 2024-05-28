import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
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
      state.items = action.payload.items;
    },

    increaseQuantity(state, action) {
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
        state.items[thatItemIndex].delivery += newItem.delivery;
      } else
        state.items.push({
          ...newItem,
          quantity: 1,
          total: newItem.price,
          delivery:
            newItem.price / 10 < 0.99 ? 0 : newItem.price.toFixed(0) / 10,
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
        thatItem.total = thatItem.total - thatItem.price;
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
  },
});

export const cartActions = cartSlice.actions;

export default store;

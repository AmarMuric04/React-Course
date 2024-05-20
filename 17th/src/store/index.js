import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = {
  items: [
    {
      title: "Test item",
      price: 6,
      quantity: 3,
      total: 18,
    },
  ],
};

const cartSlice = createSlice({
  name: "order",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const thatItem = state.items.find(
        (item) => item.title === action.payload.title
      );

      if (thatItem) {
        const thatItemIndex = state.items.findIndex(
          (item) => item.title === action.payload.title
        );

        state.items[thatItemIndex].quantity++;
        state.items[thatItemIndex].total += action.payload.price;

        return;
      }

      state.items.push({
        title: action.payload.title,
        price: action.payload.price,
        total: action.payload.price,
        description: action.payload.description
          ? action.payload.description
          : "No descrption",
        quantity: 1,
      });
    },
    removeFromCart(state, action) {
      const thatItem = state.items.find(
        (item) => item.title === action.payload.title
      );

      if (thatItem) {
        const thatItemIndex = state.items.findIndex(
          (item) => item.title === action.payload.title
        );

        if (thatItem.quantity === 1)
          state.items = state.items.filter(
            (item) => item.title !== action.payload.title
          );
        else {
          state.items[thatItemIndex].quantity--;
          state.items[thatItemIndex].total =
            state.items[thatItemIndex].total - state.items[thatItemIndex].price;
        }
      }
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

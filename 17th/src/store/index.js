import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialOrderState = {
  cost: 0,
  amount: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    increaseOrder(state, action) {
      state.cost += action.payload;
      state.amount++;
    },
    decreaseOrder(state, action) {
      state.cost -= action.payload;
      state.amount--;
    },
  },
});

const store = configureStore({
  reducer: {
    order: orderSlice.reducer,
  },
});

export const orderActions = orderSlice.actions;

export default store;

import { createSlice } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
  name: "misc",
  initialState: {
    category: null,
  },
  reducers: {
    putCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { putCategory } = miscSlice.actions;

export const miscActions = miscSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
  name: "misc",
  initialState: {
    category: null,
  },
  reducers: {
    putCategory(state, action) {
      console.log(action.payload);
      state.category = action.payload;
    },
  },
});

export const miscActions = miscSlice.actions;

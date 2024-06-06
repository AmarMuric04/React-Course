import { createSlice } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
  name: "misc",
  initialState: {
    category: null,
    page: 1,
  },
  reducers: {
    putCategory(state, action) {
      state.category = action.payload;

      console.log(state.category, "<---");
    },

    changePage(state, action) {
      if (action.payload === "NEXT") state.page++;
      if (action.payload === "PREV") state.page--;
    },
  },
});

export const { putCategory } = miscSlice.actions;

export const miscActions = miscSlice.actions;

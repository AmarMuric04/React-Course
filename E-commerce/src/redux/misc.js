import { createSlice } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
  name: "misc",
  initialState: {
    category: null,
    page: 1,
    notification: { clicked: false, showing: false },
    purchased: false,
  },
  reducers: {
    setPurchased(state, action) {
      state.purchased = action.payload;
    },

    showNotification(state, action) {
      state.notification.showing = action.payload.showing;
      state.notification.clicked = action.payload.clicked;
    },

    putCategory(state, action) {
      state.category = action.payload;
    },

    changePage(state, action) {
      if (action.payload === "NEXT") state.page++;
      if (action.payload === "PREV") state.page--;
      else state.page = action.payload;
    },
  },
});

export const { putCategory, changePage } = miscSlice.actions;

export const miscActions = miscSlice.actions;

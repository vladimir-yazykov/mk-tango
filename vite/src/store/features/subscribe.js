import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalShown: false,
};

const subscribe = createSlice({
  name: "subscribe",
  initialState,
  reducers: {
    showModal(state) {
      state.modalShown = true;
    },
  },
  selectors: {
    selectModalShown: (state) => state.modalShown,
  },
});

export const { showModal } = subscribe.actions;
export const { selectModalShown } = subscribe.selectors;

export default subscribe.reducer;

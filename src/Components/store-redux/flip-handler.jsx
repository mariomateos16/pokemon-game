import { createSlice } from "@reduxjs/toolkit";

const flipSlice = createSlice({
  name: "flip",
  initialState: true,
  reducers: {
    flipCard(state) {
      return !state;
    },
  },
});

export const flipActions = flipSlice.actions;

export default flipSlice;

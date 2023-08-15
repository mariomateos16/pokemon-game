import { createSlice } from "@reduxjs/toolkit";

const dificultySlice = createSlice({
  name: "level",
  initialState: {
    easy: true,
    medium: false,
    hard: false,
    start: false,
    level: 5,
    play: false,
  },
  reducers: {
    easyLevel(state) {
      state.easy = true;
      state.medium = false;
      state.hard = false;
      state.level = 5;
    },

    mediumLevel(state) {
      state.easy = false;
      state.medium = true;
      state.hard = false;
      state.level = 10;
    },

    hardLevel(state) {
      state.easy = false;
      state.medium = false;
      state.hard = true;
      state.level = 18;
    },
    startGame(state) {
      state.start = !state.start;
    },
    playAgain(state) {
      state.play = !state.play;
    },
  },
});

export const dificultyAction = dificultySlice.actions;

export default dificultySlice;

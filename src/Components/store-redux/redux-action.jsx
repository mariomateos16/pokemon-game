import { configureStore } from "@reduxjs/toolkit";

import dificultySlice from "./dificulty-level";
import flipSlice from "./flip-handler";
import memorySlice from "./memory-game";

const store = configureStore({
  reducer: {
    level: dificultySlice.reducer,
    flip: flipSlice.reducer,
    memory: memorySlice.reducer,
  },
});

export default store;

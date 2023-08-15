import { createSlice } from "@reduxjs/toolkit";

const memorySlice = createSlice({
  name: "memory",
  initialState: {
    pokemons: [],
    selectedPokemons: [],
    playerIsAlive: true,
    gameWon: false,
    score: 0,
  },
  reducers: {
    selectedPokemon(state, action) {
      if (
        !state.selectedPokemons.some(
          (pokemon) => pokemon.id === action.payload.id
        )
      ) {
        state.selectedPokemons.push(action.payload);
        state.score++;
        if (state.score === state.pokemons.length) {
          state.gameWon = true;
          state.playerIsAlive = false;
        }
      } else {
        state.playerIsAlive = false;
      }
    },
    getPokemons(state, action) {
      state.pokemons = action.payload;
    },
    reset(state) {
      state.playerIsAlive = true;
      state.gameWon = false;
      state.score = 0;
    },
  },
});

export const memoryActions = memorySlice.actions;

export default memorySlice;

import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setUsername: (state, { payload: { username } }) => {
      state.username = username;
    },
    updateScore: (state, { payload: { totalScore } }) => {
      state.score = totalScore;
    },
  },
});

export const { setUsername, updateScore } = playerSlice.actions;
export const selectPlayer = (state) => state.player.username;
export const selectScore = (state) => state.player.score;
export default playerSlice.reducer;

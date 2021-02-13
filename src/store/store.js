import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slices/player/playerSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export default store;

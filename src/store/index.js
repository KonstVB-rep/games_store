import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./games/gamesSlice";
import cartReducer from "./cart/cartSlice";
import singleGameReducer from "./games/currentGameSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    cart: cartReducer,
    singleGame: singleGameReducer,
  },
});

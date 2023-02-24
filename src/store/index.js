import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./games/gamesSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

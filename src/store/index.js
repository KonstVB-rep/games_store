import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./games/gamesSlice";
import cartReducer from "./cart/cartSlice";
import searchReducer from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    cart: cartReducer,
    search: searchReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

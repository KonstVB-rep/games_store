import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeProduct: (state, action) => {
      const targetIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems.splice(targetIndex, 1);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const selectCart = (state) => state.cart.cartItems;
export const selectTotalPrice = (state) => {
  return state.cart.cartItems.length
    ? state.cart.cartItems
        .map((item) => item.price)
        .reduce((acc, item) => acc + item, 0)
    : 0;
};
const cartReducer = cartSlice.reducer;
export default cartReducer;

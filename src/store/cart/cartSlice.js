import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      const targetIdx = state.findIndex((item) => action.payload);
      state.splice(targetIdx, 1);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const selectCart = (state) => state.cartList;
export const selectTotalPrice = (state) => {
  return state.cart.length
    ? state.cart.map((item) => item.price).reduce((acc, item) => acc + item, 0)
    : 0;
};
const cartReducer = cartSlice.reducer;
export default cartReducer;

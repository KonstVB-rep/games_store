import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    addProduct: {
      reducer: (state, action) => {
        const findItem = state.cartItems.find(
          (obj) => obj.id === action.payload.id
        );
        if (findItem) {
          findItem.totalCount++;
        } else {
          state.cartItems.push(action.payload);
        }
        state.totalPrice = state.cartItems.reduce(
          (acc, item) => acc + item.price * item.totalCount,
          0
        );
      },
      prepare: (data) => {
        return {
          payload: {
            ...data,
            totalCount: 1,
          },
        };
      },
    },
    removeProduct: (state, action) => {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.totalCount =
          findItem.totalCount <= 0 ? 0 : findItem.totalCount - 1;
      }
      if (findItem.totalCount === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        state.totalPrice -= findItem.price;
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const selectAllItems = (state) => state.cart.cartItems;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectCurrentItems = (state, id) =>
  state.cart.cartItems.filter((item) => item.id === id);

const cartReducer = cartSlice.reducer;
export default cartReducer;

import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    totalPrice: 0,
  },
  reducers: {
    setCurrentGame: (state, action)=>{
      state.currentGame = action.payload
    },
    clearCartList: (state) => {
      state.cartList = [];
      state.totalPrice = 0;
    },
    addProduct: {
      reducer: (state, action) => {
        const findItem = state.cartList.find(
          (obj) => obj.id === action.payload.id
        );
        if (findItem) {
          findItem.totalCount++;
        } else {
          state.cartList.push(action.payload);
        }
        state.totalPrice = state.cartList.reduce(
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

      const findItem = state.cartList.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.totalCount =
          findItem.totalCount <= 0 ? 0 : findItem.totalCount - 1;
      }
      if (findItem.totalCount === 0) {
        state.cartList = state.cartList.filter(
          (item) => item.id !== action.payload
        );
      }
      state.totalPrice -= findItem.price;
    },
  },
});

export const { addProduct, removeProduct,clearCartList } = cartSlice.actions;
export const selectAllItemsCart = (state) => state.cart.cartList;
export const selectCurrentItem = (id) => (state) => state.cart.cartList.find(item => item.id === id);
export const selectTotalPrice = (state) => state.cart.totalPrice;

const cartReducer = cartSlice.reducer;
export default cartReducer;

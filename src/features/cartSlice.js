import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
    },

    removeCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.totalQuantity -= state.cartItems[index].quantity;
        state.cartItems.splice(index, 1);
      }
    },

    incrementQty: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },

    decrementQty: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
        state.totalQuantity -= 1;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeCart,
  incrementQty,
  decrementQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
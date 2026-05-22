import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
  
    // ADD TO CART
   
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          ...item,
          quantity: 1,
        });
      }
    },

    
    // REMOVE FROM CART (USING SPLICE)
    
    removeCart: (state, action) => {
      const index = state.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.splice(index, 1);
      }
    },


    // INCREMENT QUANTITY
    incrementQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    
    // DECREMENT QUANTITY
    
    decrementQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        const index = state.findIndex((i) => i.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      }
    },

    
    // CLEAR CART
    
    clearCart: () => {
      return [];
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
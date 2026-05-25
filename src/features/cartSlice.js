import { createSlice } from "@reduxjs/toolkit";

/* ================= LOAD FROM LOCAL STORAGE ================= */

const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");

    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.log("LocalStorage Error:", error);
  }

  return {
    cartItems: [],
    totalQuantity: 0,
  };
};

/* ================= SAVE TO LOCAL STORAGE ================= */

const saveCart = (state) => {
  try {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        cartItems: state.cartItems,
        totalQuantity: state.totalQuantity,
      })
    );
  } catch (error) {
    console.log("Save Error:", error);
  }
};

/* ================= INITIAL STATE ================= */

const initialState = loadCart();

/* ================= SLICE ================= */

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    /* ================= ADD TO CART ================= */

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

      saveCart(state);
    },

    /* ================= REMOVE ITEM ================= */

    removeCart: (state, action) => {

      const itemId = action.payload;

      const existingItem = state.cartItems.find(
        (i) => i.id === itemId
      );

      if (existingItem) {

        state.totalQuantity -= existingItem.quantity;

      }

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemId
      );

      saveCart(state);
    },

    /* ================= INCREMENT ================= */

    incrementQty: (state, action) => {

      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );

      if (item) {

        item.quantity += 1;

        state.totalQuantity += 1;

      }

      saveCart(state);
    },

    /* ================= DECREMENT ================= */

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

      saveCart(state);
    },

    /* ================= CLEAR CART ================= */

    clearCart: (state) => {

      state.cartItems = [];

      state.totalQuantity = 0;

      saveCart(state);
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
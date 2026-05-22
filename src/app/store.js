import { configureStore } from "@reduxjs/toolkit";

// ================= IMPORT REDUCERS =================

import cartReducer from "../features/cartSlice";

import cuponReducer from "../features/cuponSlice";

// ================= STORE =================

const store = configureStore({

  reducer: {

    cart: cartReducer,

    cuponDetails: cuponReducer,
  },
});

// ================= EXPORT STORE =================

export default store;
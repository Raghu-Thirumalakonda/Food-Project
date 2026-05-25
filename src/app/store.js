import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cartSlice";
import cuponReducer from "../features/cuponSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cuponDetails: cuponReducer,
  },
});

export default store;
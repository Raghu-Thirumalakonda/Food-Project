import { createSlice } from "@reduxjs/toolkit";

// ================= COUPON LIST =================

const coupons = {
  SAVE10: 10,
  SAVE20: 20,
  WELCOME5: 5,
  FESTIVE25: 25,
  FOOD50: 50,
  FIRSTORDER: 15,
  SUPER30: 30,
  MEGA40: 40,
};

// ================= SLICE =================

const cuponSlice = createSlice({

  name: "cupon",

  initialState: {

    code: "",

    discount: 0,

    applied: false,

    message: "",
  },

  reducers: {

    // ================= APPLY COUPON =================

    applyCupon: (state, action) => {

      const finalCuponCode =
        action.payload.toUpperCase();

      if (finalCuponCode in coupons) {

        state.code = finalCuponCode;

        state.discount =
          coupons[finalCuponCode];

        state.applied = true;

        state.message =
          `Coupon "${finalCuponCode}" Applied Successfully 🎉`;

      } else {

        state.code = "";

        state.discount = 0;

        state.applied = false;

        state.message =
          "Invalid Coupon Code ❌";
      }
    },

    // ================= RESET COUPON =================

    resetCoupon: (state) => {

      state.code = "";

      state.discount = 0;

      state.applied = false;

      state.message = "";
    },
  },
});

// ================= EXPORT ACTIONS =================

export const {applyCupon,resetCoupon,} = cuponSlice.actions;

// ================= EXPORT REDUCER =================

export default cuponSlice.reducer;
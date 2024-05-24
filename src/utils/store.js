import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    cart: cartSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    cart: cartSlice,
    user: userSlice,
  },
});

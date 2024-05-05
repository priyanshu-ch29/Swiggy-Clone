import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";

export const store = configureStore({
    reducer:{
        toggle: toggleSlice
    }
})
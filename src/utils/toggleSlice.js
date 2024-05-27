import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toogleSlice",
  initialState: {
    value: false,
    sideBar: false,
    input: false,
    visible: true,
  },
  reducers: {
    // fir total reduccer ko export krna  pdega (reducer ma function likha jyga)
    handleToggle: (state) => {
      // action hain isko bhi export krna pdega
      state.value = !state.value;
    },
    handleSignIn: (state, action) => {
      state.sideBar = true;
    },
    handleToggleCross: (state) => {
      state.sideBar = false;
    },
    handleReferralCode: (state) => {
      state.input = !state.input;
      state.visible = !state.visible;
    },
  },
});

export const {
  handleToggle,
  handleSignIn,
  handleToggleCross,
  handleReferralCode,
} = toggleSlice.actions;
export default toggleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name: "toogleSlice",
    initialState: {
        value:false,
        sideBar:false
    }, 
    reducers: { // fir total reduccer ko export krna  pdega (reducer ma function likha jyga)
        handleToggle:(state) =>{ // action hain isko bhi export krna pdega 
            state.value = !state.value;
        },
        handleSignIn:(state,action) =>{
            if(action.payload === 5){
                state.sideBar = true;
            }
        },
        handleToggleCross:(state) =>{
            state.sideBar = false;
        }
    }
})

export const {handleToggle, handleSignIn, handleToggleCross} = toggleSlice.actions
export default toggleSlice.reducer
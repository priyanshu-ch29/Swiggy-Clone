import { createSlice } from "@reduxjs/toolkit";

// to calculate the total bill add total to items total
const calculateTotal = (items) => {
  return items.reduce((total, item) => {
    return total + item.totalAmt;
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 1,
    itemTotal: 0,
    checkoutVisible: false,
  },
  reducers: {
    addItem: (state, action) => {
      const newData = action.payload;
      state.items = [
        {
          // modifying the api using spread operator and replacing the price and default price with totalAmt
          ...newData,
          totalAmt:
            newData.card.info.price / 100 ||
            newData.card.info.defaultPrice / 100,
        },
        ...state.items,
      ];
      state.itemTotal = calculateTotal(state.items); // itemtotal give us the price of cart items after inc or dec quantity this item total is subscribe as total bill in cart component
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    increaseQty: (state, action) => {
      state.items.find((item) => {
        if (item.card.info.id === action.payload) {
          // if id matches the item id after clicking on add button in menuitem then it will increase the qty and totalAmt also by 1
          item.card.info.inStock += 1; // incerease the quantity
          item.totalAmt += // increase the totalAmt
            item.card.info.price / 100 || item.card.info.defaultPrice / 100;
          state.itemTotal = calculateTotal(state.items); // calculate the itemTotal after increasing the item
        }
      });
    },
    decreaseQty: (state, action) => {
      state.items.find((item) => {
        if (item.card.info.id === action.payload) {
          // if id matches the item id after clicking on add button in menuitem then it will decrease the qty and totalAmt also by 1
          if (item.card.info.inStock > 1) {
            item.card.info.inStock -= 1; // decrease the quantity
            item.totalAmt -= // decrease the totalAmt
              item.card.info.price / 100 || item.card.info.defaultPrice / 100;
            state.itemTotal = calculateTotal(state.items); // calculate the itemTotal after decreasung the item
          }
        }
      });
    },
    checkout: (state) => {
      state.checkoutVisible = true;
    },
    orderConfirm: (state) => {
      state.checkoutVisible = false;
    },
  },
});

export const {
  addItem,
  clearCart,
  increaseQty,
  decreaseQty,
  checkout,
  orderConfirm,
} = cartSlice.actions;
export default cartSlice.reducer;

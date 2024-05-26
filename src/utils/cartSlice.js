import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 1,
    itemTotal: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newData = action.payload;
      // console.log(newData);
      state.items = [
        {
          ...newData,
          totalAmt:
            newData.card.info.price / 100 ||
            newData.card.info.defaultPrice / 100,
        },
        ...state.items,
      ];
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    increaseQty: (state, action) => {
      state.items.find((item) => {
        if (item.card.info.id === action.payload) {
          item.card.info.inStock += 1;
          item.totalAmt +=
            item.card.info.price / 100 || item.card.info.defaultPrice / 100;
        }
      });
    },
    decreaseQty: (state, action) => {
      state.items.find((item) => {
        if (item.card.info.id === action.payload) {
          if (item.card.info.inStock > 1) {
            item.card.info.inStock -= 1;
            item.totalAmt -=
              item.card.info.price / 100 || item.card.info.defaultPrice / 100;
          }
        }
      });
    },
  },
});

export const { addItem, clearCart, increaseQty, decreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;

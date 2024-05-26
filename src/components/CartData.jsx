import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty } from "../utils/cartSlice";
import { ITEM_URL } from "../utils/constant";

const CartData = (items) => {
  //   console.log(items.items.totalAmt);
  const amt = useSelector((store) => store.cart.totalAmount);
  //   console.log(amt);
  const dispatch = useDispatch();
  const handleCartItem = (id) => {
    dispatch(increaseQty(id));
  };

  const { name, id, inStock, imageId } = items.items.card.info;
  return (
    <div>
      <div className="flex justify-between m-5 items-center">
        <img src={ITEM_URL + imageId} className="w-[70px]" alt="" />
        <h1 className="font-medium w-[45%]">{name}</h1>
        <div className="border border-green-600 p-[3px] w-[60px] h-[25px] flex justify-between items-center">
          <button
            className="text-green-600"
            onClick={() => dispatch(decreaseQty(id))}
          >
            -
          </button>
          <span>{inStock}</span>
          <button className="text-green-600" onClick={() => handleCartItem(id)}>
            +
          </button>
        </div>
        <h1 className="font-semibold">₹{items.items.totalAmt}</h1>
      </div>
    </div>
  );
};

export default CartData;

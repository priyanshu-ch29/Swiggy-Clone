import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty } from "../utils/cartSlice";
import { ITEM_URL } from "../utils/constant";

const CartData = (items) => {
  const dispatch = useDispatch();

  const { name, id, inStock, imageId } = items.items.card.info;
  return (
    <div>
      <div className="flex justify-between m-5 items-center">
        <img
          src={ITEM_URL + imageId}
          className="w-[70px] max-[780px]:hidden"
          alt=""
        />
        <h1 className="font-medium w-[45%]">{name}</h1>
        <div className="border border-green-600 p-[3px] w-[60px] h-[25px] flex justify-between items-center max-[580px]:m-3">
          <button
            className="text-green-600"
            onClick={() => dispatch(decreaseQty(id))} // decreasing the quantity of cart item
          >
            -
          </button>
          <span>{inStock}</span>
          <button
            className="text-green-600"
            onClick={() => dispatch(increaseQty(id))} // increasing the quantity of cat item
          >
            +
          </button>
        </div>{" "}
        {/* price of the items in cart */}
        <h1 className="font-semibold">₹{items.items.totalAmt}</h1>
      </div>
    </div>
  );
};

export default CartData;

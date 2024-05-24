import React from "react";
import { ITEM_URL } from "../utils/constant";
import { selectClasses } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import { useState } from "react";

const MenuItem = ({ item, menuInfo }) => {
  let [cartData, setCartData] = useState([]);

  const { name, description, imageId, price, defaultPrice, id } =
    item?.card?.info;

  const handleCart = (id) => {
    const selectedItem = menuInfo.find((items) => {
      if (items.card.info.id === id) {
        return items.card.info;
      }
    });
    cartData = [...selectedItem, cartData];
    console.log(cartData);
  };
  return (
    <>
      <div className="flex justify-between border-b-2 mb-[40px] p-7 h-auto">
        <div className="w-[75%]">
          <h1 className="font-bold font-font-poppins text-[17px]">{name}</h1>
          <h4 className="font-semibold font-font-poppins">
            Rs.{defaultPrice / 100 || price / 100}
          </h4>
          <h3 className="text-[15px] mt-[20px] text-gray-500 font-semibold font-font-poppins">
            {description}
          </h3>
        </div>
        <div className="relative">
          <img
            className="w-[170px] h-[170px] rounded-lg "
            src={ITEM_URL + imageId}
            alt=""
          />
          <button
            onClick={() => handleCart(id)}
            className="absolute left-7 top-[150px] w-[125px] h-[40px] rounded-lg bg-white font-extrabold text-green-600 text-center"
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuItem;

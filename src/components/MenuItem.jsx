import React from "react";
import { ITEM_URL } from "../utils/constant";

const MenuItem = ({ item }) => {
  const { name, description, imageId, price, defaultPrice } = item?.card?.info;

  //   console.log(item?.card?.info?.name);
  return (
    <>
      <div className="flex justify-between border-b-2 mb-[40px] p-2 h-[20vh]">
        <div className="">
          <h1 className="font-bold text-[17px]">{name}</h1>
          <h4 className="font-semibold">
            Rs.{defaultPrice / 100 || price / 100}
          </h4>
          <h3 className="text-[15px] mt-[45px] text-gray-500 font-semibold">
            {description}
          </h3>
        </div>
        <img
          className="w-[170px] h-auto rounded-lg"
          src={ITEM_URL + imageId}
          alt=""
        />
      </div>
    </>
  );
};

export default MenuItem;

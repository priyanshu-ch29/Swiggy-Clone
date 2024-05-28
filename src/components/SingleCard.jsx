import React from "react";
import { CDN_URL } from "../utils/constant";

const SingleCard = ({ items }) => {
  // taking items as aa prop from card
  const { cloudinaryImageId, name, cuisines, avgRatingString, areaName } =
    items?.info; // destructuring of card info

  const { deliveryTime } = items?.info?.sla;

  return (
    <>
      <div className="m-4 p-2 w-[250px] h-auto hover:cursor-pointer hover:scale-105">
        <img
          className=" w-full h-[180px] rounded-xl"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="pt-1 font-semibold text-[20px] font-font-poppins">
          {name}
        </h3>
        <h4 className="font-semibold font-font-poppins text-[15px]">
          {avgRatingString} stars . {deliveryTime} min
        </h4>
        <h4 className="pt-1 font-font-poppins">{cuisines.join(", ")}</h4>
        <h4 className="pt-1 font-font-poppins font-semibold">{areaName}</h4>
      </div>
    </>
  );
};

export default SingleCard;

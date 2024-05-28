import React from "react";
import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RiStarSFill } from "react-icons/ri";
import { IoIosBicycle } from "react-icons/io";
import MenuCategory from "./MenuCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams(); // to check the id of restaurant it is click

  const { resInfo, resCategory } = useRestaurantMenu(id); // fetch the api from custom hook
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    city,
    areaName,
  } = resInfo;

  const { slaString } = resInfo?.sla;
  const { message } = resInfo?.feeDetails;
  const removeHTMLTags = (html) => {
    return html.replace(/<\/?b>/g, ""); // Removes <b> and </b> tags
  };

  const sanitizedData = removeHTMLTags(message);

  return (
    <>
      <div>
        <div className="my-5 flex items-center w-[55rem] mx-auto">
          <div className="space-x-2 text-[13px] font-semibold text-gray-500 flex items-center max-md:m-4">
            {" "}
            <Link to="/">
              <h3>Home /</h3>
            </Link>
            <h3>{city} /</h3>
            <h3>{name} </h3>
          </div>
        </div>
        <div className="flex flex-col items-start  w-[55rem] mx-auto max-sm:w-[480px] max-md:w-[700px] max-sm:m-2 ">
          <h1 className="mb-4 text-[27px] font-bold"> {name} </h1>
          <div className="shadow-lg rounded-xl border w-full px-3 py-3">
            <h3 className="font-semibold text-[18px] flex items-center space-x-3">
              <RiStarSFill className="text-[20px]" />
              {avgRating} <span>({totalRatingsString})</span> .{" "}
              <span>{costForTwoMessage}</span>
            </h3>
            <h3 className="font-semibold text-orange-500 underline pb-1">
              {cuisines.join(", ")}
            </h3>
            <h3 className="font-semibold pb-1">Outlet {areaName}</h3>
            <h3 className="font-semibold pb-2">{slaString}</h3>
            <h3 className="border-t-2 flex text-2l text-gray-500 w-full pt-2 items-center space-x-3">
              <IoIosBicycle className="text-[25px]" />{" "}
              <span>{sanitizedData}</span>
            </h3>
          </div>
        </div>
      </div>
      <div>
        {resCategory.map((category, index) => (
          <MenuCategory // menu category reccomended, vig pizza etc
            key={category.card?.card?.id || index}
            data={category?.card?.card} // passing the menu items list as prop
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { RiStarSFill } from "react-icons/ri";
import { IoIosBicycle } from "react-icons/io";
import MenuItem from "./MenuItem";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Navabar from "./Navbar";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const [resInfo, setResInfo] = useState(null);
  const [arrow, setArrow] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();
    setMenuInfo(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setResInfo(json.data?.cards[2]?.card?.card?.info);
  };

  if (menuInfo === null && resInfo === null) return <Shimmer />;

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
          <div className="space-x-2 text-[13px] font-semibold text-gray-500 flex items-center">
            {" "}
            <Link to="/">
              <h3>Home /</h3>
            </Link>
            <h3>{city} /</h3>
            <h3>{name} </h3>
          </div>
        </div>
        <div className="flex flex-col items-start  w-[55rem] mx-auto ">
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
      <div className=" w-[55rem] mx-auto border-t-[20px] mt-5">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-bold text-[18px]">
            Recommended ({menuInfo.length})
          </h1>
          {arrow === false ? (
            <IoIosArrowUp
              onClick={() => setArrow(true)}
              className="text-[25px] mt-4"
            />
          ) : (
            <IoIosArrowDown
              onClick={() => setArrow(false)}
              className="text-[25px] mt-4"
            />
          )}
        </div>

        {arrow &&
          menuInfo.map((items) => {
            return (
              <>
                <div key={items.card.info.id}>
                  <MenuItem item={items} />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default RestaurantMenu;

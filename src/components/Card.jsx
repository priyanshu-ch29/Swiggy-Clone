import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

function Card() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setCard(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return card.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" m-4">
      <h2 className="text-[24px] font-font-poppins font-bold ml-[190px] max-md:ml-[120px] max-sm:ml-[60px] py-3">
        Restaurants with online food delivery
      </h2>
      <div className="grid grid-cols-4 gap-4 w-[80%] justify-center justify-items-center mx-auto max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {card.map((items) => (
          <Link key={items?.info?.id} to={`/SingleProduct/${items?.info?.id}`}>
            <SingleCard items={items} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;

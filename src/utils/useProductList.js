import { useState, useEffect } from "react";

const useProductList = () => {
  // fetching the real api data from swiggy
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      // api url
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setCard(
      // this is where the card data is
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return { card };
};

export default useProductList;

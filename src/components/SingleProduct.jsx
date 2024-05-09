import React, { useEffect, useState } from "react";
import Navabar from "./Navbar";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [singleProductData, setSingleProductData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setSingleProductData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const filter = singleProductData.filter((items) => {
      return items?.info?.id === id;
    });

    setSingleProductData(filter);
  };

  return (
    <>
      <Navabar />
    </>
  );
}

export default SingleProduct;

import { useState, useEffect } from "react";
import { CORS_PROXY_API, RES_API } from "./constant";

const useProductList = () => {
  // fetching the real api data from swiggy
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${CORS_PROXY_API}/fetch?${RES_API}`);
    const json = await data.json();
    setCard(
      // this is where the card data is
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return { card };
};

export default useProductList;

// {
//   headers: {
//     "x-cors-api-key": "temp_48b0835c4b5263584e5999a7a70ae852",
//   },
// }

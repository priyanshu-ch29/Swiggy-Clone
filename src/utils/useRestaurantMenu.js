import { useEffect, useState } from "react";
// import { MENU_API } from "./constant";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const [resCategory, setResCategory] = useState(null);

  const fetchData = async () => {
    // fetch the restaurnt item menu api
    const MenuApi =
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6691565&lng=77.45375779999999&restaurantId=";
    const data = await fetch(MenuApi + id);
    const json = await data.json();

    setResInfo(json.data?.cards[2]?.card?.card?.info);
    setResCategory(
      json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { resInfo, resCategory };
};

export default useRestaurantMenu;

import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const [resCategory, setResCategory] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetch the restaurnt item menu api
    const data = await fetch(MENU_API + id);
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

  return { resInfo, resCategory };
};

export default useRestaurantMenu;

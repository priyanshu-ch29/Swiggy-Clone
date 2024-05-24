import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (id) => {
  const [menuInfo, setMenuInfo] = useState(null);
  const [resInfo, setResInfo] = useState(null);

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

  return { resInfo, menuInfo };
};

export default useRestaurantMenu;

import React from "react";
import { ITEM_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item)); // addItem to cart page
    toast("Item added to cart", {
      position: "top-center",
      type: "success",
      theme: "dark",
      autoClose: 3000,
    });
  };

  return (
    <>
      <ToastContainer />{" "}
      {/*// mappimg all the item which is taken as prop from menuCategory component */}
      {item.map((itemList) => (
        <div key={itemList.card.info.id}>
          <div className="flex justify-between border-b-2 mb-[40px] pt-5 pb-10 h-auto">
            <div className="w-[80%]">
              <h1 className="font-bold text-[17px]">
                {itemList.card.info.name}
              </h1>
              <h4 className="font-semibold">
                Rs.
                {itemList.card.info.defaultPrice / 100 ||
                  itemList.card.info.price / 100}
              </h4>
              <h3 className="text-[15px] mt-[45px] text-gray-500 font-semibold max-md:hidden">
                {itemList.card.info.description}
              </h3>
            </div>
            <div className="relative">
              <img
                className="w-[170px] h-[170px] rounded-lg "
                src={ITEM_URL + itemList.card.info.imageId}
                alt=""
              />
              <button
                className="absolute left-7 top-[150px] w-[125px] h-[40px] rounded-lg bg-white font-extrabold text-green-600 text-center"
                onClick={() => handleAddItems(itemList)} // on click of this button we handle itemlist means we are adding all the item in the cart
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItem;

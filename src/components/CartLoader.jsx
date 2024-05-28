import React from "react";
import { Link } from "react-router-dom";

const CartLoader = () => {
  return (
    // if cart.lenth == 0 then display this cart loader
    <div className=" flex items-center justify-center text-center h-[90vh]">
      <div>
        <img
          className="w-[300px] h-[250px] mx-auto"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt=""
        />
        <h1 className=" font-font-poppins font-bold text-[20px] m-4">
          Your Cart is empty
        </h1>
        <p className=" font-font-poppins text-gray-500">
          You can go to home page to view more restaurants
        </p>
        <Link to="/">
          <button className=" font-font-poppins m-6 bg-orange-500 text-white p-2 w-[250px]">
            SEE RESTAURANT NEAR YOU
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartLoader;

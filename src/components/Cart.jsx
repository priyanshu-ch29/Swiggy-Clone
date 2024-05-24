import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartLoader from "./CartLoader.jsx";
import MenuItem from "./MenuItem.jsx";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleCartData = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <CartLoader />
  ) : (
    <>
      <h1 className="text-center mt-3 p-4 text-2xl font-bold">Cart Data</h1>
      <div className="flex items-center justify-center">
        <button
          className="m-2 bg-orange-500 text-white p-2 w-[100px] text-center items-center"
          onClick={handleCartData}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-[70%] mx-auto mt-5">
        <MenuItem item={cartItems} />
      </div>

      {/* <div>
        <div>
          <div className="bg-gray-200 w-[700px] h-[200px] absolute  left-[10%] m-10 shadow-xl "></div>
          <div className="bg-gray-200 w-[700px] h-[200px] absolute  left-[10%] top-[60%] m-10 shadow-xl "></div>
          <div className="bg-gray-200 w-[400px] h-[500px] absolute left-[60%] m-10 shadow-xl"></div>
        </div>
      </div> */}
    </>
  );
};

export default Cart;

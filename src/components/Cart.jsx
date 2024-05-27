import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartLoader from "./CartLoader.jsx";
import { clearCart } from "../utils/cartSlice.js";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import CartData from "./CartData.jsx";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalBill = useSelector((store) => store.cart.itemTotal);
  const deliveryFee = 60;
  const platformFee = 5;
  const gstCharges = 117;
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <CartLoader />
  ) : (
    <div className="bg-gray-200 w-full min-h-[90vh]">
      <div className="flex justify-evenly">
        <div>
          <div className="bg-white shadow m-7 p-9 w-[790px] h-[200px] flex justify-between items-center">
            <FaUserCircle className="text-[40px] absolute left-[50px] " />
            <div>
              <h2 className=" font-bold font-font-poppins text-[22px] mt-4 ml-4">
                Account
              </h2>
              <span className=" text-gray-500 font-font-poppins font-normal text-[15px] ml-4 ">
                To place your order now, log in to your existing account or sign
                up.
              </span>

              <button className="w-[140px] h-[50px] m-4 border border-green-400 text-green-500 font-font-poppins font-medium">
                <span className="font-light text-[13px]">Have an Account?</span>{" "}
                LOG IN
              </button>
              <button className="w-[140px] h-[50px] bg-green-600 m-4 text-white font-font-poppins font-medium">
                <span className=" font-light text-[13px]">New to Swiggy?</span>{" "}
                SIGN UP
              </button>
            </div>

            <div>
              <img
                className="w-[130px] mr-7"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                alt=""
              />
            </div>
          </div>
          <div className="bg-white shadow p-3 m-7 w-[790px] h-[100px]">
            <FaLocationDot className="text-[40px] absolute left-[50px]" />
            <h2 className=" font-font-poppins font-medium text-[17px] text-gray-500 m-7">
              Delivery Address
            </h2>
          </div>
          <div className="bg-white shadow p-3 m-7 w-[790px] h-[100px]">
            <IoIosWallet className="text-[40px] absolute left-[50px] " />
            <h2 className=" font-font-poppins font-medium text-[17px] text-gray-500 m-7">
              Payment
            </h2>
          </div>
        </div>
        <div className="bg-white shadow p-3 m-7 w-[500px]">
          <div>
            {cartItems.map((item) => {
              return (
                <>
                  <CartData key={item.card.info.id} items={item} />
                </>
              );
            })}
          </div>

          <div className="m-3 border-t-[5px] ">
            <h1 className="mb-6 m-1 font-semibold text-2xl">Bill Details</h1>
            <div>
              <h1 className="flex justify-between m-1 font-semibold ">
                Items total <span>₹{totalBill}</span>
              </h1>
              <h1 className="flex justify-between m-1 font-semibold ">
                Delivery Fee <span>₹{deliveryFee}</span>
              </h1>
              <h1 className="flex justify-between m-1 font-semibold ">
                Platform Fee <span>₹{platformFee}</span>
              </h1>
              <h1 className="flex justify-between m-1 mb-2 font-semibold ">
                GST and Restaurant Charges <span>₹{gstCharges}</span>
              </h1>
              <h1 className="flex justify-between m-1 mt-3 font-semibold border-t-[2px] ">
                Total pay <span>₹{gstCharges}</span>
              </h1>
              <button
                onClick={emptyCart}
                className="m-1 bg-orange-500 text-white p-2 w-[150px]"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

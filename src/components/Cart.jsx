import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartLoader from "./CartLoader.jsx";
import { checkout, clearCart, orderConfirm } from "../utils/cartSlice.js";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import CartData from "./CartData.jsx";
import { Link } from "react-router-dom";
import { handleSignIn } from "../utils/toggleSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // subscribing to show cart items
  const totalBill = useSelector((store) => store.cart.itemTotal); // subscribing to show itemTotal in cart
  const checkOut = useSelector((store) => store.cart.checkoutVisible);
  const orderVisible = useSelector((store) => store.cart.checkoutVisible);
  const val = useSelector((store) => store.toggle.value); // subscribing to show signin sidebar
  const user = useSelector((store) => store.user); // subscribing user to this component to check user is logged in or not and using conditional rendering display data accordingly
  const deliveryFee = 60;
  const platformFee = 5;
  const gstCharges = 117;
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(clearCart());
  };
  const handleCheckout = () => {
    dispatch(checkout());
  };
  const checkoutDisable = () => {
    dispatch(clearCart());
    dispatch(orderConfirm());
  };
  const signIn = () => {
    dispatch(handleSignIn());
  };

  return cartItems.length === 0 ? (
    <CartLoader />
  ) : (
    <>
      {checkOut && ( // display a box after user click on checkout button written thank u
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-10 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold">Your order has been placed!!</h2>
            <h2 className="text-2xl font-bold">Thank you!!</h2>
            <Link to="/">
              <button
                onClick={checkoutDisable} // onclick caart length will be 0
                className="m-2 bg-orange-500 text-white p-2 w-[100px]"
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="bg-gray-200 w-full min-h-[90vh]">
        <div className="flex justify-evenly">
          <div>
            <div className="bg-white shadow m-7 p-9 w-[790px] h-[200px] flex justify-between items-center max-[1362px]:w-[600px] max-[1175px]:w-[400px] max-[978px]:w-[200px]">
              <FaUserCircle className="text-[40px] absolute left-[50px] max-[926px]:hidden max-md:left-[30px] max-lg:left-[30px] " />
              <div>
                {user && ( // if user is logged in then display his name, address, payment
                  <>
                    <h2 className=" font-bold font-font-poppins text-[22px] mt-4 ml-4">
                      Account
                    </h2>
                    <h2 className=" font-bold font-font-poppins text-[22px] mt-4 ml-4">
                      Hello {user.displayName} 🚀🚀
                    </h2>
                  </>
                )}
                {!user && ( // if user is not logged in display a button to sign in or sign up
                  <>
                    <h2 className=" font-bold font-font-poppins text-[22px] mt-4 ml-4">
                      Account
                    </h2>
                    <span className=" text-gray-500 font-font-poppins font-normal text-[15px] ml-4 ">
                      To place your order now, log in to your existing account
                      or sign up.
                    </span>
                    <button
                      onClick={signIn} // dispaly a sidebar for login and sign up
                      className="w-[140px] h-[50px] m-4 border border-green-400 text-green-500 font-font-poppins font-medium"
                    >
                      <span className="font-light text-[13px]">
                        Have an Account?
                      </span>{" "}
                      LOG IN
                    </button>
                    <button
                      onClick={signIn}
                      className="w-[140px] h-[50px] bg-green-600 m-4 text-white font-font-poppins font-medium"
                    >
                      <span className=" font-light text-[13px]">
                        New to Swiggy?
                      </span>{" "}
                      SIGN UP
                    </button>
                  </>
                )}
              </div>

              <div>
                <img
                  className="w-[130px] mr-7 max-[989px]:hidden"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                  alt=""
                />
              </div>
            </div>
            {!user && (
              <>
                <div className="bg-white shadow p-3 m-7 w-[790px] h-[100px]  max-[1362px]:w-[600px]  max-[1175px]:w-[400px] max-[978px]:w-[200px]">
                  <FaLocationDot className="text-[40px] absolute left-[50px] max-[926px]:hidden max-md:left-[30px] max-lg:left-[30px]" />
                  <h2 className=" font-font-poppins font-medium text-[17px] text-gray-500 m-7">
                    Delivery Address
                  </h2>
                </div>
              </>
            )}
            {user && ( // if user is logged in show his delivery address
              <>
                <div className="bg-white shadow p-3 m-7 w-[790px] h-[100px]  max-[1362px]:w-[600px]  max-[1175px]:w-[400px] max-[978px]:w-[200px] max-[981px]:h-[200px]">
                  <FaLocationDot className="text-[40px] absolute left-[50px] max-[926px]:hidden max-md:left-[30px] max-lg:left-[30px]" />
                  <h2 className=" font-font-poppins font-medium text-[17px] text-gray-500 mt-4 ml-10">
                    Tower 1D Flat no - 605 Skardi Greens Golf Links, Ghaziabad,
                    Uttar Pradesh, India.
                  </h2>
                </div>
              </>
            )}
            <div className="bg-white shadow p-3 m-7 w-[790px] h-[100px]  max-[1362px]:w-[600px]  max-[1175px]:w-[400px] max-[978px]:w-[200px]">
              <IoIosWallet className="text-[40px] absolute left-[50px] max-[926px]:hidden max-md:left-[30px] max-lg:left-[30px]" />
              <h2 className=" font-font-poppins font-medium text-[17px] text-gray-500 ml-10 mt-4">
                Payment
              </h2>
            </div>
          </div>
          <div className="bg-white shadow p-3 m-7 w-[500px] max-[780px]:w-[300px] max-[575px]:w-[200px]">
            <div>
              {cartItems.map((item) => {
                // mapping the cart items data in the cart component from cartData component
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
                  {" "}
                  {/* display the total bill after adding items to cart */}
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
                  Total pay{" "}
                  <span>
                    ₹{gstCharges + deliveryFee + platformFee + totalBill}
                  </span>
                </h1>
                <div className="flex justify-evenly max-[585px]:flex-col">
                  <button
                    onClick={emptyCart} // onClick empty the cart
                    className="m-9 bg-orange-500 text-white p-2 w-[150px] max-[585px]:w-[100px]"
                  >
                    Clear Cart
                  </button>
                  {user && ( // if user is logged in then show this checkout button else not
                    <>
                      <button
                        onClick={handleCheckout} // display a message showing thank u for ordering
                        className="m-9 bg-orange-500 text-white p-2 w-[150px] max-[585px]:w-[100px]"
                      >
                        Checkout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

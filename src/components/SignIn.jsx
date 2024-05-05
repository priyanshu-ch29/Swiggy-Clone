import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleCross } from "../utils/toggleSlice";

function SignIn() {
  const value = useSelector((store) => store.toggle.sideBar);
  const dispatch = useDispatch();

  const handleCross = () => {
    dispatch(handleToggleCross());
  };
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-transparent to-black ${
        value ? "block" : "hidden"
      }`}
    >
      <div
        className={`h-screen w-[36%] bg-white absolute right-0 py-8 pr-[150px] pl-9`}
      >
        <RxCross2
          className=" text-3xl hover:cursor-pointer"
          onClick={handleCross}
        />
        <div className="flex items-center justify-between pb-[50px]">
          <div>
            <h1 className=" text-2xl font-bold pb-1">Login</h1>
            <h3>
              or{" "}
              <span className=" text-orange-500 hover:cursor-pointer">
                create account
              </span>
            </h3>
          </div>
          <img
            className="w-[100px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            alt=""
          />
        </div>
        <form action="" className="flex flex-col">
          <input
            className=" border-2 rounded shadow w-full h-[70px] mb-4 hover:border-none px-3"
            type="tel"
            name="phone"
            id="mobile"
            placeholder="Phone Number"
            pattern="[0-9]+"
          />
          <button
            disabled
            className=" cursor-pointer shadow bg-orange-500 border-2 rounded text-center h-[50px] text-white font-semibold text-[14px]"
          >
            LOGIN
          </button>
          <p className=" font-font-poppins text-[11px]">
            By clicking on Login, I accept the Terms & Conditions & Privacy
            Policy
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

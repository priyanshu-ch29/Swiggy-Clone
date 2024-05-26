import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleReferralCode, handleToggleCross } from "../utils/toggleSlice";
import { auth } from "../utils/fiebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignIn() {
  const email = useRef(null);
  const password = useRef(null);
  const [isSignUpForm, setisSignUpForm] = useState(false);
  const value = useSelector((store) => store.toggle.sideBar);
  const inputVisible = useSelector((store) => store.toggle.input);
  const codeVisible = useSelector((store) => store.toggle.visible);
  const dispatch = useDispatch();

  const handleCross = () => {
    dispatch(handleToggleCross());
  };

  const handleCode = () => {
    dispatch(handleReferralCode());
  };

  const handleAuthentication = (e) => {
    if (e.target.value == "Login") {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      toast("logged in successfully", {
        position: "top-center",
        type: "success",
        theme: "dark",
        autoClose: 3000,
      });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      toast("user created successfully", {
        position: "top-center",
        type: "success",
        theme: "dark",
        autoClose: 3000,
      });
    }
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <>
      <ToastContainer />
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
            <div className="relative">
              <h1 className="  text-2xl font-bold pb-1">
                {isSignUpForm ? "Sign Up" : "Login"}
              </h1>
              <span className="after-Heading "></span>
              <h3>
                or{" "}
                <span
                  onClick={() =>
                    isSignUpForm === false
                      ? setisSignUpForm(true)
                      : setisSignUpForm(false)
                  }
                  className=" text-orange-500 hover:cursor-pointer"
                >
                  {isSignUpForm
                    ? "Login into your Account"
                    : "Create an Account"}
                </span>
              </h3>
            </div>
            <img
              className="w-[100px]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt=""
            />
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            action=""
            className="flex flex-col"
          >
            {isSignUpForm && (
              <>
                <input
                  className=" border-2 w-full h-[70px] px-3 focus:outline-none"
                  type="tel"
                  name="phone"
                  id="mobile"
                  placeholder="Phone Number"
                  pattern="[0-9]+"
                />
                <input
                  className=" border-2 w-full h-[70px] px-3 focus:outline-none"
                  type="name"
                  name="fl_name"
                  id="name"
                  placeholder="Name"
                />
                <input
                  ref={email}
                  className=" border-2 w-full h-[70px] px-3 focus:outline-none"
                  type="email"
                  name="mail"
                  placeholder="Email"
                />
                <input
                  ref={password}
                  className=" border-2 w-full h-[70px] px-3 focus:outline-none"
                  type="Password"
                  name="password"
                  placeholder="Password"
                />
                {codeVisible && (
                  <p
                    onClick={handleCode}
                    id="code"
                    className=" my-4 text-blue-600 text-[14px] font-medium hover:cursor-pointer"
                  >
                    Have a referral code?
                  </p>
                )}
                {inputVisible && (
                  <input
                    className=" border-2 w-full h-[70px] mb-4 px-3 focus:outline-none"
                    type="text"
                    name="referralCode"
                    placeholder="Referral Code"
                  />
                )}
              </>
            )}
            {!isSignUpForm && (
              <>
                <input
                  ref={email}
                  className=" border-2 w-full h-[70px] px-3 focus:outline-none "
                  type="email"
                  name="email"
                  id="mobile"
                  placeholder="email"
                />
                <input
                  ref={password}
                  className=" border-2 w-full h-[70px] px-3 focus:outline-none mb-4"
                  type="password"
                  name="Password"
                  placeholder="password"
                />
              </>
            )}
            <button
              value={isSignUpForm ? "Continue" : "Login"}
              onClick={(e) => handleAuthentication(e)}
              className=" cursor-pointer shadow bg-orange-500 border-2 rounded text-center h-[50px] text-white font-semibold text-[14px]"
            >
              {isSignUpForm ? "Continue" : "Login"}
            </button>
            <p className=" font-font-poppins text-[11px]">
              By clicking on Login, I accept the Terms & Conditions & Privacy
              Policy
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;

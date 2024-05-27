import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleReferralCode, handleToggleCross } from "../utils/toggleSlice";
import { auth } from "../utils/fiebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { validation } from "../utils/validate";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [isSignUpForm, setisSignUpForm] = useState(false);
  const value = useSelector((store) => store.toggle.sideBar);
  const inputVisible = useSelector((store) => store.toggle.input);
  const codeVisible = useSelector((store) => store.toggle.visible);
  const dispatch = useDispatch();

  // this is for close the sign up page
  const handleCross = () => {
    dispatch(handleToggleCross());
  };

  // this is for referral code visible
  const handleCode = () => {
    dispatch(handleReferralCode());
  };

  const handleAuthentication = (e) => {
    const validate = validation(email.current.value, password.current.value);
    if (validate != null) return;
    if (!isSignUpForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
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
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };
  return (
    <>
      <div
        className={`fixed top-0  left-0 w-screen z-50 h-screen bg-gradient-to-b from-transparent to-black ${
          value ? "block" : "hidden"
        }`}
      >
        <div
          className={`h-screen w-[36%]  z-50  bg-white absolute right-0 py-8 pr-[150px] pl-9`}
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
                  placeholder="Phone Number"
                  pattern="[0-9]+"
                />
                <input
                  ref={name}
                  className=" border-2 w-full h-[70px] px-3 focus:outline-none"
                  type="name"
                  name="fl_name"
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

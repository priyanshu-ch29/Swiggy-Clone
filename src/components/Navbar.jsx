import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import { FaHouseUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { handleSignIn, handleToggle } from "../utils/toggleSlice";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/fiebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

function Navabar() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user; // if user login or sign up then user data is going to store in redux
        dispatch(addUser({ uid: uid, email: email, displayName: displayName })); // you can display its name on screen any use conditional rendering is user is login
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const dispatch = useDispatch();
  const val = useSelector((store) => store.toggle.value);
  const user = useSelector((store) => store.user);

  const handlingToggle = () => {
    dispatch(handleToggle());
  };

  const handle = () => {
    dispatch(handleSignIn());
  };

  const handleSignOut = () => {
    // to sign out user from website
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const cartItems = useSelector((store) => store.cart.items); // it will show the cartitems afterr user click on add button on any item
  // we subscribe the items from redux , initially items are empty after clicking on add items array will have item object in it

  return (
    <>
      <nav className="flex  items-center justify-around font-font-poppins shadow-lg py-3">
        <Link to={"/"}>
          <img className="w-[50px]" src={logo} alt="" />
        </Link>
        <ul className="flex items-center space-x-4 max-lg:hidden">
          <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
            <span className="m-1">
              <IoBagOutline />
            </span>
            Swiggy Corporate
          </li>
          <Link to="/SearchRestaurant">
            <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
              <span className="m-1">
                <IoSearch />
              </span>
              Search
            </li>
          </Link>
          <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
            <span className="m-1">
              <LuBadgePercent />
            </span>
            Offers
          </li>
          <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
            <span className="m-1">
              <IoBagOutline />
            </span>
            Help
          </li>
          {!user && ( // is user is not logged in show him sign in side bar
            <li
              onClick={handle}
              className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center"
            >
              <span className="m-1">
                <FaHouseUser />
              </span>
              Sign In
            </li>
          )}

          {user && ( // if user is logged in display his name
            <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
              Hey 🚀{user.displayName}
            </li>
          )}
          {user && (
            <li
              onClick={handleSignOut}
              className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center"
            >
              <span className="m-1">
                <FaUser />
              </span>
              Logout
            </li>
          )}

          <Link to="/Cart">
            <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
              <span className="m-1">
                <IoCart />
              </span>
              Cart({cartItems.length})
            </li>
          </Link>
        </ul>

        <IoMenu
          onClick={handlingToggle}
          className="hidden max-lg:block text-3xl hover:cursor-pointer"
        />
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`bg-gray-200 w-full h-[40vh] ${
          val === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex justify-center items-center flex-col space-x-4">
          <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
            <span className="m-1">
              <IoBagOutline />
            </span>
            Swiggy Corporate
          </li>
          <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
            <span className="m-1">
              <IoSearch />
            </span>
            Search
          </li>
          <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
            <span className="m-1">
              <LuBadgePercent />
            </span>
            Offers
          </li>
          <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
            <span className="m-1">
              <IoBagOutline />
            </span>
            Help
          </li>
          {!user && (
            <li
              onClick={handle}
              className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center"
            >
              <span className="m-1">
                <FaHouseUser />
              </span>
              Sign In
            </li>
          )}

          {user && (
            <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
              Hey 🚀{user.displayName}
            </li>
          )}
          {user && (
            <li
              onClick={handleSignOut}
              className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center"
            >
              <span className="m-1">
                <FaUser />
              </span>
              Logout
            </li>
          )}
          {user && (
            <Link to="/Cart">
              <li className="flex hover:cursor-pointer font-bold hover:text-orange-600 items-center">
                <span className="m-1">
                  <IoCart />
                </span>
                Cart({cartItems.length})
              </li>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}

export default Navabar;

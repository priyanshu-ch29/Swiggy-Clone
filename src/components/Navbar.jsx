import React from "react";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import { DiAptana } from "react-icons/di";
import { FaHouseUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { navLinks } from "../utils/constant";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { handleSignIn, handleToggle } from "../utils/toggleSlice";

function Navabar() {
  const dispatch = useDispatch();
  const val = useSelector((store) => store.toggle.value);

  const renderIcon = (IconName) => {
    if (IconName === "IoSearch") {
      return <IoSearch />;
    } else if (IconName === "LuBadgePercent") {
      return <LuBadgePercent />;
    } else if (IconName === "IoCart") {
      return <IoCart />;
    } else if (IconName === "DiAptana") {
      return <DiAptana />;
    } else if (IconName === "FaHouseUser") {
      return <FaHouseUser />;
    } else if (IconName === "IoBagOutline") {
      return <IoBagOutline />;
    } else {
      return null;
    }
  };

  const handlingToggle = () => {
    dispatch(handleToggle());
    console.log(val);
  };

  const handle = (id) => {
    dispatch(handleSignIn(id));
  };

  return (
    <>
      <nav className="flex  items-center justify-between px-[130px] font-font-poppins shadow-lg py-3">
        <img className="w-[50px]" src={logo} alt="" />
        <ul className="flex items-center space-x-4 max-lg:hidden">
          {navLinks.map((links, index) => {
            return (
              <>
                <li
                  onClick={() => handle(links.id)}
                  className="px-2 flex hover:cursor-pointer font-bold hover:text-orange-600"
                  key={links.id}
                >
                  <span className="m-1">{renderIcon(links.linkLogo)}</span>
                  {links.linkName}
                </li>
              </>
            );
          })}
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
          {navLinks.map((links) => {
            return (
              <>
                <li
                  className="px-2 mt-5 flex cursor-pointer font-bold hover:text-orange-600"
                  key={links.id}
                >
                  <span className="m-1">{renderIcon(links.linkLogo)}</span>
                  {links.linkName}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navabar;

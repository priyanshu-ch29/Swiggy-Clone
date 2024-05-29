import React from "react";
import appStore from "../assets/app_store.png";
import playStore from "../assets/play_store.png";
import swiggy from "../assets/swiggy.png";

const Footer = () => {
  return (
    <div>
      <div className=" h-[15vh] bg-gray-200 flex justify-center gap-11 items-center max-md:flex-col max-md:gap-1 ">
        <h1 className=" font-font-poppins font-semibold text-2xl max-sm:text-[15px]">
          For better experience,download the Swiggy app now
        </h1>
        <div className="flex gap-8">
          <img
            src={appStore}
            alt=""
            className=" w-[180px] h-[10vh] max-sm:w-[100px] max-sm:h-[5vh]"
          />
          <img
            src={playStore}
            alt=""
            className=" w-[180px] h-[10vh] max-sm:w-[100px] max-sm:h-[5vh]"
          />
        </div>
      </div>
      <div className=" bg-black text-white h-[35vh] flex justify-evenly p-5 font-semibold max-md:flex-col max-md:h-auto max-md:gap-10 max-md:font-light">
        <div>
          <img src={swiggy} alt="" className=" w-[100px]" />
          <h2 className="mt-4">© 2024 Bundl Technologies Pvt. Ltd</h2>
        </div>
        <div>
          <h1 className="text-2xl">Company</h1>
          <div className="flex flex-col mt-7 gap-2">
            <span>About</span>
            <span>Carrers</span>
            <span>Team</span>
            <span>Swiggy One</span>
            <span>Swiggy Instamart</span>
            <span>Swiggy Genie</span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl">Contact us</h1>
          <div className="flex flex-col mt-7 gap-2">
            <span>Help & Support</span>
            <span>Partner with us</span>
            <span>Team with us</span>
            <span>Privacy & policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
        <div>
          <h1 className="text-2xl">We deliver to: </h1>
          <div className="flex flex-col mt-7 gap-2">
            <span>Bengaluru</span>
            <span>Gurgaon</span>
            <span>Hyderabad</span>
            <span>Delhi</span>
            <span>Mumbai</span>
            <span>Pune</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

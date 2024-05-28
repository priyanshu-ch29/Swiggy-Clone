import React from "react";
import { useRouteError } from "react-router-dom";
import error from "../assets/error.png";
import { Link } from "react-router-dom";

const Error = () => {
  // if any error occured render this component
  const err = useRouteError();
  return (
    <div className="flex justify-center items-center flex-col  w-[100%] h-[100vh]">
      <img src={error} className="w-[250px] h-[300px]" alt="" />
      <h1 className="font-bold font-font-poppins mt-10 text-[24px]">
        We'll be back shortly
      </h1>
      <h2 className="mt-[30px] text-[18px]">
        We are fixing a temporary glitch. Sorry for the inconvenience.
      </h2>
      <Link to="/">
        <button className="m-6 bg-orange-500 text-white p-2 w-[100px]">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default Error;

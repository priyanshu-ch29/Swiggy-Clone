import React, { useState, useEffect } from "react";
import { WhatsMind } from "../utils/constant";
import Loader from "./Loader";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

function Product() {
  const [foodChoice, setFoodChoice] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFoodChoice(WhatsMind);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const nextSlide = () => {
    if (foodChoice.length - 7 == slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    setSlide(slide - 3);
  };

  return foodChoice.length === 0 ? (
    <Loader />
  ) : (
    <>
      <div className="flex justify-center items-center m-5">
        <div className="w-[80%] relative overflow-hidden">
          <div className="flex justify-between">
            <h2 className="text-[24px] font-font-poppins font-bold p-3">
              What's on your mind?
            </h2>
            <div className="text-[28px] flex p-6">
              <FaCircleArrowLeft
                onClick={prevSlide}
                className="mr-3 hover:cursor-pointer"
              />
              <FaCircleArrowRight
                onClick={nextSlide}
                className="hover:cursor-pointer"
              />
            </div>
          </div>
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${slide * 160}px)` }}
          >
            {foodChoice.map((item, index) => (
              <img
                key={index}
                className="w-[160px] my-2"
                src={item.foodImage}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <div className="line-after"></div>
    </>
  );
}

export default Product;

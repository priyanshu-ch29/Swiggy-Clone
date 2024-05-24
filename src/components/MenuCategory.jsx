import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import MenuItem from "./MenuItem";

const MenuCategory = (data) => {
  const [arrow, setArrow] = useState(false);
  return (
    <div className="m-5 p-3 w-[55rem] mx-auto border-t-[20px] ">
      <div className="flex justify-between">
        <h1 className="font-bold text-[18px]">
          {data.data.title}({data.data.itemCards.length})
        </h1>
        {arrow === false ? (
          <IoIosArrowDown
            onClick={() => setArrow(true)}
            className="text-[25px]"
          />
        ) : (
          <IoIosArrowUp
            onClick={() => setArrow(false)}
            className="text-[25px]"
          />
        )}
      </div>

      {arrow && <MenuItem item={data.data.itemCards} />}
    </div>
  );
};

export default MenuCategory;

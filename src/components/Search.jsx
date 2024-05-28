import React, { useState } from "react";
import useProductList from "../utils/useProductList";
import Product from ".//Product";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";

const Search = () => {
  const { card } = useProductList();
  const [searchText, setSearchText] = useState(" ");
  return (
    <>
      <div className="mt-10 text-center">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          placeholder="search for restaurants"
          className="border border-black w-[55%] p-3"
        />
      </div>
      <div className="w-[70%] mx-auto mt-5">
        <Product />
      </div>
      <div className="grid grid-cols-4 gap-1 w-[70%] justify-between justify-items-center mx-auto max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {card
          .filter((res) =>
            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((restaurant) => {
            return (
              <>
                <Link
                  key={restaurant.info.id}
                  to={`/SingleProduct/${restaurant?.info?.id}`}
                >
                  <SingleCard items={restaurant} />
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Search;

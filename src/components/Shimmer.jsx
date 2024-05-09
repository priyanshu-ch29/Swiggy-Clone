import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Shimmer() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-[65%] mx-auto mt-10 justify-items-center max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
        <Skeleton count={1} width={200} height={200} />
      </div>
    </>
  );
}

export default Shimmer;

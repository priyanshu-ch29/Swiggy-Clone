import React, { useState } from "react";
import { MetroSpinner } from "react-spinners-kit";

function Loader() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-[40vh] bg-slate-800 flex justify-center items-center flex-col">
      <div className="spinner">
        <MetroSpinner size={40} color="white" loading={loading} />
      </div>
      <h2 className=" text-gray-300 mt-5 text-3xl font-font-poppins font-bold">
        Looking for Great Food near you ...
      </h2>
    </div>
  );
}

export default Loader;

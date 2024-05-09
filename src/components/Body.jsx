import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import SignIn from "../components/SignIn";
import Card from "../components/Card";

function Body() {
  return (
    <div>
      <Navbar />
      <Product />
      <SignIn />
      <Card />
    </div>
  );
}

export default Body;

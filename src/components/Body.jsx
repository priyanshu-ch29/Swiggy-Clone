import React from "react";
import Product from "../components/Product";
import SignIn from "../components/SignIn";
import Card from "../components/Card";
import Footer from "./Footer";

function Body() {
  return (
    <div>
      <Product />
      <SignIn />
      <Card />
      <Footer />
    </div>
  );
}

export default Body;

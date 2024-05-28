import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useProductList from "../utils/useProductList";

function Card() {
  const { card } = useProductList(); // custom hook for fetching the card  data from swiggy api

  return card.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" m-4">
      <h2 className="text-[24px] font-font-poppins font-bold ml-[190px] max-md:ml-[120px] max-sm:ml-[60px] py-3">
        Restaurants with online food delivery
      </h2>
      <div className="grid grid-cols-4 gap-1 w-[80%] justify-center justify-items-center mx-auto max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {card.map((items) => (
          <Link
            key={items?.info?.id}
            to={`/SingleProduct/${items?.info?.id}`} // link this to specific id of product
          >
            <SingleCard items={items} />{" "}
            {/* passing the card items as prop ot single card so that it can show the card data */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;

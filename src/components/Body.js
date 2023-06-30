import RestaurantCard from "./RestaurantCard";
import resList from "../utils/sampleData";
import { useEffect, useState } from "react";

export const Body = () => {
  const [restaurantList, setRestrauntList] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9047751&lng=75.74886409999999&page_type=DESKTOP_WEB_LISTING");
    let json = data.json();
    console.log(json);
  }
  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating >= 4.2
            );
            setRestrauntList(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setRestrauntList(resList);
          }}
        >
          All Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

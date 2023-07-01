import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer'
import resList from "../utils/sampleData";
import { useEffect, useState } from "react";

export const Body = () => {
  const [restaurantList, setRestrauntList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    let json = await data.json();
    console.log(json);
    // json?.data?.cards[2]?.data?.data?.cards
    setRestrauntList(json?.data?.cards[2]?.data?.data?.cards);
  }

  return restaurantList.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating >= 4.3
            );
            setRestrauntList(filteredList);
          }}
        >
          Top Rated restaurant
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

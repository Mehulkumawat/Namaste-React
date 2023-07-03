import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer'
import { useEffect, useState } from "react";
import Search from "./Search";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  console.log("bdy");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    let json = await data.json();
    console.log(json);
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  return restaurantList.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <Search res={restaurantList} setFilteredRestaurant={setFilteredRestaurant} />
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating >= 4.3
            );
            
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

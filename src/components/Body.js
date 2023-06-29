import RestaurantCard from "./RestaurantCard";
import resList from "../utils/sampleData";
import { useState } from "react";

export const Body = () => {
  const [restaurantList, setRestrauntList] = useState(resList
    // {
    //   data: {
    //     id: "179815",
    //     name: "The Betel Leaf Co.",
    //     cloudinaryImageId: "rbsaa9fzzoir9dl2npgk",
    //     cuisines: ["Paan", "Desserts", "Indian", "Ice Cream"],
    //     deliveryTime: 18,
    //     avgRating: "4.4",
    //   },
    // },
    // {
    //   data: {
    //     id: "179816",
    //     name: "res 2",
    //     cloudinaryImageId: "rbsaa9fzzoir9dl2npgk",
    //     cuisines: ["Paan", "Desserts", "Indian", "Ice Cream"],
    //     deliveryTime: 18,
    //     avgRating: "4.5",
    //   },
    // },
    // {
    //   data: {
    //     id: "179817",
    //     name: "res 3",
    //     cloudinaryImageId: "rbsaa9fzzoir9dl2npgk",
    //     cuisines: ["Paan", "Desserts", "Indian", "Ice Cream"],
    //     deliveryTime: 18,
    //     avgRating: "4.7",
    //   },
    // },
  );
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

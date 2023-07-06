import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=337335&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
    console.log(itemCards);
  };

  const { name, cuisines, avgRating, sla, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="itemcards">
        {itemCards.map((res) => (
          <div className="itemcard" key={res?.card?.info?.id}>
            <div className="item-detail">
              <div className="item-name">{res?.card?.info?.name}</div>
              <div className="item-price">{res?.card?.info?.price / 100}</div>
            </div>
            <div className="item-img">
              <img src={CDN_URL + res?.card?.info?.imageId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

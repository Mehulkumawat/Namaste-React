import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API} from "../utils/constants";
import { StarFilled, PlusSquareFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    const {resId} = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API+resId
    );
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
    console.log(itemCards);
  };

  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwoMessage,
    areaName,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="menu-resinfo">
        <div className="res-info">
          <span>{name}</span>
          <div>
            {cuisines.join(", ")}
          </div>
          <div>
            {areaName}, {sla.lastMileTravelString}
          </div>
        </div>
        <div className="res-rating">
          <div>{avgRating}</div>
          <div>{totalRatingsString}</div>
        </div>
      </div>
      <div className="res-time">
        <div className="deliverytime">{sla.maxDeliveryTime} MINS</div>
        <div className="res-cost">{costForTwoMessage}</div>
      </div>
      <div className="itemcards">
        {itemCards.map((res) => (
          <div className="itemcard" key={res?.card?.info?.id}>
            <div className="item-detail">
              <div className="item-type">
                <span>
                  {res?.card?.info?.itemAttribute.vegClassifier === "VEG" ? (
                    <PlusSquareFilled className="icon-veg" />
                  ) : (
                    <PlusSquareFilled className="icon-nonveg" />
                  )}{" "}
                </span>
                {res?.card?.info?.isBestseller && (
                  <span className="bestseller">
                    {" "}
                    <StarFilled className="icon-best" /> Best Seller
                  </span>
                )}
              </div>
              <div className="item-name">{res?.card?.info?.name}</div>
              <div className="item-price">
                Rs {res?.card?.info?.price / 100}
              </div>
              <div className="item-des">{res?.card?.info?.description}</div>
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

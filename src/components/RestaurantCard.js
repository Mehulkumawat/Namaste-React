import {CDN_URL} from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, deliveryTime, cloudinaryImageId, avgRating} = resData.data;
    return (
      <div className="res-card">
        <div className="image">
          <img
            className="res-img"
            alt={resData.data.name}
            src={
                CDN_URL +
              cloudinaryImageId
            }
          />
        </div>
        <div className="res-type">
          <h3 className="res-name">{name}</h3>
          <h6 className="res-cuisine">{cuisines.join(", ")}</h6>
        </div>
        <div className="res-detail">
          <h5 className="res-rating">{avgRating}</h5>
          <h5 className="delivery-time">{deliveryTime} Minutes</h5>
        </div>
      </div>
    );
  };

  export default RestaurantCard;
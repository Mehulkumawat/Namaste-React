import RestaurantCard from './RestaurantCard';
import resList from '../utils/sampleData';


export const Body = () => {
    return (
      <div className="body">
        <div className="Filter">
          <button className='filter-btn'>
            Top Rated restaurant
          </button>
        </div>
        <div className="res-container">
          {resList.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>))}
        </div>
      </div>
    );
  };

  export default Body;
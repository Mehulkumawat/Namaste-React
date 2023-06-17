import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Assets/logo-trans.png";

/**
 * Header
 *  -Logo
 *  -Nav Items
 *
 * Body
 *  -Search
 *  -restro Container
 *      -Restro card
 *
 * Footer
 *  -copyright
 *  -links
 *  -Address
 *  -contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
        {/* <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgf8RlcJGMxRvmAYnx_DWa69f1t5jfr30W6g&usqp=CAU"/> */}
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="Meghana Foods"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/lqfwaviwaeozczczipai"
      />
      <div className="res-type">

      <h3 className="res-name">Meghana Foods</h3>
      <h6 className="res-cuisine">Biryani, North Indian</h6>
      </div>
      <div className="res-detail">
        <h5 className="res-rating">4.4</h5>
        <h5 className="delivery-time">38 min</h5>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Header
            Body
            footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

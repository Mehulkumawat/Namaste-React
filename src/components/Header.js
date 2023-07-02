import logo from "../../Assets/logo-trans.png";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          <button className="btn-auth" onClick={() => {
            isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
          }}>
            {isLoggedIn}
          </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  
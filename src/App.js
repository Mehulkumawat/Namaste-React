import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
      {/* Header
            Body
            footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

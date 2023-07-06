import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
      <Outlet/>   
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/Login",
  //   element: <Login/>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

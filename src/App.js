import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Help from "./component/Help";
import RestaurantDetails from "./component/RestaurantDetails";


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    errorElement: <ErrorPage/>,
    children : [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantDetails/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

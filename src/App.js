import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
// import Contact from "./component/Contact";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import RestaurantDetails from "./component/RestaurantDetails";
import Signup from "./component/Signup";
import { AuthContextProvider } from "./utils/context/AuthContext";
import SignIn from "./component/SignIn";

const Help = lazy(()=> import('./component/Help'));
const Contact = lazy(()=> import('./component/Contact'))


const App = () => {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </AuthContextProvider>
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
        path: '/instamart',
        element: (
          <Suspense fallback={
            <div className="container">
              <h1>Loading...</h1>
            </div>
          }>
            <Contact/>
          </Suspense>
        )
      },
      {
        path: '/help',
        element: (
          <Suspense fallback={
            <div className="container">
              <h1>Loading...</h1>
            </div>
          }>
            <Help/>
          </Suspense>
        )
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantDetails/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/signin',
        element: <SignIn/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

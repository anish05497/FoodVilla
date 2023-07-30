import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { swiggy_api_URL } from "../utils/constant";
import useResData from "../hooks/useResData";

function filterdata(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  // const [allRestaurant, setAllRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(swiggy_api_URL);

  const searchData = (searchText, restaurant) => {
    if (searchText !== "") {
      const data = filterdata(searchText, restaurant);
      setFilteredRestaurant(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any result for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurant(restaurant);
    }
  };

  

  // useEffect(() => {
  //   getRestaurant();
  // }, []);

  // async function getRestaurant() {
  //   try {
  //     const data = await fetch(
  //       "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const json = await data.json();
  //     setAllRestaurant(json?.data?.cards?.[2]?.data?.data?.cards ?? []);
  //     setFilteredRestaurant(json?.data?.cards?.[2]?.data?.data?.cards ?? []);
  //     window.scrollTo(0, 0)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="container">
      <div className="flex justify-center min-w-[500px] mob:min-w-[375px] h-[100px] mob:h-[50px] items-center m-auto">
        <input
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          className="outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray mr-2"
          onChange={(e) => {
            setSearchText(e.target.value);
            searchData(e.target.value, allRestaurants);
          }}
        />
        <button
          className="btn btn--primary basis-[60px] mob:basis-[50px] mob:text-xs"
          onClick={() => {
            filterdata(searchText, allRestaurants);
            // setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      
      {errorMessage && <div className="text-center font-bold text-xl">{errorMessage}</div>}
      

      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list flex flex-wrap gap-5 justify-center">
          {(filteredRestaurant === null ? FilterRes : filteredRestaurant).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  className="basis-[250px] p-2.5 mb-2.5 mob:basis-[150px]"
                  key={restaurant?.info?.id}
                >
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Body;

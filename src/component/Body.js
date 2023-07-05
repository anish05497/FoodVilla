import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();
  

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurant(json?.data?.cards?.[2]?.data?.data?.cards);
  }

  return (
    <div className="container">
      <div>
        <input type="text" placeholder="Search for restaurants" value={searchText}/>
        <button>Search</button>
      </div>

      {allRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list flex flex-wrap gap-5 justify-center">
          {allRestaurant.map((restaurant) => {
            return (
              <div className="basis-[250px] p-2.5 mb-2.5 mob:basis-[150px]">
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;

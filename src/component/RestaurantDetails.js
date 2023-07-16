import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_TYPE_KEY } from "../utils/constant";
import { IMG_CDN_URL } from "../utils/constant";

const RestaurantDetails = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
          resId
      );
      const res_data = await response.json();
      // console.log(res_data);
      const restaurantData =
        res_data?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;

      setRestaurant(restaurantData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="container">
      {console.log(restaurant)}
      <div className="flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
        <img className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]" src={ IMG_CDN_URL  + restaurant?.cloudinaryImageId } alt={restaurant?.name}/>
        <div className="flex flex-col basis-[540px] m-5 ">
          <h2 className="text-3xl max-w-[538px] font-semibold">{restaurant?.name}</h2>
          <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">{restaurant?.cuisines.join(", ")}</p>
          <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
            <div className="flex items-center px-1 py-0 gap-1">
              ⭐<span>{restaurant?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{restaurant?.locality}</div>
            <div>|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;

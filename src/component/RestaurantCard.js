import { IMG_CDN_URL } from "../utils/constant";
// import {AiFillStar} from 'react-icons/ai';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  sla,
  costForTwo,
  avgRating,
}) => {
  const buttonStyle = {
    backgroundColor:
      avgRating == "--"
        ? "#fff"
        : parseFloat(avgRating) < 4.0
        ? "#db7c38"
        : "#48c479",
    color: isNaN(avgRating) ? "#535665" : "#fff",
  };

  return (
    <div className="basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 hover:shadow cursor-pointer">
      <div className="relative w-full ">
        <img
          className="w-full mob:w-[130px]"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="">
        <h6 className="text-base font-bold w-3/5 tracking-normal">{name}</h6>
        <p className="text-gray-dark text-xs w-4/5 overflow-hidden h-[32px]">
          {cuisines.join(", ")}
        </p>
        <div className="flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start">
          <div
            className="flex items-center h-5 w-11 gap-1 py-0 px-1"
            style={buttonStyle}
          >
            <span>⭐ {avgRating}</span>
          </div>
          <div>•</div>
          <div>{sla?.lastMileTravelString ?? "2.0 km"}</div>
          <div>•</div>
          <div>{costForTwo ?? "₹200 for two"}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props?.restaurant?.info;

  return (
    <div className="w-75 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-102">
      <img
        className="w-full h-48 object-cover"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 py-1">⭐ {avgRating}</p>
        <p className="text-sm text-gray-600">
          {cuisines.slice(0, 4).join(" ,")}
        </p>
        <p className="text-gray-500">{sla.slaString}</p>
      </div>
    </div>
  );
};

export const PromotedRestaurantcard = (RestaurantCard) => {
  return (props) => {
    console.log(props);

    return (
      <div className="relative">
        <label className="absolute m-2 p-1 bg-black text-white text-sm rounded-lg ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard; 
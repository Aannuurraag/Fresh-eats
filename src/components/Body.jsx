import { useEffect, useContext } from "react";
import { useState } from "react";
import RestaurantCard, { PromotedRestaurantcard } from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlinestatus from "../utils/useOnlinestatus";
import { RESTAURANT_API } from "../utils/constant";

const Body = () => {
  const [Restaurantdata, setRestaurantdata] = useState([]);
  const [filteredRestaurant, setfilterREstaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = PromotedRestaurantcard(RestaurantCard);

  useEffect(() => {
    Getrestaurant();
  }, []);

  const Getrestaurant = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
  
    setRestaurantdata(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterREstaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinestatus = useOnlinestatus();

  if (onlinestatus === false) {
    return (
      <h2 className="text-center text-red-500 text-lg mt-10">
        Seeems your internet connection isnt working properly
      </h2>
    );
  }

  return Restaurantdata.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex gap-2">
          <input
            className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition"
            onClick={() => {
              const filtered = Restaurantdata.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterREstaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition"
          onClick={() => {
            const Bestrestaurant = Restaurantdata.filter(
              (res) => res.info.avgRating > 4
            );
            setfilterREstaurant(Bestrestaurant);
          }}
        >
          Best Restaurant
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((res) => {
          return (
            <Link key={res.info.id} to={`/restaurant/${res?.info?.id}`}>
              {res?.info?.isOpen ? (
                <RestaurantCardPromoted restaurant={res} />
              ) : (
                <RestaurantCard restaurant={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

import Shimmer from "./Shimmer";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurantmenu = () => {
  const { resId } = useParams();
  const menuInfo = useRestaurantmenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (menuInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuInfo?.cards[2]?.card?.card?.info;

  let { itemCards = [] } =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  //console.log( menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const Categories =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(Categories);

  return (
    <div className="text-center">
      <h2 className=" font-bold my-4 text-2xl">{name}</h2>
      <p className="font-bold text-lg">
        {cuisines.join(" ,")}-{costForTwoMessage}
      </p>
      {Categories.map((category,index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index===showIndex ? true :false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restaurantmenu;

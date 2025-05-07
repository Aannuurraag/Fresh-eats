import { useState } from "react";
import Itemlist from "./Itemlist";
const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  
    const HandleClick=()=>{
    setShowIndex()
    }
  return (
    <div>
      <div className="w-6/12 mx-auto my-5 bg-orange-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={HandleClick}>
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
       { showItems && <Itemlist items={data.itemCards}/> } 
      </div>
    </div>
  );
};

export default RestaurantCategory;

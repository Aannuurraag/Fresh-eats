import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Itemlist = ({ items }) => {

  const dispatch=useDispatch()
 // console.log(items);

 const HandleClick=(item)=>{
   dispatch(addItem(item))
 }

  return (
    <div>
      {items.map((item) => (
        <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
          <div className="w-10/12">
            <div className="py-2 font-medium">
              <span>{item.card.info.name}</span>
              &nbsp;
              <span>
                &#8377;-
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-2/12 p-4 relative">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              className="w-full"
            />

            <button onClick={()=>HandleClick(item)} className="absolute bottom-2 right-2 bg-black text-white text-sm p-0.5 rounded shadow">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;

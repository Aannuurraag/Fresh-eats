import { useDispatch } from "react-redux";
import Itemlist from "./Itemlist";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const ClearCartHandle = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" text-center m-4 p-3">
      <h2 className="text-xl font-bold">Cart Items</h2>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg "
        onClick={ClearCartHandle}
      >
        clear cart
      </button>
      {cartItems.length === 0 && (
        <h1>add some food in your cart first..... </h1>
      )}
      <div className="w-6/12 m-auto">
        <Itemlist items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

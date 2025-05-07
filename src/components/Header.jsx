import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const cartItems=useSelector((store)=>store.cart.items)
  const [reactbtn, setreactbtn] = useState("Login");
  const onlinestatus=useOnlinestatus()
  return (
    <header className="bg-orange-100 shadow-md sticky top-0 z-50">
    <div className="px-5 py-3 flex justify-between">
      <div className="flex items-center gap-3">
        <img
          className="w-[100px] h-[100] rounded-full"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="nav-container">
        <nav className="navigation">
          <ul className="flex space-x-4 text-gray-700 font-medium my-6">
            <li>Online Status: {onlinestatus?"✅":"🔴"}</li>
            <li>
              <Link to={"/Home"} className="hover:text-red-500 transition">Home</Link> 
            </li>
            <li>
              <Link to={"/About"}>About</Link>
            </li>
            <li>
              <Link to={"/Contactus"}>Contact us</Link>
            </li>
            <li className="font-bold text-lg">
              <Link to={"/cart"}>Cart-items-{(cartItems.length)}</Link>
            </li>
          
            <button
              onClick={() => {
                return reactbtn === "Login"
                  ? setreactbtn("Logout")
                  : setreactbtn("Login");
              }}
              className="bg-orange-400 text-white px-4 py-1 rounded hover:bg-orange-500 transition"
            >
              {reactbtn}
            </button>
          </ul>
        </nav>
      </div>
    </div>
    </header>
  );
};

export default Header;

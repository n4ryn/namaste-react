import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
  // State and variables
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex sticky top-0 py-3 justify-between items-center px-5 drop-shadow-lg  mb-8 bg-white z-10">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-12 mr-4" src={LOGO_URL} />
        </Link>
        <div>{onlineStatus ? "🟢" : "🔴"}</div>
      </div>

      <div>
        <ul className="flex justify-center items-center text-sm font-bold">
          <li className="ml-6 text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6 text-orange-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="ml-6 text-orange-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="ml-6 text-orange-400">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="ml-6 text-orange-400 text-xl">
            <HiShoppingCart />
          </li>
          <button
            className="ml-6  bg-orange-400 text-white w-24 px-6 py-2 rounded-md"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

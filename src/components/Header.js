import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  // State and variables
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header render");

  // // If no dependency array => useEffect is called on every render
  // useEffect(() => {
  //   console.log("useEffect called without dependency array");
  // });

  // // If empty dependency array => useEffect is called on initial render(just once)
  // useEffect(() => {
  //   console.log("useEffect called with empty dependency array");
  // }, []);

  // // If dependency array is [btnName] => useEffect is called everytime btnName updated
  // useEffect(() => {
  //   console.log("useEffect called with [btnName] as dependency array");
  // }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
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

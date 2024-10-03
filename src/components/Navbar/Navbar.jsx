import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <p className="logo">Food Kraft.</p>
      </Link>
      {pathname === "/" ? (
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            contact us
          </a>
        </ul>
      ) : (
        <></>
      )}
      <div className="navbar-right">
        <div className="navbar-search_icon">
          <Link to="/cart">
            <FaBasketShopping
              style={{ fontSize: "1.8rem", color: "#1b4965" }}
            />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            {/* <img src={assets.profile_icon} alt="" /> */}
            <FaUserCircle style={{ fontSize: "1.8rem", marginTop: "1.5px" }} />
            <ul className="nav-profile-dropdown">
              <li
                onClick={() => {
                  navigate("/myorders");
                }}
              >
                {/* <img src={assets.bag_icon} alt="" /> */}
                <MdOutlineShoppingCart style={{ color: "#7072f0" }} />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logoutHandler}>
                {/* <img src={assets.logout_icon} alt="" /> */}
                <LuLogOut style={{ color: "#7072f0" }} />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

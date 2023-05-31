import React, { useEffect } from "react";
import "./navbar.css";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPinLock } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../LoginSignup/myform.css";
import RegLogin from "./RegLogin";

const Navbar = () => {
  const [currLocation, setCurrLocation] = useState({});

  let hrs = new Date().getHours();
  let min = 10,
    max = 45;
  let [rand, setRand] = useState(0);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    setRand(Math.floor(Math.random() * (max - min)) + min);
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };

  return (
    <>
      <div className="navbar_cont">
        <div className="logo_cont">
          <img
            src="https://thelogofinder.com/wp-content/uploads/2022/08/Blinkit.svg"
            className="logo"
          ></img>
        </div>
        <div className="links_cont">
          <div id="location">
            <div className="div1">
              {hrs >= 0 && hrs < 6
                ? "Temporarily Closed"
                : `Delivery In ${rand} minutes`}
              {hrs >= 0 && hrs < 6 ? (
                <FontAwesomeIcon
                  className="close_icon"
                  icon={faLocationPinLock}
                />
              ) : (
                <FontAwesomeIcon icon={faLocationDot} />
              )}
            </div>
            <div className="div2">
              {currLocation.city}, {currLocation.region}, {currLocation.country}
            </div>
            <FontAwesomeIcon icon="fa-solid fa-lock" />
          </div>
          <div id="search-box">
            <div id="blank">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
            </div>
            <input
              type="text"
              className="inputer"
              placeholder="Out of Groceries? Type them in..."
              name="search"
            />
          </div>
          <RegLogin />
          <FontAwesomeIcon icon={faCircleUser} className="face-icon" />
          <div id="my-cart">
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
            <button>Cart</button>
          </div>
          <FontAwesomeIcon icon={faCartShopping} className="mycart-icon" />
        </div>
        <div id="search-box2">
          <div id="blank2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="search-icon2"
            />
          </div>
          <input
            type="text"
            className="inputer2"
            placeholder="Out of Groceries? Type them in..."
            name="search"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

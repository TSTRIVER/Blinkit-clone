import React, { useEffect } from "react";
import "./navbar.css";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPinLock } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../LoginSignup/myform.css";
import RegLogin from "./RegLogin";
import AddMark from "../Cart/AddMark";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { get_time } from "../../Store/cart_slice";

const Navbar = () => {
  const [currLocation, setCurrLocation] = useState({});
  const { isAuthenticated, user } = useSelector((state) => state?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let hrs = new Date().getHours();
  let min = 10,
    max = 30;
  let [rand, setRand] = useState(0);

  useEffect(() => {
    setRand(Math.floor(Math.random() * (max - min)) + min);
    getLocation();
  }, []);

  useEffect(() => {
    dispatch(get_time(rand));
  }, [dispatch, rand]);

  const getLocation = async () => {
    try {
      const location = await axios.get("https://ipapi.co/json");
      setCurrLocation(location?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const accessCart = () => {
    if (isAuthenticated) {
      navigate("/cart", { replace: true });
      window.location.reload();
    } else {
      toast.error("Please Login/Signup First", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  let x = window.innerWidth;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className="navbar_cont">
        <div className="logo_cont">
          <img
            src="https://thelogofinder.com/wp-content/uploads/2022/08/Blinkit.svg"
            className="logo"
            alt="blinkit-logo"
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
              {currLocation?.city}, {currLocation?.region},{" "}
              {currLocation?.country_name}
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
          {user && user?.role !== "Admin" && (
            <div id="my-cart">
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
              <AddMark />
              <button onClick={() => accessCart()}>Cart</button>
            </div>
          )}
          {x <= 1040 ? (
            <button onClick={() => accessCart()} className="carter-btn">
              <FontAwesomeIcon icon={faCartShopping} className="mycart-icon" />
            </button>
          ) : (
            ""
          )}
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

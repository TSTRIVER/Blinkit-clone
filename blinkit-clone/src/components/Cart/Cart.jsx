import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import Empty from "./Empty";

const Cart = () => {
  const [cartPop, setCartPop] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { time, items } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.product);

  const [cart_arr, setCart_arr] = useState(Array.from({ length: 17 }, () => 0));

  let [total, setTotal] = useState(0);

  let hrs = new Date().getHours();

  useEffect(() => {
    let item = localStorage.getItem("add_arr");
    if (item === null) {
      localStorage.setItem("add_arr", JSON.stringify(cart_arr));
    } else {
      let parse_arr = JSON.parse(localStorage.getItem("add_arr"));
      setCart_arr(parse_arr);

      let cnt = 0;
      for (let i = 0; i < products.length; i++) {
        cnt += products[i].price * cart_arr[i];
      }
      setTotal(cnt);
    }
  }, [products]);

  const closeCart = () => {
    setCartPop(false);
    navigate("/");
  };

  const increment = (ind) => {
    setTotal((prevTotal) => prevTotal + products[ind].price);
    setCart_arr((prevArr) => {
      const newArr = [...prevArr];
      newArr[ind] = newArr[ind] + 1;
      localStorage.setItem("add_arr", JSON.stringify(newArr));
      return newArr;
    });
  };
  const decrement = (ind) => {
    if (cart_arr[ind] >= 1) {
      setTotal((prevTotal) => prevTotal - products[ind].price);
      setCart_arr((prevArr) => {
        const newArr = [...prevArr];
        newArr[ind] = newArr[ind] - 1;
        localStorage.setItem("add_arr", JSON.stringify(newArr));
        return newArr;
      });
    }
  };

  const proceed = () => {
      navigate("/address");
  }

  return (
    <>
      {cartPop && (
        <div className="overlay-cart">
          <div className="popup-cart">
            <div id="my-cart">My Cart</div>
            <button className="closebtn" onClick={() => closeCart()}>
              X
            </button>
            <div id="del-time">
              <FontAwesomeIcon
                icon={faClock}
                style={{ fontSize: "2vw", color: "green" }}
              />

              {hrs > 0 && hrs < 6
                ? "Temporarily Unavailable"
                : `Free Delivery in ${time} minutes`}
              <p>{items} items</p>
            </div>
            <div id="cards-cont">
              {items === 0 ? (
                <Empty />
              ) : (
                products.map(
                  (ele, ind) =>
                    cart_arr[ind] !== 0 && (
                      <div className="cart-cards">
                        <div className="imager">
                          <img
                            src={ele.image}
                            style={{ width: "60%", height: "70%" }}
                          />
                        </div>
                        <div className="detailer">
                          <p>{ele.name}</p>
                          <p>{ele.quantity}</p>
                          <h4>₹{ele.price}</h4>
                        </div>
                        <div className="handler">
                          <div className="cart-handler">
                            <button
                              className="inc-dec"
                              onClick={() => decrement(ind)}
                            >
                              -
                            </button>
                            <button className="inc-dec">{cart_arr[ind]}</button>
                            <button
                              className="inc-dec"
                              onClick={() => increment(ind)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                )
              )}
            </div>
            {items !== 0 && (
              <div id="place-order-cont">
                <div style={{ marginLeft: "1vw", cursor: "pointer" }}>
                  <div id="total">₹{total}</div>
                  <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>Total</p>
                </div>
                <button
                  style={{
                    marginRight: "1vw",
                    fontWeight: "lighter",
                    cursor: "pointer",
                    border: "none",
                    fontFamily: "'Poppins','sans-serif'",
                    background:"none",
                    color: "white",
                    fontSize: "1vw"
                  }} onClick={()=>proceed()}
                >
                  Proceed <FontAwesomeIcon icon={faGreaterThan} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

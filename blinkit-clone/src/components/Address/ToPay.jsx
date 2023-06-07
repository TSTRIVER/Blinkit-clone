import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./address.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong,faClock,faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const ToPay = () => {
  const navigate = useNavigate();
  const { time, items } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.product);
  const {user} = useSelector((state)=>state.user);

  const [toPayPop, setToPayPop] = useState(true);
  const goback = () => {
    navigate("/address");
  };

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

  let curr_obj = JSON.parse(localStorage.getItem("curr_address"));

  const checkoutHandler = async(amount) => {

    const {data:{key}} = await axios.get("http://localhost:4000/api/v1/getkey");
     const {data:{order}} = await axios.post(`/api/v1/checkout`,{amount});

     let callbackURL = `http://localhost:4000/api/v1/paymentVerification?amount_paid=${encodeURIComponent(order.amount)}&deliver_to=${encodeURIComponent(JSON.stringify(curr_obj))}&user_id=${encodeURIComponent(user._id)}`

     const options = {
      key, // Enter the Key ID generated from the Dashboard
      "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Blinkit Ventures",
      "description": "Cart Subtotal",
      "image": "https://blinkit.com/careers/sites/default/files/2023-05/ezgif.com-webp-to-png.png",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": callbackURL,
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  const razor = new window.Razorpay(options);
   razor.open();
}


  return (
    <>
      {toPayPop && (
        <div className="overlay-address">
          <div className="popup-address">
            <div id="my-address">Confirm Order</div>
            <button className="back-btn" onClick={() => goback()}>
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </button>
            <div id="del-time">
              <FontAwesomeIcon
                icon={faClock}
                style={{ fontSize: "2vw", color: "green" }}
              />

              {hrs > 0 && hrs < 6
                ? "Temporarily Unavailable"
                : `Delivering to ${curr_obj.receiver} at ${curr_obj.set_as} in ${time} minutes`}
              <p>{items} items</p>
            </div>
            <div id="cards-cont">
              {(
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
                            <button className="inc-dec">Qty. {cart_arr[ind]}</button>
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
                <div style={{ marginLeft: "1vw", cursor: "pointer" }}>
                  <div id="total">{total > 100 ? "FREE" : `₹${25}`}</div>
                  <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>Delivery Charge</p>
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
                  }} onClick={()=>checkoutHandler(total)}
                >
                  Proceed To Pay <FontAwesomeIcon icon={faGreaterThan} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ToPay;

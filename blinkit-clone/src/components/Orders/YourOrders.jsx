import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateStatus } from "../../Store/orders_slice";

const YourOrders = () => {
  let { user } = useSelector((state) => state?.user);
  let { orders } = useSelector((state) => state?.order);
  const dispatch = useDispatch();

  const location = useLocation();
  let pathParts = location.pathname.split("/");
  let user_name = decodeURIComponent(pathParts[2]);
  let user_id = decodeURIComponent(pathParts[3]);

  const [status, setStatus] = useState("");
  const [pop, setPop] = useState(false);
  const [order_id, setOrder_id] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStatus(user_id, order_id, status));
    setPop(false);
    setStatus("");
  };

  return (
    <>
      <h1 className="order-h1">{user_name}'s Orders</h1>
      <div className="datagrid">
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Date</th>
              <th>Amount Paid</th>
              <th>Delivery To</th>
              <th>Status</th>
              {user.role === "Admin" && <th>Edit</th>}
            </tr>
          </thead>
          <tbody>
            {orders.map((ele, index) => (
              <tr className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td style={{ overflowX: "auto" }}>{ele?.razorpay_order_id}</td>
                <td>{ele.created_at}</td>
                <td>₹{ele.amount_paid / 100}</td>
                <td style={{ overflowX: "auto" }}>{ele?.deliver_to?.flat}</td>

                {ele.status === "Placed" && (
                  <td style={{ color: "gray" }}>{ele?.status}</td>
                )}
                {ele.status === "Dispatched" && (
                  <td style={{ color: "orange" }}>{ele?.status}</td>
                )}
                {ele.status === "Shipped" && (
                  <td style={{ color: "yellowgreen" }}>{ele?.status}</td>
                )}
                {ele.status === "Delivered" && (
                  <td style={{ color: "darkgreen" }}>{ele?.status}</td>
                )}

                {user.role === "Admin" && (
                  <td>
                    <button
                      style={{
                        color: "skyblue",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setPop(true);
                        setOrder_id(ele?.razorpay_order_id);
                      }}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pop && (
        <div className="overlay">
          <div className="popup-one">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Status"
                required
                className="inputField"
              />
              <button type="submit" className="submitButton">
                Submit
              </button>
            </form>
            <button onClick={() => setPop(false)} className="closeButton">
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default YourOrders;

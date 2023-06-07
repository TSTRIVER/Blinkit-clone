import React from "react";
import { useState } from "react";
import "./datagrid.css";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { focus_product } from "../../Store/product_slice";
import { deleteProduct } from "../../Store/product_slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Datagrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [popOpen, setPopOpen] = useState(false);
  let [activeBtn3, setActiveBtn3] = useState(true);
  let [activeBtn4, setActiveBtn4] = useState(false);

  const closePop = () => {
    setPopOpen(false);
  };

  const btn3handle = () => {
    setActiveBtn3(true);
    setActiveBtn4(false);
  };
  const btn4handle = () => {
    setActiveBtn3(false);
    setActiveBtn4(true);
  };

  const { products } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  const editHandle = (index) => {
    setPopOpen(true);
    setActiveBtn4(true);
    setActiveBtn3(false);
    dispatch(focus_product(products[index]));
  };

  const deleteHandle = (index) => {
    let id = products[index]._id;
    dispatch(deleteProduct(id));
    toast.success("Product Deleted Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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
      <div className="datagrid">
        <table>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete/Edit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((ele, index) => (
              <tr
                key={ele._id}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td style={{ overflowX: "auto" }}>{ele._id}</td>
                <td>{ele.name}</td>
                <td>{ele.price}</td>
                <td>{ele.quantity}</td>
                <td>
                  <button
                    onClick={() => deleteHandle(index)}
                    style={{
                      marginRight: "1vw",
                      color: "red",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    onClick={() => editHandle(index)}
                    style={{
                      color: "skyblue",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="submitButton" onClick={() => setPopOpen(true)}>
        Add/Edit Product
      </button>
      <button
        className="submitButton"
        style={{ float: "right", marginRight: "10vw" }}
        onClick={() => navigate(`/dashboard/users/${user._id}`)}
      >
        Manage Orders
      </button>
      {popOpen && (
        <div className="overlay">
          <div className="popup">
            <button
              onClick={() => btn3handle()}
              className={activeBtn3 ? "firstButton btn-active" : "firstButton"}
            >
              Create Product
            </button>
            <button
              onClick={() => btn4handle()}
              className={
                activeBtn4 ? "secondButton btn-active" : "secondButton"
              }
            >
              Update Product
            </button>

            <button onClick={closePop} className="closeButton">
              X
            </button>
            {activeBtn3 ? (
              <CreateProduct message={closePop} />
            ) : (
              <UpdateProduct message={closePop} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Datagrid;

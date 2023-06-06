import React, { useState } from "react";
import "../LoginSignup/myform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../Store/product_slice";

const CreateProduct = (props) => {
  const dispatch = useDispatch();

  const [productname, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imagelink, setImagelink] = useState("");

  const handleSubmit3 = (e) => {
    e.preventDefault();
    dispatch(createProduct(productname, price, quantity, imagelink ));
    toast.success("Product Created Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    props.message();
    setProductName("");
    setPrice("");
    setQuantity("");
    setImagelink("");
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
      <form onSubmit={handleSubmit3}>
        <label htmlFor="text">Product Name:</label>
        <input
          type="text"
          id="productname"
          value={productname}
          onChange={(e) => setProductName(e.target.value)}
          className="inputField"
          name="productname"
        />

        <label htmlFor="number">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="inputField"
          name="price"
        />

        <label htmlFor="text">Quantity:</label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="inputField"
          name="quantity"
        />

        <label htmlFor="text">Image Link:</label>
        <input
          type="text"
          id="imagelink"
          value={imagelink}
          onChange={(e) => setImagelink(e.target.value)}
          className="inputField"
          name="imagelink"
        />

        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateProduct;

/*
   image:
      "https://www.bigbasket.com/media/uploads/p/xxl/104615_9-amul-processed-cheese-cubes.jpg",
    name: "Amul Cubes",
    quant: "200g",
    price: "₹127",
*/

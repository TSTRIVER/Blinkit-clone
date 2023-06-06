import React, { useState } from "react";
import "../LoginSignup/myform.css";
import { useSelector,useDispatch } from "react-redux";
import { updateProduct } from "../../Store/product_slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = (props) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  const [productname, setProductName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [imagelink, setImagelink] = useState(product.image);

  const handleSubmit4 = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct(product._id, productname, price, quantity, imagelink)
    );
    toast.success("Product Updated Successfully!", {
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
      <form onSubmit={handleSubmit4}>
        <label htmlFor="text">Product Name:</label>
        <input
          type="text"
          id="productname"
          value={productname}
          onChange={(e) => setProductName(e.target.value)}
          className="inputField"
          name="productname"
        />

        <label htmlFor="text">Price:</label>
        <input
          type="text"
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

export default UpdateProduct;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getYourAddress } from "../../Store/address_slice";
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAddress } from "../../Store/address_slice";

const Update = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state)=>state.user);
  const address_arr = useSelector((state)=>state.address.addresses.addresses);

  const selected_ind = address_arr[props.select_ind]._id;
  
  const [setAs, setSetAs] = useState(`${address_arr[props.select_ind].set_as}`);
  const [receiver, setReceiver] = useState(`${address_arr[props.select_ind].receiver}`);
  const [flat, setFlat] = useState(`${address_arr[props.select_ind].flat}`);
  const [street, setStreet] = useState(`${address_arr[props.select_ind].street}`);

  const handleSubmit5 = (e) => {
    e.preventDefault();
    dispatch(updateAddress(selected_ind,user._id,setAs,receiver,flat,street));
    props.message();
    setSetAs("");
    setReceiver("");
    setFlat("");
    setStreet("");
    navigate("/cart");
    window.location.reload();
    toast.success("Address Updated Successfully!", {
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
      <form onSubmit={handleSubmit5}>
        <label htmlFor="text">Set As:</label>
        <input
          type="text"
          id="setAs"
          value={setAs}
          onChange={(e) => setSetAs(e.target.value)}
          className="inputField"
          name="setAs"
        />

        <label htmlFor="number">Receiver Name:</label>
        <input
          type="text"
          id="receiver"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          className="inputField"
          name="receiver"
        />

        <label htmlFor="text">Flat / House No:</label>
        <input
          type="text"
          id="flat"
          value={flat}
          onChange={(e) => setFlat(e.target.value)}
          className="inputField"
          name="flat"
        />

        <label htmlFor="text">Street Address:</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="inputField"
          name="street"
        />

        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </>
  );
};

export default Update;

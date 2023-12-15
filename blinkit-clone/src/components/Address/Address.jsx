import React, { useState, useEffect } from "react";
import "./address.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faPlusCircle,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Add from "./Add";
import Update from "./Update";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Address = () => {
  const address_arr = useSelector(
    (state) => state.address.addresses?.addresses
  );
  let [deliver, setDeliver] = useState(address_arr);

  useEffect(() => {
    getLocation();
    setDeliver(address_arr);
  }, []);

  const [currLocation, setCurrLocation] = useState("");
  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };

  const [addressPop, setAddressPop] = useState(true);
  const navigate = useNavigate();

  const [isSelected, setIsSelected] = useState(-1);

  const goback = () => {
    navigate("/cart");
    window.location.reload();
  };

  const [addOpen, setAddOpen] = useState(false);
  const [activeBtn5, setActiveBtn5] = useState(true);
  const [activeBtn6, setActiveBtn6] = useState(false);

  const btn5handle = () => {
    setActiveBtn5(true);
    setActiveBtn6(false);
  };
  const btn6handle = () => {
    setActiveBtn5(false);
    setActiveBtn6(true);
  };

  const closure = () => {
    setAddOpen(false);
    setAddressPop(true);
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
      {addOpen && (
        <div className="overlay">
          <div className="popup">
            <button
              onClick={() => btn5handle()}
              className={activeBtn5 ? "firstButton btn-active" : "firstButton"}
            >
              Add Address
            </button>
            <button
              onClick={() => btn6handle()}
              className={
                activeBtn6 ? "secondButton btn-active" : "secondButton"
              }
            >
              Update Address
            </button>

            <button
              onClick={() => {
                setAddOpen(false);
                setAddressPop(true);
                setDeliver(address_arr);
              }}
              className="closeButton"
            >
              X
            </button>
            {activeBtn5 ? (
              <Add message={closure} />
            ) : (
              <Update message={closure} select_ind={isSelected} />
            )}
          </div>
        </div>
      )}
      {addressPop && (
        <div className="overlay-address">
          <div className="popup-address">
            <div id="my-address">My Address</div>
            <button className="back-btn" onClick={() => goback()}>
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </button>
            <div id="add-address">
              <button
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  marginLeft: "2vw",
                }}
                onClick={() => {
                  setAddressPop(false);
                  setAddOpen(true);
                  btn5handle();
                }}
              >
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  style={{ color: "yellowgreen", fontSize: "2vw" }}
                />
              </button>
              <div id="add-karo">
                <p style={{ fontWeight: "bold" }}>Add a new address in</p>
                <p style={{ fontWeight: "lighter" }}>
                  {currLocation.city},{currLocation.region},
                  {currLocation.country}
                </p>
              </div>
            </div>
            <div id="add-address2">
              <p
                style={{
                  fontSize: "0.9vw",
                  color: "black",
                  marginTop: "auto",
                  marginBottom: "auto",
                  fontWeight: "bold",
                  marginLeft: "1vw",
                }}
              >
                Choose Delivery Address
              </p>
            </div>
            <div id="address-cont">
              {deliver ? (
                deliver.map((ele, ind) => (
                  <div className="address-cards">
                    <div className="address-header">
                      <button className="circle-check">
                        <button
                          className={
                            ind === isSelected
                              ? "incircle-check"
                              : "incircle-uncheck"
                          }
                          onClick={() => {
                            setIsSelected(ind);
                            localStorage.setItem(
                              "curr_address",
                              JSON.stringify(deliver[ind])
                            );
                          }}
                        ></button>
                      </button>
                      <h3 style={{ marginLeft: "2vw" }}>{ele.set_as}</h3>
                      <button
                        style={{
                          border: "none",
                          background: "none",
                          marginLeft: "10vw",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setAddressPop(false);
                          setAddOpen(true);
                          btn6handle();
                        }}
                      >
                        {isSelected > -1 ? (
                          <>
                            <FontAwesomeIcon
                              icon={faPencil}
                              style={{ fontSize: "1vw" }}
                            />
                            <FontAwesomeIcon
                              icon={faTrash}
                              style={{ fontSize: "1vw", marginLeft: "2em" }}
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </button>
                    </div>
                    <div className="address-details">
                      <p
                        className="reciever"
                        style={{ fontSize: "medium", marginLeft: "4.5vw" }}
                      >
                        {ele.receiver}
                      </p>
                      <p
                        className="flat"
                        style={{ fontSize: "medium", marginLeft: "4.5vw" }}
                      >
                        {ele.flat}
                      </p>
                      <p
                        className="street"
                        style={{ fontSize: "medium", marginLeft: "4.5vw" }}
                      >
                        {ele.street}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <h1>You dont have any Addresses..Create One!</h1>
              )}
            </div>
            <button
              id={isSelected > -1 ? "done" : "gray"}
              onClick={() => {
                if (isSelected > -1) {
                  navigate("/proceedToPay");
                  window.location.reload();
                } else {
                  toast.error("Please Select An Address !", {
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
              }}
            >
              <p>Done</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Address;

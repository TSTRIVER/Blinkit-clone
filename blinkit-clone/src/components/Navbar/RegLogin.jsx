import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "../LoginSignup/myform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, register, login_success } from "../../Store/user_slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const RegLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [logstate, setLogstate] = useState("Login");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("user_token");
    isLoggedIn ? setLogstate("Logout") : setLogstate("Login");
  }, []);

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Invalid User Credentials!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(login(phoneNumber, password));
      toast.success("Logged In Successfully!", {
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
    closePopup();
    setName("");
    setPassword("");
    setConfirmPassword("");
    setPhoneNumber("");
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword || password.length < 8) {
      toast.error("Password too weak!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (phoneNumber.length !== 10) {
      toast.error("Please Enter 10-digit Phone Number!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(register(name, phoneNumber, password));
      toast.success("User Registered Successfully!", {
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
    closePopup();
    setName("");
    setPassword("");
    setConfirmPassword("");
    setPhoneNumber("");
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    // Only allow digits in the phone number field
    const formattedPhoneNumber = inputPhoneNumber.replace(/\D/g, "");
    setPhoneNumber(formattedPhoneNumber);
  };

  let [activeBtn1, setActiveBtn1] = useState(true);
  let [activeBtn2, setActiveBtn2] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const btn1handle = () => {
    setActiveBtn1(true);
    setActiveBtn2(false);
  };
  const btn2handle = () => {
    setActiveBtn1(false);
    setActiveBtn2(true);
  };

  const logoutHandle = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_info");
    setLogstate("Login");
    dispatch(logout());
    toast.success("Logged Out Successfully!", {
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
      <div id="login-out">
        {logstate === "Logout" ? (
          <button onClick={() => logoutHandle()}>{logstate}</button>
        ) : (
          <button onClick={() => setIsPopupOpen(true)}>{logstate}</button>
        )}
      </div>
      {logstate === "Logout" ? (
          <button className="btn-login" onClick={() => logoutHandle()} style={{fontSize:"xx-large",marginRight:"1vw"}}><FontAwesomeIcon icon={faCircleUser} className="face-icon" /></button>
        ) : (
          <button className="btn-login" onClick={() => setIsPopupOpen(true)} style={{fontSize:"xx-large",marginRight:"1vw"}}><FontAwesomeIcon icon={faCircleUser} className="face-icon" /></button>
        )}
         {isPopupOpen && (
          <div className="overlay">
            <div className="popup">
              <button
                onClick={() => btn1handle()}
                className={
                  activeBtn1 ? "firstButton btn-active" : "firstButton"
                }
              >
                Login
              </button>
              <button
                onClick={() => btn2handle()}
                className={
                  activeBtn2 ? "secondButton btn-active" : "secondButton"
                }
              >
                Sign Up
              </button>

              <button onClick={closePopup} className="closeButton">
                X
              </button>
              {activeBtn1 ? (
                <form onSubmit={handleSubmit1}>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="inputField"
                    name="number"
                  />

                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="inputField"
                    name="password"
                  />

                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="inputField"
                    name="cnfpassword"
                  />

                  <button type="submit" className="submitButton">
                    Submit
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit2}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inputField"
                    name="name"
                  />

                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="inputField"
                    name="number"
                  />

                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="inputField"
                    name="password"
                  />

                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="inputField"
                    name="cnfpassword"
                  />

                  <button type="submit" className="submitButton">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
    </>
  );
};
export default RegLogin;

import React from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import { useState } from "react";

const Dashboard = () => {
  const {user} = useSelector((state)=>state.user);
  const [userId,setUserId] = useState(user._id);

  return (
    <>
        <div id="outer-circle">
          <NavLink id="inner-circle" to={`/dashboard/${userId}`}>
            <FontAwesomeIcon icon={faToolbox} className="kit-icon" />
          </NavLink>
        </div>
    </>
  );
};

export default Dashboard;

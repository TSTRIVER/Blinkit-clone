import React from 'react'
import "../Dashboard/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import { useState } from "react";

const Orders = () => {
    const {user} = useSelector((state)=>state.user);

    return (
      <>
         { user.role === 'User' &&
          <div id="outer-circle">
            <NavLink id="inner-circle" to={`/orders/${user.name}/${user._id}`}>
              <FontAwesomeIcon icon={faClockRotateLeft} className="kit-icon" />
            </NavLink>
          </div>
          } 
      </>
    );
  };

export default Orders
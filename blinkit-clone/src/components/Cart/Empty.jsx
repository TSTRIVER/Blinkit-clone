import React from 'react';
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Empty = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='empty-div'>

    <FontAwesomeIcon icon={faCartFlatbed} className='bed-icon'/>
    <p style={{marginBottom: "1vh",fontSize:"large",fontWeight:"bolder"}}>You dont have any items in your cart</p>
    <p style={{marginBottom: "1vh",fontSize:"medium"}}>They're Just a Click Away...</p>
    <button id='empty-btn' onClick={()=>navigate("/products")}>Start Shopping</button>
    </div>
    </>
  )
}

export default Empty
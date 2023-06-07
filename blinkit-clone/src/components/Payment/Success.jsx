import React from 'react'
import "./success.css";
import {useSearchParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Success = () => {

      const searchQuery = useSearchParams()[0];
      const refNum = searchQuery.get("reference");
      const navigate = useNavigate();

  return (
    <>
       <div id="success">
     <h1 style={{color:"yellowgreen"}}>Order Successful</h1>
     <h3>Reference Number :- {refNum}</h3>
     <button className="submitButton" onClick={()=>navigate("/")}>Continue Shopping</button>
       </div>
    </>
  )
}

export default Success
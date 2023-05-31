import React from "react";
import "./home.css";
import "./rows.css";
import Cards from "./Cards";
import Rowtemplate from "./Rowtemplate";

const Home = () => {

    let x = window.innerWidth;

  return (
    <>
      <div className="home_cont">
        <div id="head-banner">
          <div id="banner-content">
            <h1>Mango Utsav</h1>
            <h3>Upto 40% Discount On Select Varieties</h3>
            <button id="shop-now">Shop Now</button>
          </div>
        </div>
        {
          x > 1040 ?
        <div id="scroller_cont">
          <Cards />
        </div>  : ''
      }
        <Rowtemplate/>
      </div>
    </>
  );
};

export default Home;

import React, { useState } from "react";
import "./products.css";
import Lp1 from "./LeftPanelMenu/Lp1";
import Lp2 from "./LeftPanelMenu/Lp2";
import Lp3 from "./LeftPanelMenu/Lp3";
import Lp4 from "./LeftPanelMenu/Lp4";
import Lp5 from "./LeftPanelMenu/Lp5";
import Lp6 from "./LeftPanelMenu/Lp6";
import Lp7 from "./LeftPanelMenu/Lp7";
import Fresh from "./RightPanelCont/Veg&Frut/Fresh";
import Organic from "./RightPanelCont/Veg&Frut/Organic";
import M1 from "./RightPanelCont/Milk/M1";
import M2 from "./RightPanelCont/Milk/M2";
import M3 from "./RightPanelCont/Milk/M3";
import M4 from "./RightPanelCont/Milk/M4";
import M5 from "./RightPanelCont/Milk/M5";
import C1 from "./RightPanelCont/Chips/C1";
import C2 from "./RightPanelCont/Chips/C2";
import C3 from "./RightPanelCont/Chips/C3";
import D1 from "./RightPanelCont/Drinks/D1";
import D2 from "./RightPanelCont/Drinks/D2";
import D3 from "./RightPanelCont/Drinks/D3";
import E1 from "./RightPanelCont/Shampoo/E1";

import { useSelector, useDispatch } from "react-redux";
import { updateRow, updateCol } from "../../Store/click_slice";

const ProductMain = () => {
  let sz = window.innerWidth;

  const mat = [
    [
      <Fresh />,
      <Organic />,
      <Fresh />,
      <Organic />,
      <Fresh />,
      <Organic />,
      <Fresh />,
    ],
    [<M1 />, <M2 />, <M3 />, <M4 />, <M5 />],
    [<C1 />, <C2 />, <C3 />],
    [<D1 />, <D2 />, <D3 />],
    [<E1 />],
  ];

  const rowcomp = [
    <Lp1 />,
    <Lp2 />,
    <Lp3 />,
    <Lp4 />,
    <Lp5 />,
    <Lp6 />,
    <Lp7 />,
  ];

  const img_arr = [1,2,3,4,5,6,7];

  const head_arr = [
    "Vegetables & Fruits",
    "Dairy & Breakfast",
    "Munchies",
    "Cold drinks & Shakes",
    "Bathroom Accessories",
    "Chocolates & Dry Fruits",
    "Biscuits & Bakery",
  ];

  const drop_arr = [
    "Atta & Rice",
    "Pulses",
    "Grooming",
    "Chicken",
    "Meat",
    "Fish",
    "Cleaning Essentials",
    "Supplements",
    "Pharma & Medicines",
    "Gadget Accessories",
  ];

  let [leftind, setLeftind] = useState(0);

  const handle_click = (event, index) => {
    setLeftind(index);
  };

  const dispatch = useDispatch();
  const click1 = { first: leftind };
  dispatch(updateRow(click1));

  let row = useSelector((state) => state.clicker.clicker.first);
  let col = useSelector((state) => state.clicker.clicker.second);
  let name = useSelector((state) => state.clicker.clicker.name);

  return (
    <>
      <div id="menu">
        <div id="menu-cont">
          {
            sz >= 875 ? 
          head_arr.map((ele, key) => (

            <button
              className="ppstyle"
              onClick={(event) => handle_click(event, key)}
              key={key}
            >
              {ele}
            </button> 
          )) : img_arr.map((ele,key) => (
                <button className="menu-btn" onClick={(event) => handle_click(event, key)}
                key={key}>
                  {ele}
                </button>
          ))
        }
          <div className="more ppstyle">
            More <span style={{ marginLeft: "1vw" }}>⌵</span>
            <div className="drop-down">
              {drop_arr.map((ele) => (
                <div className="drop-cards">{ele}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "50%",
          backgroundColor: "gray",
        }}
      >
        <div id="left-panel">{rowcomp[row]}</div>
        <div id="right-panel">
          <div id="first-part">
            <p style={{ fontWeight: "bold" }}>Buy {name} Online</p>
          </div>
          <div id="second-part">{mat[row][col]}</div>
        </div>
      </div>
    </>
  );
};

export default ProductMain;

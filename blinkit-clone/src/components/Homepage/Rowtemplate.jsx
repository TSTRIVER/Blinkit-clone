import React, { useState } from "react";
import "./rows.css";
import Row1 from "./Rows/Row1";
import Row2 from "./Rows/Row2";
import Row3 from "./Rows/Row3";
import Row4 from "./Rows/Row4";
import Row5 from "./Rows/Row5";
import Row1b from "./Banners/Row1b";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";

const Rowtemplate = () => {
  const comp_arr = [
    <Row1 />,
    <Row1b />,
    <Row2 />,
    <Row1b />,
    <Row3 />,
    <Row4 />,
    <Row5 />,
  ];
  const row_arr = [
    {
      name: "Dairy, Breads & Eggs",
      alt: "Bestsellers",
    },
    {
      name: "Shop By Category",
      alt: "Shop By Category",
    },
    {
      name: "Bathroom and Laundry",
      alt: "Bathroom and Laundry",
    },
    {},
    {
      name: "Snacks & Munchies",
      alt: "Snacks & Munchies",
    },
    {
      name: "Drinks & Shakes",
      alt: "Drinks & Shakes",
    },
    {
      name: "Fruits & Veges",
      alt: "Fruits & Veges",
    },
  ];

  let x = window.innerWidth;
  let i = 0;

  return (
    <>
      {
        row_arr.map((ele, ind) => {
          if (ind % 2 == 0 || ind == 5 || ind == 6) {
            return (
              <>
                <div id="prod-row1">
                  <div id="small_cont">
                    <h1
                      style={{
                        marginBottom: "0.3vw",
                        fontSize: "1.8vw",
                        marginLeft: "1.5vw",
                        marginTop: "1vw",
                      }}
                    >
                      {x > 1040 ? ele.name : ele.alt}
                    </h1>
                    {x > 1040 ? (
                      <NavLink
                        to="/products"
                        style={{
                          color: "green",
                          cursor: "pointer",
                          marginRight: "1vw",
                          fontSize: "1.2vw",
                          textDecoration: "none",
                        }}
                      >
                        See all
                      </NavLink>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="prod_cont">{comp_arr[ind]}</div>
                </div>
              </>
            );
          } else {
            return (
              <>
                {x > 1040 ? (
                  ""
                ) : (
                  <div id="prod-row2">
                    <div id="small_cont">
                      <h1
                        style={{
                          marginBottom: "0.3vw",
                          fontSize: "2.4vw",
                          marginLeft: "1.5vw",
                          marginTop: "1vw",
                        }}
                      >
                        {x > 1040 ? ele.name : ele.alt}
                      </h1>
                      {x > 1040 ? (
                        <NavLink
                          to="/products"
                          style={{
                            color: "green",
                            cursor: "pointer",
                            marginRight: "1vw",
                            fontSize: "1.2vw",
                            textDecoration: "none",
                          }}
                        >
                          See all
                        </NavLink>
                      ) : (
                        ""
                      )}
                    </div>
                    {ind == 1 ? <Row1b /> : ""}
                    {ind == 3 ? (
                      <div id="ban3">
                        <div className="v1">
                          <iframe
                            style={{ width: "100%", height: "100%" }}
                            src="https://www.youtube.com/embed/86907OhWXoU"
                          ></iframe>
                        </div>
                        <div className="v1">
                          <img
                            src="https://cdn.grabon.in/gograbon/images/merchant/1660048686470.jpg"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </>
            );
          }
        }) //end of return statement
      }
    </>
  );
};
// https://offers.getsimpl.com/wp-content/uploads/2022/02/blinkit_final.png
//https://cdn.grabon.in/gograbon/images/merchant/1660048686470.jpg

export default Rowtemplate;

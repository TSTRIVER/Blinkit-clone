import React from "react";

const M1 = () => {
  const milkArray = [
    {
      name: "Amul",
      quantity: "1 liter",
      price: "₹50",
    },
    {
      name: "Mother Dairy",
      quantity: "1 liter",
      price: "₹45",
    },
    {
      name: "Nandini",
      quantity: "1 liter",
      price: "₹48",
    },
    {
      name: "Heritage",
      quantity: "1 liter",
      price: "₹52",
    },
    {
      name: "Gokul",
      quantity: "1 liter",
      price: "₹50",
    },
    {
      name: "Milma",
      quantity: "1 liter",
      price: "₹46",
    },
    {
      name: "Aavin",
      quantity: "1 liter",
      price: "₹49",
    },
    {
      name: "Saras",
      quantity: "1 liter",
      price: "₹47",
    },
    {
      name: "Sanchi",
      quantity: "1 liter",
      price: "₹53",
    },
    {
      name: "Param",
      quantity: "1 liter",
      price: "₹51",
    },
    {
      name: "Verka",
      quantity: "1 liter",
      price: "₹48",
    },
    {
      name: "Dudhsagar",
      quantity: "1 liter",
      price: "₹52",
    },
  ];

  return (
    <>
      {milkArray.map((ele) => (
        <div className="products">
          <img src="https://www.bigbasket.com/media/uploads/p/xxl/104707_8-amul-homogenised-standardised-milk.jpg" />
          <p className="pstyle">Time</p>
          <h3 className="h3style">{ele.name}</h3>
          <p className="pstyle">{ele.quantity}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.6vw",
              width: "100%",
              height: "10%",
            }}
          >
            <p className="pstyle">{ele.price}</p>
            <button id="btn">Add</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default M1;
